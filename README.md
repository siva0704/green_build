

## Installation & Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Development Setup
```bash
# 1. Clone the repository
git clone <repository-url>
cd green-build-construction

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Navigate to http://localhost:5173
```

### Build for Production
```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

### Deployment
```bash
# Deploy to production (via Lovable)
# Visit: https://lovable.dev/projects/62da2127-5848-4436-b33e-e7c7ee459dd4
# Click Share -> Publish
```

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── HeroSection.tsx  # Main hero section with form
│   ├── AboutUs.tsx      # Company information
│   ├── CompletedProjects.tsx
│   ├── ConstructionMaterials.tsx
│   ├── CostEstimation.tsx
│   ├── FAQs.tsx
│   └── ...
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Page components
├── utils/               # Helper functions
└── styles/              # Global styles and Tailwind config
```

## Design System

### Color Palette
- **Primary**: Emerald green (#10b981)
- **Secondary**: Slate gray (#64748b)
- **Accent**: Purple (#7c3aed)
- **Background**: White (#ffffff)
- **Text**: Dark slate (#1e293b)

### Typography
- **Primary Font**: Inter (modern, readable)
- **Heading Font**: Asterone (display font for hero titles)
- **Font Sizes**: Responsive scaling from mobile to desktop

### Components
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Clean, accessible input styling
- **Cards**: Glass morphism effects with subtle shadows
- **Animations**: Smooth transitions and loading states

## Performance Optimizations

- **Code Splitting**: Lazy loading of components
- **Image Optimization**: Responsive images with proper sizing
- **Bundle Optimization**: Tree shaking and dead code elimination
- **SEO Optimization**: Meta tags and structured data
- **Accessibility**: ARIA labels and keyboard navigation



For technical support or questions about this project:
- **Email**: greenbuildconstruction8@gmail.com
