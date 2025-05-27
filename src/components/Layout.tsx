import { Link } from 'react-router-dom';
import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Announcement Bar */}
      <div className="bg-black text-white text-sm md:text-lg py-1 md:py-2 text-center">
        <p>This is a demo for Foodservice Australia event - not a live environment. Launching July 2025.</p>
      </div>

      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold">3143</Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/inner-circle" className="uppercase text-sm font-david font-medium hover:text-gray-600 transition-colors">
                Inner Circle
              </Link>
              <button className="flex items-center space-x-1 uppercase text-sm font-david font-medium hover:text-gray-600 transition-colors">
                <span>Exclusive Armadale</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <Link to="/stories" className="uppercase text-sm font-david font-medium hover:text-gray-600 transition-colors">
                Neighbourhood News
              </Link>
              <Link to="/login">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-[#080d1e] text-white uppercase hover:bg-[#080d1e]/90 rounded-none font-david">
                  Members
                </button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#080d1e] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="flex flex-wrap justify-center gap-8 uppercase text-sm">
              <Link to="/inner-circle" className="hover:text-gray-300 transition-colors">Inner Circle</Link>
              <Link to="/campaigns" className="hover:text-gray-300 transition-colors">Exclusive Armadale</Link>
              <Link to="/stories" className="hover:text-gray-300 transition-colors">Neighbourhood News</Link>
              <Link to="/login" className="hover:text-gray-300 transition-colors">Members</Link>
              <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms & Conditions</Link>
            </div>
            <div className="text-center mt-8">
              <div className="text-5xl font-bold mb-4">3143</div>
              <div className="text-sm text-gray-400 flex items-center justify-center">
                <span>Powered by</span>
                <span className="ml-2 font-bold">PIXEL BOSS</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 