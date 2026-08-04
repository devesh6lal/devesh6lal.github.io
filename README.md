# Digital Coast Solutions Website — Version 2

This is the launch-ready static website package for Digital Coast Solutions. It is designed for GitHub Pages and the custom domain `digitalcoast.solutions`; confirm the business details in `LAUNCH-CHECKLIST.md` before public promotion.

## What Version 2 adds

- A separate `about.html` page, so **About** behaves like the other navigation links.
- Production page titles, descriptions, canonical URLs and social sharing metadata.
- A sitemap, improved `robots.txt`, structured business data and a custom 404 page.
- A privacy notice and consent wording for website enquiries.
- Mobile navigation, keyboard focus, reduced-motion and anchor-position improvements.
- A `.nojekyll` file for reliable direct publishing on GitHub Pages, plus full custom-domain instructions.
- Web app icons and a site manifest.
- International Fiji phone formatting: `+679 281 8005`.

## Main files

- `index.html` — Home page
- `services.html` — Service details
- `about.html` — Company information and approach
- `contact.html` — Contact details and enquiry form
- `privacy.html` — Privacy notice
- `404.html` — Page-not-found page
- `sitemap.xml` — Search-engine page list
- `robots.txt` — Search-crawler instructions
- `assets/` — CSS, JavaScript, logo files, icons and illustrations

## Replace Version 1 on GitHub

1. Open the repository `devesh6lal/devesh6lal.github.io`.
2. Choose **Add file → Upload files**.
3. Open this Version 2 folder on your computer.
4. Select **all files and folders inside this folder**. Do not upload the outer folder itself.
5. Drag them into GitHub.
6. Choose **Commit changes**.
7. Wait for the green GitHub Pages deployment check.
8. Test the temporary address: `https://devesh6lal.github.io/`.

GitHub replaces files with matching names and adds the new files. After uploading, confirm that `about.html`, `privacy.html`, `sitemap.xml`, `site.webmanifest` and `.nojekyll` appear at the repository root.

The package intentionally does not include a `CNAME` file at first. This lets you test the GitHub address before connecting the official domain. GitHub will create the `CNAME` file automatically when you save the custom domain in **Settings → Pages**.

## Connect `digitalcoast.solutions`

### 0. Recommended: verify the domain on your GitHub account

1. On GitHub, open your profile picture → **Settings**.
2. Under **Code, planning, and automation**, open **Pages**.
3. Choose **Add a domain** and enter `digitalcoast.solutions`.
4. GitHub will provide a unique TXT record. Add that TXT record at Porkbun, then return to GitHub and complete verification.

This protects the domain from being used by another GitHub account. The TXT value is unique to your account, so it cannot be included in this package in advance.

### 1. Set the domain on the repository before changing website DNS

1. Open the repository.
2. Open **Settings → Pages**.
3. Under **Custom domain**, enter:

   `digitalcoast.solutions`

4. Choose **Save**.

GitHub should create a `CNAME` file containing `digitalcoast.solutions`. Confirm that the custom domain is shown in **Settings → Pages** before editing Porkbun DNS.

### 2. Add the website DNS records manually at Porkbun

Use Porkbun's normal **DNS Records** editor rather than a one-click reset or quick configuration, because the domain already has Zoho Mail records that must remain in place.

For the root domain, add these four **A** records:

| Type | Host | Answer |
|---|---|---|
| A | blank or `@` | `185.199.108.153` |
| A | blank or `@` | `185.199.109.153` |
| A | blank or `@` | `185.199.110.153` |
| A | blank or `@` | `185.199.111.153` |

For the `www` version, add:

| Type | Host | Answer |
|---|---|---|
| CNAME | `www` | `devesh6lal.github.io` |

Important:

- Take a screenshot of the existing DNS records first.
- Keep all existing Zoho Mail **MX**, **TXT**, SPF, DKIM and verification records.
- Remove or replace only conflicting website records for the blank/`@` host or `www` host.
- Do not create a wildcard `*` record for GitHub Pages.

### 3. Enable HTTPS

After DNS validation succeeds, return to **Settings → Pages** and select **Enforce HTTPS**. DNS and certificate changes can take time to become available.

The final public address will be:

`https://digitalcoast.solutions/`

The `www` address should redirect to the main address when both are configured correctly.

## Contact form

The current form prepares an email in the visitor's email application. This works without a server and is compatible with GitHub Pages.

For a form that submits directly in the browser and shows a success page, create an account with a form service such as Formspree, obtain its form endpoint and update `contact.html`. Do not place private API keys or passwords in this public repository.

## Search setup after the domain works

1. Add `https://digitalcoast.solutions/` to Google Search Console.
2. Verify domain ownership using the TXT record Google provides.
3. Submit `https://digitalcoast.solutions/sitemap.xml`.
4. Request indexing for the home page.
5. Create or update the company's Google Business Profile only if the business meets customers face-to-face at a location or as a service-area business.

## Before announcing the website

Complete every item in `LAUNCH-CHECKLIST.md`, especially confirmation of the phone number, service descriptions, public price and privacy wording.
