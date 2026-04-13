from __future__ import annotations

import sys
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ACCENT = colors.HexColor("#9f5d34")
TEXT = colors.HexColor("#111827")
MUTED = colors.HexColor("#4b5563")
LIGHT = colors.HexColor("#d7dce2")
SOFT = colors.HexColor("#f4f6f8")


SUMMARY = (
    "Senior platform and applied AI engineer with 7+ years building cloud-native Java systems, "
    "developer tooling, and product foundations that teams can support in production. Strongest "
    "in Spring Boot platforms, observability, distributed systems, and practical AI workflow design."
)


CORE_STRENGTHS = [
    "Spring Boot microservices, event-driven integration, APIs, and platform boundaries.",
    "Applied AI product design with prompt quality scoring, privacy guardrails, and browser-based developer tooling.",
    "Mobile and web product foundations with Flutter, Firebase, Angular, and operational documentation.",
    "Reliability engineering through observability, diagnostics, release automation, and mentoring."
]


EXPERIENCE = [
    {
        "role": "Senior Software Engineer",
        "company": "FPT Americas",
        "location": "Dallas, Texas",
        "period": "2022 - Present",
        "bullets": [
            "Led backend and platform delivery across tolling and payments workstreams with secure identity, operator workflows, and multi-service coordination.",
            "Reduced incident resolution time by about 50% using AppDynamics, heap and thread analysis, stronger diagnostics, and post-mortem follow-through.",
            "Improved checkout latency by about 35% with caching, asynchronous payment flows, and cleaner service orchestration.",
            "Mentored engineers, ran code reviews, and raised API and release standards across teams shipping production-critical systems."
        ]
    },
    {
        "role": "Senior Software Engineer",
        "company": "FPT Software",
        "location": "Ho Chi Minh City, Vietnam",
        "period": "2021 - 2022",
        "bullets": [
            "Delivered payment and platform features with maintainable service design, secure token flows, and safer release paths.",
            "Introduced centralized logging and diagnostic improvements that shortened defect triage and tightened support feedback loops.",
            "Interviewed and mentored engineers while enforcing review standards for scalable, maintainable Java services."
        ]
    },
    {
        "role": "Software Engineer",
        "company": "FPT Software",
        "location": "Ho Chi Minh City, Vietnam",
        "period": "2018 - 2021",
        "bullets": [
            "Built core modules across authentication, catalog, order, notification, and search flows in enterprise applications.",
            "Improved search and data performance with Elasticsearch, SQL tuning, and indexing on high-value user paths.",
            "Shipped full-stack features across Java services, AWS integrations, and frontend components while building a strong foundation in cross-functional delivery."
        ]
    }
]


PROJECTS = [
    {
        "title": "AI Dev Coach",
        "subtitle": "Applied AI product",
        "bullets": [
            "Built a Chrome extension that coaches developers to use ChatGPT, Claude, Gemini, Grok, and DeepSeek without skipping reasoning and debugging habits.",
            "Shipped a role-aware prompt builder, real-time prompt scoring, prompt linting, local sensitive-data redaction, and release-ready docs workflows."
        ]
    },
    {
        "title": "BeFam",
        "subtitle": "Mobile-first genealogy and clan operations platform",
        "bullets": [
            "Built a Flutter and Firebase product with OTP authentication, genealogy workspaces, events, funds, join-request flows, and Store billing support.",
            "Owned product docs, CI/CD, monitoring, and bilingual runbooks so the product operates as a system, not just an app codebase."
        ]
    },
    {
        "title": "gig",
        "subtitle": "Release verification CLI",
        "bullets": [
            "Built a Go CLI that verifies ticket completeness and generates release packets before promotion across branches and environments.",
            "Owned product framing, CLI UX, documentation, installers, and release automation for a reusable public developer tool."
        ]
    }
]


SKILLS = {
    "Languages": "Java, Go, TypeScript, JavaScript, Dart, SQL",
    "Platforms": "Spring Boot, Angular, Flutter, Firebase, Kafka, Redis, Elasticsearch",
    "Cloud and Ops": "AWS, Kubernetes, Docker, AppDynamics, CI/CD, GitHub Actions",
    "Applied AI": "Prompt quality systems, browser extensions, LLM workflow guardrails, privacy-minded prompt redaction"
}


EDUCATION = [
    {
        "title": "Engineer's Degree",
        "school": "Posts and Telecommunications Institute of Technology",
        "detail": "Graduated 2022"
    }
]


def build_styles():
    base = getSampleStyleSheet()
    styles = {
        "name": ParagraphStyle(
            "Name",
            parent=base["Title"],
            fontName="Helvetica-Bold",
            fontSize=22,
            leading=24,
            textColor=TEXT,
            alignment=TA_LEFT,
            spaceAfter=4,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=14,
            textColor=ACCENT,
            spaceAfter=8,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9,
            leading=13,
            textColor=MUTED,
            spaceAfter=10,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=12,
            textColor=ACCENT,
            spaceBefore=6,
            spaceAfter=8,
        ),
        "summary": ParagraphStyle(
            "Summary",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=9.5,
            leading=14,
            textColor=TEXT,
            spaceAfter=8,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=9,
            leading=12,
            textColor=MUTED,
        ),
        "heading": ParagraphStyle(
            "Heading",
            parent=base["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=10.2,
            leading=13,
            textColor=TEXT,
            spaceAfter=2,
        ),
        "label": ParagraphStyle(
            "Label",
            parent=base["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=9,
            leading=12,
            textColor=MUTED,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=9,
            leading=13,
            textColor=TEXT,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=9,
            leading=12.5,
            leftIndent=10,
            firstLineIndent=-10,
            bulletIndent=0,
            textColor=TEXT,
            spaceAfter=2,
        ),
        "small": ParagraphStyle(
            "Small",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=8.4,
            leading=11.5,
            textColor=MUTED,
        ),
    }
    return styles


def bullet_list(items: list[str], styles: dict[str, ParagraphStyle]) -> list[Paragraph]:
    return [Paragraph(f"- {item}", styles["bullet"]) for item in items]


def section_heading(text: str, styles: dict[str, ParagraphStyle]) -> list:
    return [
        Spacer(1, 4),
        Paragraph(text.upper(), styles["section"]),
        HRFlowable(width="100%", thickness=0.6, color=LIGHT, spaceAfter=8, spaceBefore=0),
    ]


def role_block(item: dict[str, str | list[str]], styles: dict[str, ParagraphStyle]) -> KeepTogether:
    left = [
        Paragraph(f"{item['role']} - {item['company']}", styles["heading"]),
        Paragraph(item["location"], styles["meta"]),
    ]
    right = [Paragraph(item["period"], styles["label"])]
    header = Table(
        [[left, right]],
        colWidths=[4.85 * inch, 1.35 * inch],
        style=TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("ALIGN", (1, 0), (1, 0), "RIGHT"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
        ]),
    )
    flowables = [header, *bullet_list(item["bullets"], styles), Spacer(1, 6)]
    return KeepTogether(flowables)


def project_block(item: dict[str, str | list[str]], styles: dict[str, ParagraphStyle]) -> KeepTogether:
    title = Paragraph(f"{item['title']} - <font color='#9f5d34'>{item['subtitle']}</font>", styles["heading"])
    flowables = [title, *bullet_list(item["bullets"], styles), Spacer(1, 6)]
    return KeepTogether(flowables)


def page_footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(doc.pagesize[0] - doc.rightMargin, 0.45 * inch, f"Page {doc.page}")
    canvas.restoreState()


def build_resume(output_path: Path) -> None:
    styles = build_styles()
    doc = SimpleDocTemplate(
        str(output_path),
        pagesize=LETTER,
        leftMargin=0.68 * inch,
        rightMargin=0.68 * inch,
        topMargin=0.62 * inch,
        bottomMargin=0.62 * inch,
        title="Hung Pham Resume",
        author="Hung Pham",
    )

    contact_line = " | ".join([
        "Dallas, Texas",
        "<link href='mailto:phamhung.working@gmail.com' color='#4b5563'>phamhung.working@gmail.com</link>",
        "<link href='tel:+19452369965' color='#4b5563'>(945) 236-9965</link>",
        "<link href='https://hunpeo.web.app/' color='#4b5563'>hunpeo.web.app</link>",
        "<link href='https://github.com/phamhungptithcm' color='#4b5563'>github.com/phamhungptithcm</link>",
        "<link href='https://www.linkedin.com/in/hunpham/' color='#4b5563'>linkedin.com/in/hunpham</link>",
    ])

    story = [
        Paragraph("Hung Pham", styles["name"]),
        Paragraph("Senior Platform / Applied AI Engineer", styles["role"]),
        Paragraph(contact_line, styles["contact"]),
        HRFlowable(width="100%", thickness=0.9, color=ACCENT, spaceBefore=0, spaceAfter=10),
        *section_heading("Summary", styles),
        Paragraph(SUMMARY, styles["summary"]),
        *section_heading("Core Strengths", styles),
        *bullet_list(CORE_STRENGTHS, styles),
        *section_heading("Experience", styles),
    ]

    for item in EXPERIENCE:
        story.append(role_block(item, styles))

    story.extend(section_heading("Selected Projects", styles))
    for item in PROJECTS:
        story.append(project_block(item, styles))

    story.extend(section_heading("Skills", styles))
    for label, value in SKILLS.items():
        story.append(Paragraph(f"<b>{label}:</b> {value}", styles["body"]))
        story.append(Spacer(1, 3))

    story.extend(section_heading("Education", styles))
    for item in EDUCATION:
        edu_table = Table(
            [[
                [
                    Paragraph(item["title"], styles["heading"]),
                    Paragraph(item["school"], styles["body"]),
                ],
                Paragraph(item["detail"], styles["label"]),
            ]],
            colWidths=[4.85 * inch, 1.35 * inch],
            style=TableStyle([
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("ALIGN", (1, 0), (1, 0), "RIGHT"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ("BACKGROUND", (0, 0), (-1, -1), SOFT),
                ("BOX", (0, 0), (-1, -1), 0.5, LIGHT),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
                ("LEFTPADDING", (0, 0), (-1, -1), 10),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
            ]),
        )
        story.append(edu_table)

    doc.build(story, onFirstPage=page_footer, onLaterPages=page_footer)


def main() -> int:
    default_output = Path("src/assets/Resume-Hung-Pham.pdf")
    output_path = Path(sys.argv[1]) if len(sys.argv) > 1 else default_output
    output_path.parent.mkdir(parents=True, exist_ok=True)
    build_resume(output_path)
    print(f"Wrote {output_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
