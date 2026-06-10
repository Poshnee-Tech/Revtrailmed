# RevTrailMed — Medical Billing Website

Professional medical billing company website built with React 19, Vite, and Tailwind CSS v4.

## Tech Stack

| Layer | Technology |
|---|---|
| UI Library | React 19 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS v4 + inline styles |
| Routing | React Router v7 |
| Icons | lucide-react |
| Fonts | Google Fonts (Inter, Playfair Display) |

## Project Structure

```
revtrailmed/
├── public/
│   ├── .htaccess          # Apache: SPA routing + security headers
│   ├── robots.txt
│   └── images/            # All site images
├── src/
│   ├── components/        # Shared layout components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ContactBar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── CompetitorSection.jsx
│   │   ├── PartnersSection.jsx
│   │   └── NewsletterSection.jsx
│   ├── pages/             # One file per route
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── EMRSupport.jsx
│   │   ├── MedicalBilling.jsx
│   │   ├── RevenueCycleManagement.jsx
│   │   ├── AppointmentScheduling.jsx
│   │   ├── AuthorizationServices.jsx
│   │   ├── ARRecoveryServices.jsx
│   │   ├── ClinicalLabBilling.jsx
│   │   ├── DentalBillingCoding.jsx
│   │   └── VerificationOfBenefits.jsx
│   ├── App.jsx            # Route definitions
│   ├── index.css          # Global styles + responsive breakpoints
│   └── main.jsx           # React entry point
├── index.html             # HTML shell with CSP meta tag
├── vite.config.js
└── package.json
```

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

Output goes into `dist/`. Upload the entire contents of `dist/` to your hosting server web root.

## Deployment (Shared Hosting / Apache)

1. Run `npm run build`
2. Upload everything inside `dist/` to your `public_html/` (or web root)
3. The `.htaccess` is automatically included in the build — **do not delete it**
4. Verify the site loads at your domain

### Enable HTTPS (strongly recommended)

Once your SSL certificate is active, uncomment these two blocks inside `.htaccess`:

- The HTTPS force-redirect block at the bottom
- The `Strict-Transport-Security` header line

### Recommended file permissions after upload

Set via your hosting file manager or FTP client:

```
.htaccess        444  (read-only for all — web server cannot overwrite it)
index.html       644
assets/          755
assets/*.js      644
assets/*.css     644
images/          755
images/*         644
```

Setting `.htaccess` to **444** means even if the server process is compromised, it cannot rewrite the security headers.

## Security Layers

| Measure | What it blocks |
|---|---|
| `script-src 'self'` in CSP | External and inline `<script>` injections — the primary malware defence |
| CSP `<meta>` tag in HTML | Browser-enforced fallback when server headers are unavailable |
| `X-Frame-Options: DENY` | Clickjacking |
| `X-Content-Type-Options: nosniff` | MIME-sniffing attacks |
| `Referrer-Policy` | Leaking URLs to third-party servers |
| `Permissions-Policy` | Camera, microphone, geolocation access |
| `Options -Indexes` | Directory listing |
| Content-hashed filenames | Cache poisoning (Vite adds hash to every JS/CSS filename) |
| `sourcemap: false` | Source code exposure in production |

## Page Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/services` | Services overview |
| `/contact` | Contact |
| `/privacy` | Privacy Policy |
| `/emr-ehr-support` | EMR / EHR Support |
| `/medical-billing` | Medical Billing |
| `/revenue-cycle-management` | Revenue Cycle Management |
| `/appointment-scheduling` | Appointment Scheduling |
| `/authorization-services` | Authorization Services |
| `/ar-recovery-services` | A/R Recovery Services |
| `/clinical-lab-billing` | Clinical Lab Billing Services |
| `/dental-billing-coding` | Dental Billing And Coding |
| `/verification-of-benefits` | Verification of Benefits |
