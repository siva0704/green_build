# Green Build Construction - Landing Page

## Project Overview

Green Build Construction is a modern, responsive landing page built for a construction company that specializes in residential construction services. The website serves as a comprehensive platform for showcasing construction services, completed projects, and facilitating customer engagement through an integrated contact form system.

## Project Intent & Purpose

This landing page is designed to:
- **Generate Quality Leads**: Capture potential customer information through strategic form placement
- **Showcase Expertise**: Display completed projects, construction materials, and company credentials
- **Build Trust**: Present testimonials, guarantees, and professional certifications
- **Streamline Communication**: Provide multiple contact channels and automated form submission to Google Sheets
- **Educate Customers**: Offer detailed information about construction processes, materials, and costs

## Key Features

### 🏗️ **Hero Section**
- Stunning carousel background with construction imagery
- Prominent contact form with Google Sheets integration
- Company statistics and achievements display
- Responsive design optimized for all devices

### 📋 **Contact Form Integration**
- **Google Sheets Integration**: Automatic form submission to Google Spreadsheet
- **Data Structure**: Captures Full Name, Mobile Number, Location, Timestamp, and Source
- **Real-time Validation**: Client-side form validation with error handling
- **Success Feedback**: Toast notifications and success messages
- **Loading States**: Visual feedback during form submission

### 🏡 **Project Showcase**
- Completed projects gallery with detailed information
- Project categories and filtering options
- High-quality project images and descriptions
- Customer testimonials and reviews

### 💰 **Cost Estimation**
- Interactive cost calculator for different project types
- Transparent pricing information
- Material cost breakdowns
- Comparison with competitors

### 🎯 **Service Sections**
- **About Us**: Company history and mission
- **How It Works**: Step-by-step construction process
- **Construction Materials**: Quality materials and suppliers
- **Customer Comparison**: Competitive advantages
- **Project Ideas**: Inspiration gallery for potential customers
- **FAQs**: Common questions and answers
- **Internship Opportunities**: Career information

### 📱 **User Experience**
- **Mobile-First Design**: Optimized for smartphones and tablets
- **Smooth Scrolling**: Seamless navigation between sections
- **Loading Animations**: Engaging visual feedback
- **WhatsApp Integration**: Direct communication channel
- **Accessibility**: WCAG compliant design

## Technology Stack

### Frontend Technologies
- **React 18.3.1**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development and better code quality
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for responsive design

### UI Components & Libraries
- **shadcn/ui**: High-quality, accessible UI components
- **Radix UI**: Primitive components for complex UI elements
- **Lucide React**: Beautiful, customizable icons
- **React Hook Form**: Efficient form handling and validation
- **Embla Carousel**: Smooth, responsive carousel implementation

### State Management & Routing
- **React Router DOM**: Client-side routing
- **TanStack Query**: Server state management
- **React Context**: Global state management

### Development Tools
- **ESLint**: Code linting and quality assurance
- **PostCSS**: CSS processing and optimization
- **TypeScript Config**: Strict type checking configuration

## Form Integration Details

### Google Sheets Connection
The contact form is integrated with Google Apps Script to automatically submit form data to a Google Spreadsheet.

**Endpoint**: `https://script.google.com/macros/s/AKfycbwqmcWNcCw0Uxx0WDrKq4ijV5OMKhdeAqUAv7kBPNOFi419fBVTt5BZNMZOwOA5hGzIog/exec`

### Data Structure
```javascript
{
  FullName: string,        // Customer's full name
  MobileNumber: string,    // Customer's phone number
  Location: string,        // Plot/construction location
  Timestamp: string,       // Form submission date/time
  Source: string          // Form source (Hero Section, etc.)
}
```

### Form Features
- **Client-side Validation**: Required field validation
- **Error Handling**: Network error management with user feedback
- **Success Notifications**: Toast messages and visual confirmations
- **Loading States**: Button disabled state during submission
- **Form Reset**: Automatic form clearing after successful submission

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

## Contributing

### Development Guidelines
1. Follow TypeScript best practices
2. Use semantic HTML elements
3. Implement responsive design principles
4. Add proper error handling
5. Include accessibility features
6. Test across different devices and browsers

### Code Quality
- ESLint configuration enforces code standards
- TypeScript ensures type safety
- Prettier formatting for consistent code style
- Component composition over inheritance
- Custom hooks for reusable logic

## Support & Contact

For technical support or questions about this project:
- **Email**: greenbuildconstruction8@gmail.com
