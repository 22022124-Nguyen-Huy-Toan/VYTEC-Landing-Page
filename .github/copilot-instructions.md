<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Social Innovation Launch 2025 - Landing Page

This is a Next.js project for the Social Innovation Launch 2025 competition landing page. The project uses:

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Radix UI** components for accessible UI elements
- **Class Variance Authority** for component variants

## Project Structure

- `src/app/` - App Router pages and layout
- `src/components/ui/` - Reusable UI components
- `src/lib/` - Utility functions and helpers

## Key Features

The landing page includes:
- Responsive navigation with mobile menu
- Hero section with call-to-action
- Features showcase
- Competition timeline
- Prizes section
- Contact information

## Development Guidelines

- Use TypeScript for all components
- Follow Tailwind CSS classes for styling
- Ensure components are accessible
- Use proper semantic HTML
- French language content (language="fr")
- Mobile-first responsive design

## UI Components

The project includes custom UI components based on shadcn/ui:
- Button with variants
- Card components
- Badge component
- All components use the `cn` utility for className merging

When adding new features, maintain consistency with the existing design system and ensure all text content is in French.
