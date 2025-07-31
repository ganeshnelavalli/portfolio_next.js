# 🚀 Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing my skills, projects, and professional experience.

## ✨ Features

### 🎨 **Modern Design**
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Gradient Design**: Beautiful blue-to-purple gradient color scheme
- **Smooth Animations**: Framer Motion powered animations throughout

### 🎯 **Interactive Elements**
- **Animated Background**: Floating elements and dynamic patterns
- **Hover Effects**: Engaging button and card animations
- **Scroll Animations**: Elements animate as they come into view
- **Loading States**: Smooth loading animations for better UX

### 📱 **Sections**
- **Hero Section**: Animated introduction with role cycling
- **About**: Personal information and professional highlights
- **Skills**: Interactive skill bars with progress animations
- **Projects**: Showcase of GitHub repositories with live links
- **Experience**: Work history and achievements
- **Certifications**: Professional certifications
- **Contact**: Interactive contact form with validation

## 🛠️ **Tech Stack**

### **Frontend**
- **Next.js 13.5.1** - React framework with App Router
- **React 18.2.0** - UI library with TypeScript
- **Tailwind CSS 3.3.3** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **shadcn/ui** - Modern component library

### **UI Components**
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation

### **Development Tools**
- **TypeScript** - Type safety
- **ESLint** - Code quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/ganeshnelavalli/portfolio_nextjs.git
   cd portfolio_nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### **Build for Production**
```bash
npm run build
npm start
```

## 📁 **Project Structure**

```
portfolio_nextjs/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── navigation/        # Navbar and footer
│   ├── sections/          # Page sections
│   └── ui/               # shadcn/ui components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## 🎨 **Customization**

### **Personal Information**
Update your details in the following files:
- `components/sections/hero.tsx` - Name and roles
- `components/sections/about.tsx` - About section
- `components/sections/contact.tsx` - Contact information
- `components/sections/projects.tsx` - Project links

### **Styling**
- **Colors**: Modify gradient colors in Tailwind classes
- **Animations**: Adjust Framer Motion animations
- **Layout**: Update grid layouts and spacing

### **Content**
- **Skills**: Update skill levels in `components/sections/skills.tsx`
- **Projects**: Add/remove projects in `components/sections/projects.tsx`
- **Experience**: Update work history in `components/sections/experience.tsx`

## 🌟 **Key Features Explained**

### **Animated Background Elements**
```tsx
// Floating elements with different animations
<motion.div
  className="absolute top-20 left-20 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
  animate={{
    y: [0, -20, 0],
    x: [0, 10, 0],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
```

### **Interactive Skill Bars**
```tsx
// Animated progress bars with gradient
<motion.div
  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
  initial={{ scaleX: 0 }}
  animate={inView ? { scaleX: skill.level / 100 } : {}}
  transition={{ duration: 1.5, ease: "easeOut" }}
/>
```

### **Responsive Design**
- Mobile-first approach
- Breakpoint-based layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## 📱 **Responsive Breakpoints**

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 **Performance Optimizations**

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components load as needed
- **Minification**: Production builds are minified
- **Caching**: Static assets are cached

## 🔧 **Development Scripts**

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 **Contact**

- **Email**: ganeshbasava717@gmail.com
- **Phone**: +91 7995596041
- **LinkedIn**: [Nelavalli Ganesh](https://www.linkedin.com/in/nelavalli-ganesh-a1806a290)
- **GitHub**: [ganeshnelavalli](https://github.com/ganeshnelavalli)

## 🙏 **Acknowledgments**

- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Next.js](https://nextjs.org/) for the framework

---

⭐ **Star this repository if you found it helpful!**