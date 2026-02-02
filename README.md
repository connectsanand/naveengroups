# Static Website

This is a static HTML/CSS/JS website converted from a Next.js project.

## Project Structure

- `index.html`: Home page.
- `css/style.css`: Main stylesheet.
- `js/main.js`: Interactivity (sticky header, mobile menu, theme toggle).
- `images/`: Static assets.
- `fonts/`: Web fonts.

## Deployment

You can deploy this folder directly to GitHub Pages, Netlify, Vercel, or any static hosting provider.

### GitHub Pages (Manual)

1. Initialize a git repo in this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Create a new repository on GitHub.
3. Link and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
4. Go to **Settings > Pages** in your GitHub repo and enable GitHub Pages from the `main` branch.
