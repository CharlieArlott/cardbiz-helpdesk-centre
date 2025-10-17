# CardBiz Helpdesk Centre (CHC)

A modern, corporate-level helpdesk and FAQ management system built with React, TypeScript, and Tailwind CSS.

## Features

### MUST HAVE Features ✅

- **List of FAQs (Questions & Answers)** - Comprehensive FAQ system with categorization
- **Search Bar** - Fast, real-time search functionality across all FAQs
- **Clear Layout** - Clean, professional design with excellent readability
- **Mobile-Friendly Design** - Fully responsive across all device sizes
- **Fast Loading Speed** - Optimized performance with code splitting and lazy loading
- **Contact Form / Support Link** - Easy-to-use contact form for user inquiries
- **Working Navigation Links** - Seamless navigation throughout the application

### SHOULD HAVE Features 📈

- **Category Filter** - Filter FAQs by category (General, IPOS, PGW, Leafy, etc.)
- **Feedback on FAQ** - "Was this helpful? Yes/No" feedback system

### COULD HAVE Features 💡

- Live Chat / Chatbot integration ready
- FAQ Rating System
- Downloadable PDF Version of FAQs
- Animations / Hover Effects for enhanced UX

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Framer Motion animations
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **State Management**: Zustand (ready to use)
- **Routing**: React Router DOM v6

## Project Structure

```
chc/
├── src/
│   ├── components/
│   │   └── ui/              # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       ├── Modal.tsx
│   │       ├── SearchBar.tsx
│   │       └── Badge.tsx
│   ├── layouts/
│   │   ├── PublicLayout.tsx  # Public-facing layout
│   │   └── AdminLayout.tsx   # Admin portal layout
│   ├── pages/
│   │   ├── public/           # Public pages
│   │   │   ├── HomePage.tsx
│   │   │   ├── FAQPage.tsx
│   │   │   └── ContactPage.tsx
│   │   ├── admin/            # Admin pages
│   │   │   ├── AdminDashboard.tsx
│   │   │   ├── UserManagement.tsx
│   │   │   ├── FAQManagement.tsx
│   │   │   ├── EnquiryInbox.tsx
│   │   │   ├── FeedbackInbox.tsx
│   │   │   └── ... (other admin modules)
│   │   └── auth/
│   │       └── Login.tsx
│   ├── types/
│   │   └── index.ts          # TypeScript type definitions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Modern web browser

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd c:\Users\muhammad.hambal\Desktop\chc
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Pages & Routes

### Public Routes

- `/` - Homepage with features overview
- `/faq` - FAQ page with search and category filtering
- `/contact` - Contact form page

### Admin Routes (require authentication)

- `/admin` - Dashboard with statistics and recent activity
- `/admin/users` - User management
- `/admin/roles` - Role management
- `/admin/companies` - Company management
- `/admin/departments` - Department management
- `/admin/divisions` - Division management
- `/admin/client-profiles` - Client company profiles
- `/admin/tickets` - Support ticket management
- `/admin/faq-management` - FAQ CMS
- `/admin/banners` - Banner management
- `/admin/announcements` - Announcement management
- `/admin/enquiries` - Enquiry inbox
- `/admin/feedback` - Feedback inbox
- `/admin/reports` - Reports and analytics
- `/admin/settings` - System settings (Email, SMS, WhatsApp)

### Auth Routes

- `/login` - Admin login page

## Design System

### Colors

- **Primary**: Blue (#0ea5e9) - Main brand color
- **Secondary**: Gray - Supporting colors
- **Accent**: Yellow/Orange - Highlights and CTAs
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)
- **Info**: Blue (#3b82f6)

### Typography

- **Display Font**: Poppins - Headings and important text
- **Body Font**: Inter - Body text and UI elements

### Components

All components follow a consistent design pattern with:
- Proper spacing and padding
- Smooth transitions and animations
- Focus states for accessibility
- Mobile-first responsive design
- Corporate-level polish and professionalism

## Key Features Implementation

### Search Functionality

The FAQ search bar provides real-time filtering across:
- Question text
- Answer content
- Tags and keywords

### Category Filtering

Users can filter FAQs by categories:
- General
- IPOS
- PGW
- Leafy
- Commercial/Corporate
- Customized System
- TMS
- CBS, CBP, CBT

### Feedback System

Each FAQ has a "Was this helpful?" section with:
- Yes/No buttons
- Vote counters
- Thank you confirmation message

### Contact Form

Validated contact form with fields:
- Full Name (required)
- Email (required, validated)
- Phone (optional)
- Subject (required)
- Message (required, min 10 characters)

## Admin Features

### Dashboard

- Statistics cards with trend indicators
- Recent tickets overview
- Recent enquiries
- Quick action cards

### User Management

- Add, edit, delete users
- Role assignment
- Status management
- Search and filter functionality

### CMS Modules

- FAQ Management
- Banner Management
- Announcement Management

### Inbox Systems

- Enquiry Inbox - Manage customer enquiries
- Feedback Inbox - View and analyze user feedback

### Settings

- Email configuration (SMTP)
- SMS gateway settings
- WhatsApp Business API settings

## Performance Optimization

- Code splitting with React.lazy
- Image optimization
- CSS purging with Tailwind
- Minification and bundling with Vite
- Fast refresh during development

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Backend API integration
- Database connectivity
- Authentication & authorization
- Real-time notifications
- Advanced analytics
- Multi-language support
- Dark mode
- Live chat integration
- AI-powered FAQ suggestions

## Support Systems Integration

The system is designed to support multiple platforms:
- **IPOS** - Integrated Point of Sale
- **PGW** - Payment Gateway
- **Leafy** - Loyalty program management
- **Commercial/Corporate** - Enterprise solutions
- **Customized System** - Tailored solutions
- **TMS** - Transaction Management System
- **CBS, CBP, CBT** - CardBiz suite products

## License

Copyright © 2025 CardBiz Helpdesk Centre. All rights reserved.

## Author

Developed by Dasranraj Lui for CardBiz
