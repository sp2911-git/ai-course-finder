import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type MainLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, title = 'AI Course Finder - Find the Best AI Courses Online' }) => {
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              AI Course Finder
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className={`${router.pathname === '/' ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}>
                Home
              </Link>
              <Link href="/courses" className={`${router.pathname === '/courses' ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}>
                Courses
              </Link>
              <Link href="/chat" className={`${router.pathname === '/chat' ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}>
                AI Chat
              </Link>
              <Link href="/blog" className={`${router.pathname.startsWith('/blog') ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}>
                Blog
              </Link>
            </nav>
            <div className="md:hidden">
              <button className="text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AI Course Finder</h3>
              <p className="text-gray-300">
                Find, compare, and register for the best AI courses from across the web.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="text-gray-300 hover:text-white">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/chat" className="text-gray-300 hover:text-white">
                    AI Chat
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/courses?tag=Machine+Learning" className="text-gray-300 hover:text-white">
                    Machine Learning
                  </Link>
                </li>
                <li>
                  <Link href="/courses?tag=Deep+Learning" className="text-gray-300 hover:text-white">
                    Deep Learning
                  </Link>
                </li>
                <li>
                  <Link href="/courses?tag=NLP" className="text-gray-300 hover:text-white">
                    Natural Language Processing
                  </Link>
                </li>
                <li>
                  <Link href="/courses?tag=Computer+Vision" className="text-gray-300 hover:text-white">
                    Computer Vision
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">
                Subscribe to get updates on new courses and AI learning resources.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-md"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} AI Course Finder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
