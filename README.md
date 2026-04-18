# Hung Pham - Portfolio

## Description

This is the source code for Hung Pham's portfolio website. It's built with Angular 16 and uses various libraries such as Angular Fire, Angular Scroll, Angulartics2, Bootstrap, and more.

## Features

- **Angular Animations**: For smooth and engaging animations.
- **Angular Fire**: For integrating Firebase.
- **Angular Scroll**: For scroll events and animations.
- **Angulartics2**: For analytics tracking.
- **Bootstrap**: For responsive design and prebuilt components.
- **Lightbox2**: For displaying images in a "lightbox" that floats overtop of web page.

## Setup

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the development server.
4. Visit `http://localhost:4200` in your browser.

## Deployment

To build the project for production, run `npm run build`. This will create a `dist/` directory with the compiled assets.

## Firebase Analytics Tracking

The portfolio now sends Firebase / GA4 events for:

- landing visits
- section views
- nav clicks
- CTA clicks
- case-study clicks
- contact clicks
- resume downloads

GA4 can show country, city, source / medium, device, browser, and engagement automatically.

If you want visitor context such as recruiter type, company, or target role, generate a tracked link and send that link directly in outreach:

```bash
npm run link:portfolio -- \
  --viewer-type recruiter \
  --company Stripe \
  --job-title "Staff Platform Engineer" \
  --utm-source linkedin \
  --utm-medium dm \
  --utm-campaign staff_platform_outreach
```

Example output:

```text
https://hunpeo.web.app/?viewer_type=recruiter&company=Stripe&job_title=Staff+Platform+Engineer&utm_source=linkedin&utm_medium=dm&utm_campaign=staff_platform_outreach
```

Important: GA4 cannot automatically know a visitor's real job title from the browser. That value must come from a tracked link or another explicit user input flow.

## Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

If you have any questions, feel free to reach out to me at [email](mailto:phamhung.pitit@gmail.com).
