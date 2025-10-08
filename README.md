# BharatVolt Technologies - EV Battery Testing & Consultancy Platform

A world-class enterprise platform for EV battery testing services and laboratory marketplace, built with modern web technologies and designed to professional B2B standards.

## 🚀 Overview

BharatVolt Technologies is a comprehensive web platform connecting battery manufacturers with certified testing laboratories across India. The platform combines:

- **Enterprise Testing Services** - Comprehensive battery testing capabilities (3000+ channels, 150+ environmental chambers)
- **Anonymous Marketplace** - Secure lab-client matching system with confidentiality guarantees
- **Regulatory Compliance Hub** - Complete documentation of international and Indian battery testing standards
- **Multi-step Quote System** - Sophisticated project intake with real-time pricing

**Design Philosophy**: Clean, data-driven interface inspired by Stripe, AWS, and enterprise scientific service providers.

## ✨ Key Features

### 🎨 **Design & UX**
- **Dark Mode** - Class-based implementation with localStorage persistence across all pages
- **Bilingual Support** - EN/Hindi language toggle (UI prepared for i18n)
- **Currency Toggle** - INR/USD pricing display throughout
- **Responsive Design** - Mobile-first approach, optimized for all devices
- **Professional Aesthetic** - B2B enterprise design with technical data presentation

### 🔬 **Testing Capabilities**
- **8 Testing Categories**: Performance | Safety | Abuse | Environmental | Life Cycling | Failure Analysis | Lithium Certification | Automotive/Medical
- **Technical Specs**:
  - 3000+ testing channels
  - 150+ environmental chambers
  - Voltage range: 5V - 900V
  - Current range: 150µA - 1000A
  - Temperature range: -40°C to +150°C
  - Altitude simulation: 0 - 15,000m

### 🏪 **Marketplace System**
- **Anonymous Request System** - Clients post battery testing requirements without revealing identity
- **Lab Bidding Platform** - Certified labs submit competitive quotes
- **Security First**: 
  - AES-256 encryption
  - Automated NDA generation
  - Role-based access control
  - Complete audit trails
  - ISO 27001 & GDPR compliance

### 📚 **Standards Documentation**
**International Standards**:
- **UN 38.3** - 8 detailed tests (T.1-T.8) for lithium battery transport
- **UL 2580** - Electrical safety for EV battery packs
- **IEC 62133** - Safety requirements for portable batteries
- **IEC 60095** - Lead-acid battery specifications
- **ECE R100** - EV battery pack safety regulations

**Indian Regulations**:
- **IS 16046** - Li-ion battery specifications for EVs
- **AIS 048** - EV battery safety & thermal propagation
- **IS 13252** - Lead-acid automotive battery requirements
- **AIS 156** - Battery pack certification process

### 📝 **Multi-Step Quote System**
- **Step 1 - Battery Specifications**: 10+ chemistry types, cell formats, voltage/capacity ranges, applications
- **Step 2 - Testing Requirements**: 6 testing types, standards selection, compliance needs
- **Step 3 - Project Details**: Timeline, quantity, budget (INR/USD), urgency levels
- **Step 4 - Contact Information**: Company details, requirements capture
- **Real-time Validation** - Progressive disclosure with step indicators

## 🏗️ Technology Stack

### Frontend Framework
- **Tailwind CSS 3.4.17** - Utility-first CSS with custom BharatVolt configuration
- **Vanilla JavaScript** - Lightweight, no framework dependencies
- **HTML5** - Semantic markup with accessibility considerations

### Custom Design System
```javascript
// tailwind.config.js - BharatVolt Theme
colors: {
  deepNavy: '#0F172A',        // Primary background
  electricBlue: '#0EA5E9',    // Primary interactive (50-950 shades)
  batteryGreen: '#10B981',    // Secondary success (50-950 shades)
  highVoltageOrange: '#F59E0B' // Accent warning (50-950 shades)
}

fontFamily: {
  headline: ['Inter', 'sans-serif'],      // Weights: 700-800
  body: ['-apple-system', 'system-ui'],   // System fonts
  technical: ['JetBrains Mono', 'monospace'] // Technical data
}
```

### Build System
- **Node.js & npm** - Package management
- **Tailwind CLI** - CSS compilation with watch mode
- **PostCSS** - CSS processing pipeline

## 📁 Project Structure

```
bharatvolt/
├── index.html                          # Project index (not primary entry point)
├── package.json                        # Node dependencies & scripts
├── tailwind.config.js                  # Custom BharatVolt Tailwind config
├── README.md                           # This file
│
├── css/
│   ├── tailwind.css                   # Tailwind directives & custom components
│   └── main.css                       # Compiled output (auto-generated)
│
├── pages/                             # BharatVolt Platform Pages ⭐
│   ├── bharatvolt_homepage.html       # Main landing page - START HERE
│   ├── bharatvolt_services.html       # 8 testing service categories
│   ├── bharatvolt_marketplace.html    # Anonymous lab marketplace
│   ├── bharatvolt_about.html          # Company credentials & leadership
│   ├── bharatvolt_resources.html      # Standards & compliance guide
│   └── bharatvolt_contact.html        # Multi-step quote system
│
└── public/
    ├── favicon.ico                    # BharatVolt favicon
    └── manifest.json                  # PWA manifest
```

## 🚦 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone or download** this repository:
```bash
git clone <repository-url>
cd bharatvolt
```

2. **Install dependencies**:
```bash
npm install
```

3. **Build CSS** (one-time):
```bash
npm run build
```

4. **Development with watch mode**:
```bash
npm run watch
```

5. **Open in browser**:
```bash
# Open the main entry point
bharatvolt_homepage.html
```

### NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Compile Tailwind CSS for production (minified) |
| `npm run watch` | Watch mode - auto-rebuild CSS on changes |

## 📄 Page Descriptions

### 🏠 **bharatvolt_homepage.html** (Main Entry Point)
**Purpose**: Primary landing page showcasing BharatVolt's value proposition

**Key Sections**:
- Hero with "Empowering India's EV Revolution" messaging
- Trust metrics: 50+ labs, 500+ projects, 99.8% confidentiality
- Technical capabilities showcase
- Interactive services preview grid
- Marketplace introduction with security emphasis
- Standards compliance highlight
- Multi-channel CTA sections

**Features**: Dark mode toggle in header, language/currency toggles, smooth scroll navigation

---

### 🔬 **bharatvolt_services.html**
**Purpose**: Comprehensive catalog of 8 battery testing service categories

**Service Categories**:
1. **Performance Testing** - Capacity, energy density, power density, efficiency, cycle life
2. **Safety Testing** - Short circuit, overcharge, over-discharge, thermal, mechanical abuse
3. **Abuse Testing** - Nail penetration, crush, drop, thermal shock, external fire
4. **Environmental Testing** - Temperature cycling, humidity, vibration, altitude, thermal shock
5. **Life Cycling** - Charge/discharge profiles, calendar life, accelerated aging, degradation
6. **Failure Analysis** - CT scanning, SEM, XRD, thermal imaging, gas analysis
7. **Lithium Certification** - UN 38.3 (8 tests), UL listings, IEC compliance, international shipping
8. **Automotive/Medical** - ECE R100, ISO standards, medical device testing, custom protocols

**Features**: Expandable service cards, detailed specifications, pricing ranges (INR/USD), direct quote CTAs

---

### 🏪 **bharatvolt_marketplace.html**
**Purpose**: Anonymous B2B platform for lab-client matching with enterprise security

**Components**:
- **Security Showcase**: AES-256, NDA automation, audit trails, role-based access
- **Client Request Form** (5 sections):
  - Battery specifications (chemistry, format, parameters)
  - Testing requirements (standards, compliance)
  - Project details (timeline, budget, urgency)
  - Confidentiality settings (NDA requirements, data handling)
  - Contact information
- **Lab Registration Form** (5 sections):
  - Lab credentials (certifications, accreditations)
  - Testing capabilities (equipment, capacity)
  - Specializations (battery types, standards)
  - Pricing structure (rate cards)
  - Contact & verification

**Features**: Form validation, progress indicators, real-time pricing, secure submission (ready for backend)

---

### 🏢 **bharatvolt_about.html**
**Purpose**: Establish company credibility, leadership, and confidentiality assurance

**Key Sections**:
- Hero: "Powering India's EV Revolution Through Scientific Excellence"
- Mission statement with core values
- Trust metrics: 99.8% confidentiality rating, zero security breaches (5 years)
- Certification badges: ISO/IEC 17025, NABL, ISO 27001, GDPR compliance
- Global standards expertise showcase
- **Leadership Team** (4 executives):
  - CEO: 15+ years automotive electronics
  - CTO: PhD Electrochemistry, 120+ papers
  - Head of Testing: NABL lead assessor
  - Head of Compliance: 12+ years regulatory affairs
- Confidentiality deep-dive: NDA automation, secure data handling, anonymous marketplace
- Partner network (50+ certified labs across India)

**Features**: Leadership profile cards with credentials, interactive certification grid, trust signal emphasis

---

### 📚 **bharatvolt_resources.html**
**Purpose**: Comprehensive knowledge hub for battery testing standards & Indian regulations

**Content Structure**:

**International Standards** (5 major standards):
- **UN 38.3** - Complete breakdown of 8 tests (T.1-T.8) with test conditions, pass criteria
- **UL 2580** - 4 categories: Electrical safety, Mechanical integrity, Environmental, Abuse tolerance
- **IEC 62133** - Safety requirements, test procedures, documentation
- **IEC 60095** - Lead-acid specifications, performance tests
- **ECE R100** - EV safety, crash testing, functional safety

**Indian Regulations** (4 critical standards):
- **IS 16046** - Li-ion specs, Indian EV standards, performance criteria, safety protocols
- **AIS 048** - EV battery safety, thermal propagation, crash testing, emergency response
- **IS 13252** - Lead-acid requirements, Indian climate testing
- **AIS 156** - Battery pack requirements, BMS standards, certification process

**Features**: 
- Search functionality for standards
- Interactive comparison table (International vs Indian)
- Downloadable guides (PDFs, checklists)
- Expandable detail sections
- Direct links to certification services

---

### 📞 **bharatvolt_contact.html**
**Purpose**: Multi-channel engagement hub with sophisticated quote request system

**Components**:

**Quick Contact Cards** (4 pathways):
1. Testing Quote - Direct to multi-step form
2. Marketplace Inquiry - Lab registration or client onboarding
3. Technical Consultation - Pre-sales engineering support
4. Partnership Opportunities - B2B collaboration

**Multi-Step Quote Form** (4 steps with validation):
- **Step 1 - Battery Specifications**:
  - Chemistry: 10+ types (Li-ion, LFP, NMC, NCA, LCO, LMO, Solid-state, Sodium-ion, Lead-acid, Nickel-based)
  - Cell format: Cylindrical, Prismatic, Pouch
  - Voltage range: 12V - 900V
  - Capacity range: 1Ah - 500Ah
  - Application: EV, ESS, Consumer, Medical, Industrial, Aerospace

- **Step 2 - Testing Requirements**:
  - Testing types: Performance, Safety, Abuse, Environmental, Cycling, Failure analysis (multi-select)
  - Standards: UN 38.3, UL 2580, IEC 62133, ECE R100, IS 16046, AIS 048 (multi-select)
  - Special compliance needs
  - Documentation requirements

- **Step 3 - Project Details**:
  - Timeline: Urgent, 1-2 weeks, 2-4 weeks, 1-2 months, 3+ months
  - Sample quantity
  - Budget: INR (₹50K - ₹10L+) / USD ($600 - $12K+)

- **Step 4 - Contact Information**:
  - Company name, contact name, email, phone
  - Additional requirements (textarea)

**Direct Contact**:
- Email: testing@bharatvolt.in
- Phone: +91-xxx-xxx-xxxx
- Addresses: Bangalore R&D Center, Pune Testing Facility
- Office hours: Mon-Fri 9AM-6PM IST
- Emergency support: 24/7 hotline

**Features**: 
- JavaScript step navigation (nextStep, prevStep, updateProgressBar)
- Real-time form validation
- Progress indicator (25%, 50%, 75%, 100%)
- Success message on submission
- Responsive multi-column layout

## 🎨 Customization Guide

### Colors
Edit `tailwind.config.js` to modify the BharatVolt color palette:
```javascript
extend: {
  colors: {
    electricBlue: {
      50: '#f0f9ff',   // Lightest
      500: '#0EA5E9',  // Base
      950: '#082f49'   // Darkest
    }
  }
}
```

### Typography
Modify font families in `tailwind.config.js`:
```javascript
fontFamily: {
  headline: ['Your-Font', 'fallback'],
  body: ['Your-Body-Font', 'fallback']
}
```

### Content Updates
- **Company Information**: Update contact details in `bharatvolt_contact.html`
- **Leadership Team**: Replace team member data in `bharatvolt_about.html`
- **Service Pricing**: Modify pricing ranges in `bharatvolt_services.html`
- **Standards Documentation**: Update compliance info in `bharatvolt_resources.html`

### Dark Mode
Dark mode uses CSS classes (`.dark`). Toggle implementation in each page:
```javascript
// Toggle dark mode
document.body.classList.toggle('dark');
localStorage.setItem('theme', isDark ? 'dark' : 'light');
```

## 🔒 Security Features

- **Data Encryption**: AES-256 encryption for all sensitive data (ready for backend integration)
- **Confidentiality**: Automated NDA generation, anonymous marketplace architecture
- **Compliance**: ISO 27001, GDPR-ready data handling
- **Audit Trails**: Complete logging system design (requires backend)
- **Access Control**: Role-based permissions architecture

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md/lg)
- **Desktop**: 1024px - 1280px (lg/xl)
- **Large Desktop**: > 1280px (2xl)

## 🚀 Deployment

### Production Build
```bash
# 1. Build optimized CSS
npm run build

# 2. Test all pages
# Open each bharatvolt_*.html file and verify:
# - Dark mode toggle works
# - Forms validate correctly
# - All links functional
# - Responsive design intact

# 3. Deploy files
# Upload all bharatvolt_*.html files + css/main.css + public/ folder
```

### Hosting Recommendations
- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **Traditional**: Apache, Nginx
- **CDN**: Cloudflare Pages, AWS S3 + CloudFront

### Backend Integration (Future)
The platform is designed for backend integration:
- Form submissions ready for API endpoints
- Marketplace requires database (PostgreSQL recommended)
- Authentication system needed for lab/client portals
- Payment gateway integration for marketplace transactions
- Email service for NDA automation and notifications

## 📊 Performance

- **Lighthouse Scores** (Target):
  - Performance: 95+
  - Accessibility: 90+
  - Best Practices: 95+
  - SEO: 90+

- **Optimization**:
  - Tailwind CSS purge (removes unused styles)
  - Minified production CSS
  - Semantic HTML for SEO
  - Lazy loading ready for images

## 🤝 Contributing

This is a proprietary platform for BharatVolt Technologies. For internal development:

1. Create feature branch from `main`
2. Make changes and test thoroughly
3. Rebuild CSS: `npm run build`
4. Submit pull request with description

## 📝 License

**Proprietary** - Copyright © 2024 BharatVolt Technologies. All rights reserved.

## 📧 Support

- **Technical Issues**: dev@bharatvolt.in
- **Business Inquiries**: testing@bharatvolt.in
- **Emergency Support**: +91-xxx-xxx-xxxx (24/7)

## 🙏 Credits

- **Design Inspiration**: Stripe, AWS, enterprise scientific platforms
- **Icons**: Heroicons (embedded SVGs)
- **Framework**: Tailwind CSS v3.4.17
- **Typography**: Inter (Google Fonts), System fonts
- **Development**: BharatVolt Technologies Development Team

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Status**: Production Ready (Requires backend for full functionality)

🔋 **Powering India's EV Revolution Through Scientific Excellence** 🔋
