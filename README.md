# 🚀 AffiliList - Enterprise Affiliate Program Directory

A comprehensive affiliate marketing platform that connects marketers with top affiliate programs. Built with Next.js, TypeScript, and modern web technologies.

## ✨ Features

### 🏠 **Core Platform**
- **Homepage with Search & Filtering**: Advanced search with real-time filtering by categories, commission rates, cookie duration, and more
- **Affiliate Program Directory**: Comprehensive database of affiliate programs with detailed information
- **Individual Program Pages**: Detailed pages for each affiliate program with commission structures, marketing materials, and application links

### 🔧 **Tools & Calculators**
- **Affiliate Commission Calculator**: Calculate potential earnings based on traffic and conversion rates
- **YouTube Affiliate Finder**: Discover affiliate programs specifically for YouTube creators
- **Advanced Filtering**: Filter programs by commission rate ranges (0-50%), cookie duration (1-365 days), payment methods, and networks

### 👨‍💼 **Admin & Management**
- **Admin Dashboard**: Comprehensive management system for reviewing and approving affiliate program submissions
- **Submission System**: User-friendly form for submitting new affiliate programs for review
- **Approval Workflow**: Streamlined process for reviewing, approving, or rejecting submissions

### 📊 **Analytics & Tracking**
- **Analytics Dashboard**: Track clicks, conversions, earnings, and performance metrics
- **Affiliate Link Tracking**: Monitor the performance of your affiliate links
- **Revenue Analytics**: View top-performing programs and traffic sources

### 🔔 **Real-time Features**
- **Notification System**: Real-time notifications for new approvals, comments, and system updates
- **User Authentication**: Secure login and registration system with user profiles
- **Favorites System**: Save and organize favorite affiliate programs

### 📰 **Community & Engagement**
- **Community Forum**: Discussion platform with categories, user reputation, and search functionality
- **Newsletter Subscription**: Email subscription system for updates and new program alerts
- **User Profiles**: Personalized user experience with saved preferences

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui with Radix UI primitives
- **Package Manager**: Bun
- **Development**: ESLint, Biome formatter

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/qwazi12/affiliate-link-explorer-buddy.git
   cd affiliate-link-explorer-buddy
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start the development server**
   ```bash
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Homepage with search & filtering
│   ├── submit/page.tsx           # Program submission form
│   ├── affiliate/                # Individual program pages
│   │   ├── comma/page.tsx
│   │   ├── supademo/page.tsx
│   │   └── ai-svg-generator/page.tsx
│   ├── tools/                    # Utility tools
│   │   ├── affiliate-commission-calculator/
│   │   └── youtube-affiliates/
│   ├── admin/page.tsx            # Admin dashboard
│   ├── analytics/page.tsx        # Analytics dashboard
│   ├── community/page.tsx        # Community forum
│   ├── login/page.tsx            # User authentication
│   ├── subscribe/page.tsx        # Newsletter subscription
│   └── components/               # Shared components
│       ├── NotificationSystem.tsx
│       └── AdvancedFilters.tsx
├── components/ui/                # shadcn/ui components
└── lib/                          # Utility functions
```

## 🎯 Key Features Breakdown

### Advanced Search & Filtering
- Real-time search across program names and categories
- Filter by commission rates (0-50% range)
- Cookie duration filtering (1-365 days)
- Category-based filtering (SaaS, E-commerce, Finance, etc.)
- Payment method and network filtering

### Admin Dashboard
- View all program submissions
- Approve or reject programs with feedback
- Manage program status and details
- Track submission analytics

### Analytics Platform
- Monitor click-through rates
- Track conversion performance
- View revenue analytics
- Analyze traffic sources
- Manage affiliate links

### Community Features
- Discussion forum with categories
- User reputation system
- Post creation and interaction
- Search functionality
- Real-time notifications

## 🔧 Development

### Available Scripts

```bash
# Development server
bun dev

# Build for production
bun run build

# Start production server
bun start

# Lint and format code
bun run lint
bun run format
```

### Adding New Components

This project uses shadcn/ui. To add new components:

```bash
npx shadcn@latest add -y -o [component-name]
```

## 📦 Dependencies

### Core Dependencies
- **Next.js 15**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

### UI Components
- **Radix UI**: Headless UI primitives
- **shadcn/ui**: Pre-built accessible components
- **Class Variance Authority**: Component variant management

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings (Next.js preset)
3. Deploy automatically on push to main

### Other Platforms
- **Netlify**: Configure build command as `bun run build`
- **Railway**: Use the included `railway.toml`
- **Docker**: Build with the provided Dockerfile

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Demo**: [Deploy to see live version]
- **Repository**: https://github.com/qwazi12/affiliate-link-explorer-buddy
- **Documentation**: See README.md and inline code comments

## 📞 Support

For support, feature requests, or bug reports, please open an issue on GitHub or contact the development team.

---

**Built with ❤️ using Next.js, TypeScript, and modern web technologies.**
