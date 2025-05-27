const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/victor-churchill-storefront.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative h-full flex items-center justify-center">
        <h1 className="text-7xl md:text-8xl text-white font-serif tracking-wide">
          FRIENDS OF ARMADALE
        </h1>
      </div>
    </div>
  )
}

export default Hero
