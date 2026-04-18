#!/usr/bin/env node

const DEFAULT_BASE_URL = 'https://hunpeo.web.app/';

const aliases = {
  '--base': 'base',
  '--viewer-type': 'viewer_type',
  '--company': 'company',
  '--job-title': 'job_title',
  '--role': 'job_title',
  '--utm-source': 'utm_source',
  '--utm-medium': 'utm_medium',
  '--utm-campaign': 'utm_campaign',
  '--utm-content': 'utm_content',
  '--ref': 'ref'
};

const helpText = `
Usage:
  node scripts/build-portfolio-tracking-link.mjs [options]

Options:
  --base           Override base URL. Default: ${DEFAULT_BASE_URL}
  --viewer-type    Example: recruiter, hiring_manager, founder
  --company        Company or org name
  --job-title      Role title for this outreach link
  --utm-source     Example: linkedin, github, email
  --utm-medium     Example: dm, email, referral
  --utm-campaign   Example: staff_backend_outreach
  --utm-content    Optional detail like recruiter_name or message_variant
  --ref            Optional free-form internal label
  --help           Show this message

Example:
  node scripts/build-portfolio-tracking-link.mjs \\
    --viewer-type recruiter \\
    --company Stripe \\
    --job-title "Staff Platform Engineer" \\
    --utm-source linkedin \\
    --utm-medium dm \\
    --utm-campaign staff_platform_outreach
`.trim();

const args = process.argv.slice(2);

if (args.includes('--help')) {
  console.log(helpText);
  process.exit(0);
}

const options = {};

for (let i = 0; i < args.length; i += 1) {
  const key = args[i];
  const normalizedKey = aliases[key];

  if (!normalizedKey) {
    console.error(`Unknown option: ${key}`);
    console.error(helpText);
    process.exit(1);
  }

  const next = args[i + 1];
  if (!next || next.startsWith('--')) {
    console.error(`Missing value for option: ${key}`);
    process.exit(1);
  }

  options[normalizedKey] = next.trim();
  i += 1;
}

const baseUrl = options.base || DEFAULT_BASE_URL;
delete options.base;

let url;

try {
  url = new URL(baseUrl);
} catch {
  console.error(`Invalid base URL: ${baseUrl}`);
  process.exit(1);
}

Object.entries(options)
  .filter(([, value]) => Boolean(value))
  .forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

console.log(url.toString());
