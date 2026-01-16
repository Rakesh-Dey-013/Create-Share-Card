# 🎉 Magic Cards

A modern, elegant web application for creating beautiful digital cards that automatically expire after 24 hours. Built with :
<p>
  <img src="https://skillicons.dev/icons?i=react,nodejs,expressjs,mongodb,vite,tailwind,javascript,css,html" />
</p>

![Magic Cards](https://img.shields.io/badge/Magic-Cards-purple?style=for-the-badge)

## ✨ Features

### 🎂 Card Categories
- **Birthday Cards**: Celebrate special days with beautiful birthday greetings
- **Proposal Cards**: Express love with romantic proposal messages

### 🎨 Premium Design
- **Dark Theme Interface**: Sleek dark mode with elegant gradients
- **Glassmorphism Effects**: Modern frosted glass UI elements
- **Animated Backgrounds**: Dynamic particle systems and gradient orbs
- **Responsive Design**: Perfect on all devices from mobile to desktop

### ⚡ Smart Features
- **24-Hour Expiry**: Cards automatically disappear after 24 hours
- **Live Countdown**: Real-time timer showing remaining time
- **Shareable Links**: Unique URLs for easy sharing
- **Copy-to-Clipboard**: One-click sharing functionality
- **Preview Mode**: See your card before sharing

### 🛠️ Technical Highlights
- **React 18** with modern hooks
- **Vite** for lightning-fast builds
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **React Router** for seamless navigation
- **CSS Modules** for component styling
- **Responsive Images** optimized for performance

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/magic-cards.git
cd magic-cards
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```
Edit `.env` with your configuration:
```env
VITE_API_URL=http://localhost:5000
VITE_FRONTEND_URL=http://localhost:5173
VITE_APP_NAME=MagicCards
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
```
http://localhost:5173
```

## 📁 Project Structure

```
src/
├── assets/              # Images and static files
│   ├── birthday-cake.png
│   └── love-letter.png
├── components/          # Reusable UI components
│   ├── Card/
│   │   ├── BirthdayCard.jsx
│   │   └── BirthdayCard.module.css
│   ├── CountdownTimer.jsx
│   ├── CopyButton.jsx
│   └── Toast.jsx
├── hooks/              # Custom React hooks
│   └── useCountdown.js
├── pages/              # Application pages
│   ├── HomePage.jsx
│   ├── PreviewPage.jsx
│   └── SharedCardPage.jsx
├── services/           # API services
│   └── api.js
├── App.jsx             # Main application component
└── main.jsx           # Application entry point
```

## 🎮 How to Use

### Creating a Card
1. **Select Card Type**: Choose between Birthday or Proposal
2. **Enter Recipient Name**: Add the name of the person
3. **Write Message**: Add a personalized message (optional)
4. **Generate Card**: Click the create button

### Sharing a Card
1. **Copy Share Link**: Use the copy button in preview mode
2. **Share via Social Media**: Share directly to Twitter or WhatsApp
3. **Send the URL**: Share the unique link with anyone

### Viewing a Shared Card
- **Open the link**: Anyone with the URL can view the card
- **Watch the countdown**: See time remaining
- **Card expires**: Automatically after 24 hours

## 🎨 Design System

### Colors
- **Primary**: Purple gradients (#a855f7 → #ec4899)
- **Secondary**: Blue/emerald gradients for countdown
- **Background**: Zinc dark theme (#0a0a0a → #18181b)
- **Accent**: Pink/red for proposal cards

### Typography
- **Headings**: Iceland font (bold, clean)
- **Body**: Quantico font (readable, modern)
- **Monospace**: For countdown timers

### Animations
- **Floating Effects**: Subtle up/down movements
- **Glow Effects**: Pulsing glows on interactive elements
- **Transitions**: Smooth state changes
- **Particle Systems**: Background animations

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🌐 API Integration

The frontend connects to a backend API for:
- Creating new cards
- Fetching card data
- Managing card expiry

### API Endpoints
```javascript
POST   /api/cards/create    # Create a new card
GET    /api/cards           # Get all cards
GET    /api/cards/:id       # Get single card by ID
GET    /health             # Health check endpoint
```

## 📱 Responsive Breakpoints

| Breakpoint | Usage |
|------------|-------|
| sm: 640px | Mobile |
| md: 768px | Tablet |
| lg: 1024px | Desktop |
| xl: 1280px | Large Desktop |

## 🎯 Performance Features

- **Code Splitting**: Route-based code splitting
- **Image Optimization**: Optimized static assets
- **Lazy Loading**: Components load as needed
- **Minimal Bundle**: Tree-shaking and compression
- **Caching Strategies**: Efficient asset caching

## 🔒 Security Features

- **CORS Protection**: Configured for secure API calls
- **Input Validation**: Client-side form validation
- **XSS Prevention**: Sanitized user inputs
- **Environment Variables**: Sensitive data protection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow React hooks best practices
- Use Tailwind CSS utility classes
- Write responsive components
- Add proper TypeScript types
- Include comprehensive comments

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Lucide React](https://lucide.dev/) for beautiful icons
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React](https://reactjs.org/) for the framework

## 📞 Support

For support, email rakesh.coding.007@gmail.com

---

Made with ❤️ by the Magic Cards Team