import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const categories = [
    { name: "Bridal", path: "/bridal" },
    { name: "Beauty", path: "/beauty" },
    { name: "Fashion", path: "/fashion" },
    { name: "Food & Drink", path: "/food-drink" },
    { name: "Services", path: "/services" }
  ]

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a className="text-2xl font-bold" href="/">3143</a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a className="uppercase text-sm font-david font-medium hover:text-gray-600 transition-colors" href="/inner-circle">
              Inner Circle
            </a>
            <div className="relative">
              <button 
                className="flex items-center space-x-1 uppercase text-sm font-david font-medium hover:text-gray-600 transition-colors" 
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
              >
                <span>Exclusive Armadale</span>
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div 
                className={`absolute left-0 mt-1 w-44 bg-white border border-gray-200 shadow-lg z-50 transform transition-all duration-200 origin-top ${
                  isDropdownOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href={category.path}
                    className="block px-5 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                  >
                    {category.name}
                  </a>
                ))}
              </div>
            </div>
            <a className="uppercase text-sm font-david font-medium hover:text-gray-600 transition-colors" href="/stories">
              Neighbourhood News
            </a>
            <a href="/login">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-[#080d1e] text-white uppercase hover:bg-[#080d1e]/90 rounded-none font-david">
                Members
              </button>
            </a>
          </nav>

          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar 