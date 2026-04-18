import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { Analytics, getAnalytics, isSupported, logEvent, setUserProperties } from 'firebase/analytics';

import { environment } from '../../../environments/environment';

type AnalyticsParamValue = string | number | boolean;
type AnalyticsParams = Record<string, AnalyticsParamValue | undefined>;

@Injectable({
  providedIn: 'root'
})
export class PortfolioAnalyticsService {
  private analytics?: Analytics;
  private analyticsReady?: Promise<Analytics | null>;
  private viewedSections = new Set<string>();
  private landingTracked = false;

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  init(): void {
    void this.ensureAnalytics();
  }

  trackSectionView(sectionId: string): void {
    if (this.viewedSections.has(sectionId)) {
      return;
    }

    this.viewedSections.add(sectionId);
    this.track('portfolio_section_view', {
      section_id: sectionId
    });
  }

  trackNavClick(sectionId: string, source: string): void {
    this.track('portfolio_nav_click', {
      section_id: sectionId,
      source_area: source
    });
  }

  trackResumeDownload(sourceArea: string): void {
    this.track('portfolio_resume_download', {
      source_area: sourceArea
    });
  }

  trackCtaClick(actionId: string, sectionId: string, target?: string): void {
    this.track('portfolio_cta_click', {
      action_id: actionId,
      section_id: sectionId,
      target_host: this.extractHost(target),
      target_type: this.resolveTargetType(target)
    });
  }

  trackCaseStudyClick(actionId: string, projectId: string, target?: string): void {
    this.track('portfolio_case_study_click', {
      action_id: actionId,
      project_id: projectId,
      target_host: this.extractHost(target),
      target_type: this.resolveTargetType(target)
    });
  }

  trackContactClick(actionId: string, target?: string): void {
    this.track('portfolio_contact_click', {
      action_id: actionId,
      target_host: this.extractHost(target),
      target_type: this.resolveTargetType(target)
    });
  }

  private async ensureAnalytics(): Promise<Analytics | null> {
    if (!this.analyticsReady) {
      this.analyticsReady = this.initializeAnalytics();
    }

    return this.analyticsReady;
  }

  private async initializeAnalytics(): Promise<Analytics | null> {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }

    if (!environment.firebaseConfig.measurementId || this.isLocalHost()) {
      return null;
    }

    const supported = await isSupported().catch(() => false);
    if (!supported) {
      return null;
    }

    const app = getApps().length ? getApp() : initializeApp(environment.firebaseConfig);
    this.analytics = getAnalytics(app);
    this.trackLandingContext();

    return this.analytics;
  }

  private trackLandingContext(): void {
    if (!this.analytics || this.landingTracked) {
      return;
    }

    this.landingTracked = true;

    const query = new URLSearchParams(window.location.search);
    const landingParams = this.compact({
      landing_path: this.limit(window.location.pathname + window.location.hash, 100),
      referrer_host: this.extractHost(this.document.referrer),
      language: this.limit(navigator.language, 32),
      timezone: this.limit(Intl.DateTimeFormat().resolvedOptions().timeZone, 48),
      utm_source: this.readQueryValue(query, ['utm_source']),
      utm_medium: this.readQueryValue(query, ['utm_medium']),
      utm_campaign: this.readQueryValue(query, ['utm_campaign']),
      utm_content: this.readQueryValue(query, ['utm_content']),
      viewer_company: this.readQueryValue(query, ['company', 'org', 'organization']),
      viewer_role: this.readQueryValue(query, ['job_title', 'jobtitle', 'role', 'title']),
      viewer_type: this.readQueryValue(query, ['viewer_type', 'audience', 'persona', 'source'])
    });

    logEvent(this.analytics, 'portfolio_landing', landingParams);

    const userProperties = this.compact({
      viewer_company: landingParams['viewer_company'] as string | undefined,
      viewer_role: landingParams['viewer_role'] as string | undefined,
      viewer_type: landingParams['viewer_type'] as string | undefined
    });

    if (Object.keys(userProperties).length > 0) {
      setUserProperties(this.analytics, userProperties);
      logEvent(this.analytics, 'portfolio_visit_context', {
        ...userProperties,
        referrer_host: landingParams['referrer_host'] as string | undefined
      });
    }
  }

  private track(eventName: string, params: AnalyticsParams): void {
    void this.dispatch(eventName, params);
  }

  private async dispatch(eventName: string, params: AnalyticsParams): Promise<void> {
    const analytics = await this.ensureAnalytics();
    if (!analytics) {
      return;
    }

    logEvent(analytics, eventName, this.compact(params));
  }

  private compact(params: AnalyticsParams): Record<string, AnalyticsParamValue> {
    return Object.entries(params).reduce<Record<string, AnalyticsParamValue>>((acc, [key, value]) => {
      if (value === undefined || value === null || value === '') {
        return acc;
      }

      acc[key] = value;
      return acc;
    }, {});
  }

  private readQueryValue(query: URLSearchParams, keys: string[]): string | undefined {
    for (const key of keys) {
      const rawValue = query.get(key)?.trim();
      if (rawValue) {
        return this.limit(rawValue, 100);
      }
    }

    return undefined;
  }

  private extractHost(target?: string): string | undefined {
    if (!target) {
      return undefined;
    }

    if (target.startsWith('mailto:')) {
      return 'mailto';
    }

    if (target.startsWith('#')) {
      return 'internal';
    }

    try {
      return this.limit(new URL(target, window.location.origin).hostname, 100);
    } catch {
      return undefined;
    }
  }

  private resolveTargetType(target?: string): string | undefined {
    if (!target) {
      return undefined;
    }

    if (target.startsWith('mailto:')) {
      return 'email';
    }

    if (target.startsWith('#')) {
      return 'anchor';
    }

    if (target.endsWith('.pdf') || target.includes('.pdf?')) {
      return 'file';
    }

    try {
      const url = new URL(target, window.location.origin);
      return url.origin === window.location.origin ? 'internal' : 'external';
    } catch {
      return undefined;
    }
  }

  private isLocalHost(): boolean {
    return ['localhost', '127.0.0.1'].includes(window.location.hostname);
  }

  private limit(value: string | undefined, size: number): string | undefined {
    return value ? value.slice(0, size) : undefined;
  }
}
