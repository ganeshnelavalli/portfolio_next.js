import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ui/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nelavalli Basava Lakshmi Ganesh - Full Stack Developer',
  description: 'Portfolio of Nelavalli Basava Lakshmi Ganesh - Full Stack Developer, AI Enthusiast, and Computer Science Engineer at Vignan\'s University',
  keywords: 'Full Stack Developer, MERN Stack, AI Developer, React, Node.js, Machine Learning, Portfolio',
  authors: [{ name: 'Nelavalli Basava Lakshmi Ganesh' }],
  openGraph: {
    title: 'Nelavalli Basava Lakshmi Ganesh - Full Stack Developer',
    description: 'Portfolio showcasing projects, skills, and achievements in full-stack development and AI',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}