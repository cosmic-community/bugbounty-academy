# BugBounty Academy - Interactive Security Learning Platform

![App Preview](https://imgix.cosmicjs.com/15d7c0d0-d2da-11f0-a4e9-9da12f8febf7-photo-1526374965328-7f61d4dc18c5-1765049455360.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A comprehensive, interactive bug bounty and ethical hacking learning platform built with Next.js 16 and powered by Cosmic CMS. Transform your security education content into an engaging, modern learning experience.

## Features

- 📚 **Interactive Learning Modules** - Structured courses on web security vulnerabilities
- 💻 **Hands-On Lab Exercises** - Practical challenges with vulnerable code and exploitation guides
- 🔧 **Security Tools Library** - Complete guides for Burp Suite, SQLMap, and essential hacking tools
- 🎯 **Smart Filtering** - Filter by difficulty, vulnerability type, and category
- 📱 **Fully Responsive** - Seamless experience on all devices
- 🎨 **Modern UI** - Dark theme optimized for extended learning sessions
- 🔒 **Security Focused** - Built for aspiring bug bounty hunters and security researchers

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=693481b43584465d0a2f9fc9&clone_repository=693486083584465d0a2fa003)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Roadmap for BugBounty and real practical exercises on Hacking, codes, example instructions. Show everything in detail at an expert level, show practical examples"

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **React Markdown** - Rich content rendering
- **React Syntax Highlighter** - Code highlighting for security examples

## Getting Started

### Prerequisites

- Node.js 18+ or Bun 1.0+
- A Cosmic account with the BugBounty content model

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd bugbounty-academy
```

2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file in the root directory:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetch Learning Modules

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: modules } = await cosmic.objects
  .find({ type: 'learning-modules' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetch Lab Exercises by Difficulty

```typescript
const { objects: labs } = await cosmic.objects
  .find({ 
    type: 'lab-exercises',
    'metadata.difficulty.key': 'easy'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetch Tools by Category

```typescript
const { objects: tools } = await cosmic.objects
  .find({ 
    type: 'tools-scripts',
    'metadata.category.key': 'exploitation'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This application uses Cosmic's powerful content modeling features:

- **Learning Modules**: Educational content with difficulty levels and prerequisites
- **Lab Exercises**: Hands-on challenges with vulnerability classifications
- **Tools & Scripts**: Complete tool documentation with installation guides
- **Object Relationships**: Connected content for contextual learning
- **Markdown Support**: Rich text formatting with code highlighting
- **Media Management**: Image optimization with imgix

## Deployment Options

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

1. Click the "Deploy" button above
2. Connect your GitHub repository
3. Add your environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=<your-repo-url>)

1. Click the "Deploy to Netlify" button
2. Connect your repository
3. Add environment variables in the Netlify dashboard
4. Deploy!

### Environment Variables Setup

For production deployments, set these environment variables in your hosting platform's dashboard:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key
- `COSMIC_WRITE_KEY` - Your Cosmic write key (for write operations)

<!-- README_END -->