# 🎨 Modern Portfolio Website

A modern, responsive portfolio website built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Features multilingual support (Polish/English), dark/light themes, animated components, and contact form integration with EmailJS.

## 🚀 Features

### ✨ Core Features
- **Modern Design**: Clean, professional UI with gradient backgrounds and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Multi-language Support**: Polish and English with localStorage persistence
- **Dark/Light Theme**: Toggle with system preference detection and persistence
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Type Safety**: Full TypeScript implementation with custom interfaces
- **SEO Optimized**: Meta tags, structured data, and performance optimized

### 🌐 Pages & Sections

#### **Homepage (`/`)**
- **Hero Section**: Eye-catching intro with animated browser frame preview
- **About Section**: Detailed professional background with highlights and specialties
- **Portfolio Preview**: Featured projects with quick overview
- **Blog Section**: Latest articles and insights
- **Contact Form**: Interactive contact form with EmailJS integration

#### **Portfolio (`/portfolio`)**
- **Project Grid**: Paginated display of all projects
- **Project Details**: Individual project pages with detailed descriptions
- **Technology Tags**: Visual representation of tech stacks used
- **Responsive Cards**: Beautiful project cards with hover effects

#### **Services (`/services`)**
- **Service Offerings**: Detailed breakdown of provided services
- **Consistent Theming**: Maintains design language across all pages

#### **Blog (`/blog/[slug]`)**
- **Dynamic Routing**: Individual blog post pages
- **Structured Content**: Well-organized article layout

#### **404 Page (`/not-found`)**
- **Custom Design**: Styled not-found page matching site design
- **Language Support**: Supports both Polish and English
- **Navigation**: Easy return to main site sections

### 🎯 Components Architecture

#### **Layout Components**
- **`Navbar.tsx`**: Responsive navigation with language/theme toggles
- **`Footer.tsx`**: Consistent footer across all pages with proper alignment
- **`BrowserFrame.tsx`**: Reusable browser mockup component with theme support

#### **Hero Section Components** (`/app/_components/hero/`)
- **`HeroSection.tsx`**: Main landing section with CTAs
- **`AboutSection.tsx`**: Detailed about section with achievements
- **`BlogSection.tsx`**: Blog preview with latest posts
- **`PortfolioSection.tsx`**: Featured projects showcase
- **`ContactSection.tsx`**: Contact form with validation and EmailJS integration

### 📊 Data Management

#### **Centralized Data Structure**
- **`texts.ts`**: All site copy in Polish and English
- **`projects.ts`**: Project data for portfolio sections
- **`blogTexts.tsx`**: Blog content and metadata

#### **Type Definitions**
- **`TextInterface.tsx`**: Unified interface for all site text
- **`ProjectInterface.tsx`**: Project data structure
- **`BlogInterface.tsx`**: Blog post structure

### 🎨 Design System

#### **Color Scheme**
- **Light Theme**: Gradient backgrounds with indigo, pink, and purple accents
- **Dark Theme**: Dark grays with vibrant accent colors
- **Consistent Branding**: Indigo primary, pink secondary colors throughout

#### **Typography**
- **Modern Font Stack**: System fonts with fallbacks
- **Hierarchical Sizing**: Clear information hierarchy
- **Responsive Text**: Scales appropriately across devices

#### **Animations**
- **Smooth Transitions**: Framer Motion powered animations
- **Hover Effects**: Interactive elements with feedback
- **Page Transitions**: Seamless navigation between sections
- **Loading States**: Elegant loading indicators for forms

### 📧 Contact & Communication

#### **EmailJS Integration**
- **Contact Form**: Direct email sending from the website
- **Beautiful Email Templates**: HTML formatted emails with styling
- **Reply-To Configuration**: Proper email threading for responses
- **Form Validation**: Client-side validation with error handling
- **Success/Error States**: Clear feedback for users

#### **Form Features**
- **Real-time Validation**: Instant feedback on form inputs
- **Loading States**: Visual feedback during submission
- **Error Handling**: Graceful error messages and retry options
- **Responsive Design**: Works perfectly on all devices

### 🌍 Internationalization (i18n)

#### **Language Support**
- **Polish (pl)**: Complete Polish translations
- **English (en)**: Full English content
- **LocalStorage Persistence**: Remembers user language preference
- **Prop-based Passing**: Clean language prop threading through components

#### **Content Management**
- **Centralized Translations**: All text in single, manageable files
- **Type-safe**: TypeScript interfaces ensure translation completeness
- **Easy Maintenance**: Simple to add new languages or update content

### 🎭 Theme System

#### **Dynamic Theming**
- **Dark/Light Toggle**: Instant theme switching
- **System Preference Detection**: Respects user's OS theme preference
- **Persistence**: Remembers theme choice across sessions
- **Component-level Support**: Every component adapts to current theme

#### **Visual Consistency**
- **Color Variables**: Consistent color application across components
- **Conditional Classes**: Tailwind classes that respond to theme state
- **Gradient Backgrounds**: Beautiful gradients that adapt to themes

### 🛠️ Technical Implementation

#### **Framework & Libraries**
- **Next.js 15**: Latest Next.js with App Router
- **React 19**: Modern React with concurrent features
- **TypeScript**: Full type safety and IntelliSense
- **Tailwind CSS 4**: Utility-first CSS framework
- **Framer Motion**: Production-ready motion library
- **EmailJS**: Client-side email service integration

#### **Performance Optimizations**
- **Server Components**: Optimal rendering strategy
- **Image Optimization**: Next.js Image component usage
- **Code Splitting**: Automatic code splitting and lazy loading
- **Bundle Analysis**: Optimized bundle sizes

#### **Development Experience**
- **ESLint Configuration**: Code quality and consistency
- **Type Checking**: Comprehensive TypeScript coverage
- **Hot Reload**: Fast development iterations
- **Component Modularity**: Reusable, maintainable components

## 🏗️ Project Structure

```
app/
├── (pages)
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout
│   ├── not-found.tsx              # 404 page
│   ├── globals.css                # Global styles
│   ├── portfolio/
│   │   ├── page.tsx               # Portfolio main page
│   │   └── [slug]/
│   │       └── page.tsx           # Individual project pages
│   ├── services/
│   │   └── page.tsx               # Services page
│   └── blog/
│       └── [slug]/
│           └── page.tsx           # Blog post pages
├── _components/
│   ├── Navbar.tsx                 # Navigation component
│   ├── Footer.tsx                 # Footer component
│   ├── BrowserFrame.tsx           # Browser mockup component
│   └── hero/
│       ├── HeroSection.tsx        # Main hero section
│       ├── AboutSection.tsx       # About section
│       ├── BlogSection.tsx        # Blog preview section
│       ├── PortfolioSection.tsx   # Portfolio preview section
│       └── ContactSection.tsx     # Contact form section
├── _data/
│   ├── texts.ts                   # All site copy (i18n)
│   ├── projects.ts                # Project data
│   ├── blogTexts.tsx             # Blog content
│   ├── TextInterface.tsx          # Text structure interface
│   ├── ProjectInterface.tsx       # Project structure interface
│   └── BlogInterface.tsx         # Blog structure interface
└── public/
    ├── favicon.ico
    └── [other static assets]
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd reklama
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Environment Setup**
Create a `.env.local` file in the root directory:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id  
REACT_APP_EMAILJS_USER_ID=your_user_id
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{reply_to}}` - Sender's email (for Reply-To header)
   - `{{message}}` - Email message content
4. Copy your Service ID, Template ID, and User ID to your `.env.local` file

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Marcin Dubinski** - Full-Stack Developer
- Email: em.dubinski@gmail.com
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn Profile]

---

⭐ **Star this repo if you found it helpful!**