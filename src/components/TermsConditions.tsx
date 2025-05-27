const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative" style={{ height: '60vh', minHeight: '500px' }}>
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: 'url("/images/terms-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.65)'
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute bottom-36 left-36 z-10">
          <h1 className="text-white text-[6rem] font-canela font-normal tracking-[0.08em] leading-none">Terms & Conditions</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-28 px-16 bg-white font-favorit">
        <div className="max-w-[800px] mx-auto">
          <div className="space-y-8 text-[#1A1A1A]">
            <h2 className="text-2xl font-canela mb-12">Welcome to Pixelboss Page Replicator</h2>
            
            <p className="leading-relaxed">
              These terms and conditions outline the rules and regulations for the use of Pixelboss Page Replicator's Website.
            </p>

            <p className="leading-relaxed">
              By accessing this website we assume you accept these terms and conditions. Do not continue to use Pixelboss Page Replicator if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h3 className="text-xl font-canela mt-12 mb-6">License</h3>
            
            <p className="leading-relaxed">
              Unless otherwise stated, Pixelboss Page Replicator and/or its licensors own the intellectual property rights for all material on Pixelboss Page Replicator. All intellectual property rights are reserved.
            </p>

            <p className="leading-relaxed">
              You may access this from Pixelboss Page Replicator for your own personal use subjected to restrictions set in these terms and conditions.
            </p>

            <h3 className="text-xl font-canela mt-12 mb-6">You must not:</h3>
            
            <ul className="list-disc pl-6 space-y-4">
              <li className="leading-relaxed">Republish material from Pixelboss Page Replicator</li>
              <li className="leading-relaxed">Sell, rent or sub-license material from Pixelboss Page Replicator</li>
              <li className="leading-relaxed">Reproduce, duplicate or copy material from Pixelboss Page Replicator</li>
              <li className="leading-relaxed">Redistribute content from Pixelboss Page Replicator</li>
            </ul>

            <h3 className="text-xl font-canela mt-12 mb-6">Your Privacy</h3>
            
            <p className="leading-relaxed">
              Please read our Privacy Policy.
            </p>

            <h3 className="text-xl font-canela mt-12 mb-6">Reservation of Rights</h3>
            
            <p className="leading-relaxed">
              We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request.
            </p>

            <p className="leading-relaxed">
              We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
            </p>

            <h3 className="text-xl font-canela mt-12 mb-6">Disclaimer</h3>
            
            <p className="leading-relaxed mb-16">
              To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsConditions 