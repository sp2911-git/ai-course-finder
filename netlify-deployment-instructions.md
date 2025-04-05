# Deploying Your AI Course Finder Website to Netlify

This guide will walk you through the process of deploying your AI Course Finder website to Netlify, a popular platform for hosting web applications.

## Prerequisites

Before you begin, make sure you have:

1. The AI Course Finder project files (which you've downloaded as a zip file)
2. A GitHub account (if you don't have one, you can sign up at [github.com](https://github.com))
3. A Netlify account (you can sign up for free at [netlify.com](https://netlify.com))

## Step 1: Extract the Project Files

1. Locate the downloaded `ai-course-finder.zip` file
2. Extract the contents to a folder on your computer

## Step 2: Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in to your account
2. Click on the "+" icon in the top-right corner and select "New repository"
3. Name your repository (e.g., "ai-course-finder")
4. Choose "Public" or "Private" visibility (either works with Netlify)
5. Click "Create repository"
6. Follow the instructions on the next page to push your code to the repository:

```bash
# Navigate to your project directory
cd path/to/extracted/ai-course-finder

# Initialize a git repository
git init

# Add all files to the repository
git add .

# Commit the files
git commit -m "Initial commit"

# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/ai-course-finder.git

# Push the code to GitHub
git push -u origin main
```

Note: Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and log in to your account
2. Click on the "Add new site" button and select "Import an existing project"
3. Choose "GitHub" as your Git provider
4. Authorize Netlify to access your GitHub account if prompted
5. Select the repository you just created ("ai-course-finder")
6. Configure the deployment settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Click "Deploy site"

## Step 4: Configure Environment Variables (if needed)

If your project requires environment variables:

1. Go to your site's dashboard on Netlify
2. Navigate to "Site settings" > "Environment variables"
3. Add any required environment variables

## Step 5: Configure Domain Settings (Optional)

To use a custom domain:

1. Go to your site's dashboard on Netlify
2. Navigate to "Domain settings"
3. Click "Add custom domain"
4. Follow the instructions to set up your domain

## Troubleshooting

If you encounter any issues during deployment:

1. Check the deployment logs in Netlify for specific error messages
2. Make sure all dependencies are correctly listed in your package.json file
3. Verify that your build command and publish directory are correctly configured

## Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Next.js on Netlify](https://www.netlify.com/with/nextjs/)
- [GitHub Documentation](https://docs.github.com/)

## Need Help?

If you need further assistance, you can:

1. Check the Netlify support forums
2. Refer to the Next.js documentation
3. Contact me for additional guidance

Congratulations! Your AI Course Finder website should now be live on Netlify.
