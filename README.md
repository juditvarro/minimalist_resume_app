# Minimalist Resume App

A static resume website built with **Vite**, **React**, and **Tailwind CSS v4**. The project is configured to automatically deploy updates to an **AWS S3 bucket** via **GitHub Actions**.

## Tech Stack

- **Vite**: Build tool for fast React development.
- **React**: JavaScript library for building the UI.
- **Tailwind CSS v4**: For styling the components.
- **GitHub Actions**: CI/CD for automatic deployment to AWS S3.

## Setup

1. Clone the repo:
   ```bash
   git clone <repo_url>
   cd <repo_directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run locally:
   ```bash
   npm run dev
   ```

## Deployment

Any changes pushed to the `main` branch will automatically trigger the GitHub Actions workflow which:

1. Builds the React app using Vite.
2. Deploys the built files to an already configured AWS S3 bucket for static web hosting.

The S3 bucket and related infrastructure are provisioned separately using Terraform. 
In order to setup the required AWS S3 bucket the IaC of the [aws-s3-website-terraform repo](https://github.com/juditvarro/aws-s3-website-terraform) has been used.
