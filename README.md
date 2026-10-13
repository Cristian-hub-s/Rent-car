# Moldova Drive — Car Rental Website

A responsive static website concept for a car rental business in the Republic of Moldova. Built with plain HTML, CSS, and JavaScript—no build tools or frameworks required.

## Preview locally
1. Download or clone this repository.
2. Open `index.html` in your browser.

For a better local development experience, open the folder in VS Code and use the Live Server extension.

## Publish on GitHub Pages
1. Create a new repository on GitHub, for example `moldova-drive`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then click **Save**.
6. Wait for GitHub Pages to publish the site. The URL will look like `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Before publishing for a real business
- Replace the demo business name, phone number, email address, and location with your real contact details.
- Replace the sample vehicles, images, prices, and availability with accurate information.
- Update the email address in `script.js` (`hello@moldovadrive.example`) and in `index.html`. The `.example` domain is a placeholder and cannot receive email.
- The booking form creates a pre-filled email draft; it does **not** store bookings or verify real-time availability. For real online booking, connect a backend or a booking service.
- Verify rental terms, insurance details, deposits, minimum age, and cross-border rules before publishing those claims.
- Images are loaded from Unsplash URLs, and fonts from Google Fonts, so those assets require an internet connection.

## Files
- `index.html` — page content and structure
- `style.css` — layout, colors, responsive styles
- `script.js` — mobile menu, fleet filters, date validation, and demo booking email
- `README.md` — setup and deployment instructions

## Features
- Responsive desktop and mobile layout
- Fleet cards with category filters
- Date selection and basic date validation
- Car selection shortcuts
- FAQ accordion
- Booking request via email draft (demo behavior)
