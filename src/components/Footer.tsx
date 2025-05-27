const Footer = () => {
  const navLinks = [
    'INNER CIRCLE',
    'EXCLUSIVE ARMADALE',
    'NEIGHBOURHOOD NEWS',
    'MEMBERS',
    'PRIVACY POLICY',
    'TERMS & CONDITIONS'
  ]

  return (
    <footer className="bg-[#0A0F1D] py-16 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-16">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white text-sm hover:text-[#666666] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Logo */}
        <div className="text-center mb-6">
          <h2 className="text-white text-[2.5rem] font-light">3143</h2>
        </div>

        {/* Powered by */}
        <div className="text-center">
          <p className="text-[#666666] text-sm">
            Powered by <span className="text-white">PIXEL BOSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
