import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-black text-white text-center text-sm py-2">
        This is a demo for Foodservice Australia event - not a live environment. Launching July 2025.
      </div>

      {/* Main Header */}
      <header className="bg-white py-5 px-6">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-[2rem] font-extralight tracking-wide">3143</Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-12">
            <Link to="/inner-circle" className="text-sm text-[#1A1A1A] hover:text-[#666666] transition-colors duration-300">
              INNER CIRCLE
            </Link>
            <div className="relative">
              <button 
                className="text-sm text-[#1A1A1A] hover:text-[#666666] transition-colors duration-300 flex items-center"
                onClick={() => setIsOpen(!isOpen)}
                onBlur={() => setTimeout(() => setIsOpen(false), 200)}
              >
                EXCLUSIVE ARMADALE
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
              </button>
              {/* Dropdown Menu */}
              <div 
                className={`absolute left-0 mt-1 w-44 bg-white border border-[#E5E5E5] shadow-lg transition-all duration-300 z-50 ${
                  isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="py-1">
                  <Link to="/bridal" className="block px-5 py-2.5 text-sm text-[#666666] hover:text-[#1A1A1A] hover:bg-[#F5F5F5] transition-colors duration-300">
                    Bridal
                  </Link>
                  <Link to="/beauty" className="block px-5 py-2.5 text-sm text-[#666666] hover:text-[#1A1A1A] hover:bg-[#F5F5F5] transition-colors duration-300">
                    Beauty
                  </Link>
                  <Link to="/fashion" className="block px-5 py-2.5 text-sm text-[#666666] hover:text-[#1A1A1A] hover:bg-[#F5F5F5] transition-colors duration-300">
                    Fashion
                  </Link>
                  <Link to="/food-drink" className="block px-5 py-2.5 text-sm text-[#666666] hover:text-[#1A1A1A] hover:bg-[#F5F5F5] transition-colors duration-300">
                    Food & Drink
                  </Link>
                  <Link to="/services" className="block px-5 py-2.5 text-sm text-[#666666] hover:text-[#1A1A1A] hover:bg-[#F5F5F5] transition-colors duration-300">
                    Services
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/neighbourhood-news" className="text-sm text-[#1A1A1A] hover:text-[#666666] transition-colors duration-300">
              NEIGHBOURHOOD NEWS
            </Link>
            <Link 
              to="/members" 
              className="bg-[#0A0F1D] text-white px-7 py-2.5 text-sm hover:bg-black transition-colors duration-300"
            >
              MEMBERS
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
