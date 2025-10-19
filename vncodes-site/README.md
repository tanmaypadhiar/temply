# vncodes-site

This project is a web development initiative aimed at creating a website similar to "vncodes.in". It is built using Next.js and TypeScript, providing a modern and efficient framework for developing web applications.

## Project Structure

The project is organized as follows:

```
vncodes-site
├── src
│   ├── pages
│   │   ├── index.tsx          # Homepage of the website
│   │   ├── about.tsx          # About page for information
│   │   ├── posts
│   │   │   └── [slug].tsx     # Dynamic route for individual blog posts
│   │   └── api
│   │       └── hello.ts       # API route for testing
│   ├── components
│   │   ├── Header.tsx         # Header component with navigation
│   │   ├── Footer.tsx         # Footer component
│   │   ├── PostCard.tsx       # Component for displaying blog post summaries
│   │   └── Layout.tsx         # Layout component for consistent page structure
│   ├── lib
│   │   └── posts.ts           # Functions for managing blog post data
│   ├── styles
│   │   └── globals.css        # Global CSS styles
│   ├── posts
│   │   └── example-post.md    # Sample blog post in markdown format
│   ├── types
│   │   └── index.ts           # TypeScript interfaces and types
│   └── utils
│       └── formatDate.ts      # Utility function for date formatting
├── public
│   └── robots.txt             # Instructions for web crawlers
├── package.json                # npm configuration file
├── tsconfig.json              # TypeScript configuration file
├── next.config.js             # Next.js configuration settings
├── .eslintrc.json             # ESLint configuration file
├── .prettierrc                # Prettier configuration file
└── README.md                  # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd vncodes-site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the website.

## Features

- Dynamic routing for blog posts
- API route for testing
- Responsive design with a consistent layout
- Markdown support for blog content

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.