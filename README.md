# RegenAsia Hub Website

A comprehensive platform for regenerative agriculture knowledge, community building, tools, and fundraising across South and Southeast Asia.

## Project Overview

RegenAsia Hub serves as a central resource for practitioners, experts, communities, and funders to collaborate on advancing climate-resilient food systems through regenerative practices. The platform focuses on seven countries: Indonesia, Vietnam, the Philippines, Thailand, India, Nepal, and Sri Lanka.

The website consists of the following main sections:

1. **Knowledge Repository** - Curated resources, case studies, and best practices
2. **Community Hub** - Forums, expert networks, and events
3. **Tools & Training** - Practical toolkits, learning modules, and certifications
4. **Fundraising Portal** - Project showcase, crowdfunding campaigns, and partnership opportunities

## Project Structure

```
regenasia-hub/
│
├── index.html                    # Homepage
├── knowledge.html                # Knowledge repository page
├── community.html                # Community hub page
├── tools-training.html           # Tools & training page
├── fundraising.html              # Fundraising portal page
├── about.html                    # About us page
│
├── assets/
│   ├── css/
│   │   ├── styles.css            # Main stylesheet
│   │   └── responsive.css        # Responsive design rules
│   │
│   ├── js/
│   │   └── main.js               # Main JavaScript file
│   │
│   ├── images/                   # Image assets
│   │   ├── logo.png              # Site logo
│   │   ├── hero-bg.jpg           # Hero background image
│   │   ├── [other images]        # Various images used across the site
│   │
│   └── fonts/                    # Custom fonts (if needed)
│
└── README.md                     # Project documentation
```

## Setup Instructions

Follow these step-by-step instructions to set up the project and host it on GitHub Pages.

### Prerequisites

- GitHub account
- Git installed on your computer
- Basic understanding of HTML, CSS, and JavaScript
- Text editor or IDE (like Visual Studio Code, Sublime Text, etc.)

### Step 1: Clone or Create the Repository

#### Option A: Create a New Repository

1. Go to GitHub and log in to your account
2. Click the "+" button in the top right corner and select "New repository"
3. Name your repository `regenasia-hub` (or any name you prefer)
4. Make sure the repository is set to "Public"
5. Click "Create repository"
6. Clone the repository to your local machine:
   ```
   git clone https://github.com/your-username/regenasia-hub.git
   cd regenasia-hub
   ```

#### Option B: Clone This Repository (if you have access)

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/original-owner/regenasia-hub.git
   cd regenasia-hub
   ```

### Step 2: Set Up the Basic Structure

1. Create the folder structure as outlined above:
   ```
   mkdir -p assets/css assets/js assets/images assets/fonts
   ```

2. Copy or create all the HTML, CSS, and JavaScript files as provided in this project.

3. For placeholder images, you can either:
   - Use free stock photos from sites like Unsplash, Pexels, or Pixabay
   - Create a `placeholder.jpg` file and use it throughout the site initially
   - Use an online placeholder service like `https://via.placeholder.com/800x600`

### Step 3: Customize Content

1. Replace placeholder content with your actual content:
   - Update text in all HTML files
   - Replace placeholder images with actual images
   - Customize colors in CSS if needed (in `styles.css`, the main colors are defined as CSS variables)

2. Make sure all links between pages are working correctly.

3. Test the website locally by opening the HTML files in your browser.

### Step 4: Commit and Push Changes

1. Add all files to Git:
   ```
   git add .
   ```

2. Commit the changes:
   ```
   git commit -m "Initial website setup"
   ```

3. Push to GitHub:
   ```
   git push origin main
   ```

### Step 5: Set Up GitHub Pages

1. Go to your repository on GitHub.

2. Click on "Settings" near the top of the page.

3. Scroll down to the "GitHub Pages" section (or click "Pages" in the left sidebar).

4. Under "Source", select "main" branch and "/" (root) folder.

5. Click "Save".

6. GitHub will provide you with a URL where your site is published (typically `https://your-username.github.io/regenasia-hub/`).

7. It may take a few minutes for your site to be published. Refresh the page to see when it's ready.

### Step 6: Custom Domain (Optional)

If you want to use a custom domain:

1. In the "GitHub Pages" section of your repository settings, under "Custom domain", enter your domain name.

2. Set up the DNS for your domain:
   - For a subdomain (e.g., `regenasia.yourdomain.com`), create a CNAME record pointing to `your-username.github.io`.
   - For an apex domain (e.g., `yourdomain.com`), set up A records pointing to GitHub's servers.

3. Wait for DNS changes to propagate (can take up to 24-48 hours).

## Updating the Website

To make updates to the website:

1. Make your changes locally.

2. Test the changes by viewing the HTML files in your browser.

3. Commit and push your changes:
   ```
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

4. GitHub Pages will automatically update your site with the new changes (might take a few minutes).

## Important Notes for Implementation

### Images

- For the site to look its best, use high-quality images with consistent dimensions.
- Optimize images for web (compress them) to ensure fast loading times.
- Recommended dimensions:
  - Hero image: 1920×800 pixels
  - Card thumbnails: 600×400 pixels
  - Profile photos: 400×400 pixels (square)

### Community Forum Integration

The Community Hub page currently includes a mockup of a Discourse-like forum. To implement a real forum:

1. Set up a [Discourse](https://www.discourse.org/) instance separately.
2. Embed the Discourse forum using an iframe or use their API to integrate it with your site.
3. Alternatively, consider using other forum solutions like NodeBB, Flarum, or even a Facebook Group.

### Forms Functionality

The contact and newsletter forms currently don't submit to any server. To make them functional:

1. Set up a form handling service like Formspree, FormSubmit, or Google Forms.
2. Update the form action and method attributes in the HTML.
3. For more advanced functionality, you might need a backend server or service like Firebase.

## Troubleshooting

### Site Not Publishing

- Make sure your repository is public
- Ensure you've selected the correct branch in GitHub Pages settings
- Check if there are any errors in your HTML, CSS, or JavaScript that might prevent the site from building

### Broken Links or Missing Images

- Verify all file paths are correct and consistent
- Ensure all filenames match exactly (case-sensitive)
- Check that all referenced images exist in the assets/images directory

### Responsive Design Issues

- Test on various devices and screen sizes
- Use the browser's developer tools to simulate different devices
- Make adjustments to the responsive.css file as needed

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [HTML5 Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Font Awesome Icons](https://fontawesome.com/icons) (used throughout the site)

## License

This project is open source and available for use and modification. Attribution is appreciated but not required.

## Contact

For questions or support regarding this website template, please contact [your-email@example.com].

---

*This README was last updated on [Current Date]. For the most up-to-date information, please check the repository.*# regenasia-hub
