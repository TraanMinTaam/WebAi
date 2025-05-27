import { useState } from 'react'

interface Offer {
  id: number;
  title: string;
  business: string;
  image: string;
  category: string;
}

const offers: Offer[] = [
  {
    id: 1,
    title: "Free aperitif with reservations for two in April",
    business: "Victor Churchill",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/victor.png",
    category: "FOOD & DRINK"
  },
  {
    id: 2,
    title: "Attend our AW25 Collection Preview and Win a Trip to Paris!",
    business: "Scanlan Theodore",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/scanlan.png",
    category: "FASHION"
  },
  {
    id: 3,
    title: "12 IPL Limelight Full Face Treatments for the price of 9!",
    business: "Skin Angel",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/skin_angel.png",
    category: "BEAUTY"
  },
  {
    id: 4,
    title: "Win a set menu and accompanying drinks experience for you and three friends.",
    business: "Rina's Cucina",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/rinacuccina.jpg",
    category: "FOOD & DRINK"
  },
  {
    id: 5,
    title: "Win a $200 Et Al voucher.",
    business: "ET AL",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/etal.png",
    category: "FASHION"
  },
  {
    id: 6,
    title: "2025 Makeover - Win a consultation for your house",
    business: "James Said",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/jamessaid.png",
    category: "SERVICES"
  },
]

const categories = ["VIEW ALL", "BRIDAL", "FASHION", "FOOD & DRINK", "BEAUTY", "SERVICES"]

const ExclusiveArmadale = () => {
  const [selectedCategory, setSelectedCategory] = useState("VIEW ALL")

  const filteredOffers = selectedCategory === "VIEW ALL" 
    ? offers 
    : offers.filter(offer => offer.category === selectedCategory)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <img 
          src="/images/background.png"
          alt="Victor Churchill Storefront" 
          className="w-full h-[70vh] object-cover brightness-[0.65]"
        />
        <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-white text-4xl md:text-6xl font-normal absolute bottom-8 left-8">
              FRIENDS OF ARMADALE
            </h1>
          </div>
        </div>
      </section>

      <div className="h-[45px]"></div>

      {/* Exclusive Armadale Section */}
      <div className="container mx-auto px-4 pt-0 pb-0">
        <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-8">
          <h2 className="text-2xl font-bold uppercase">EXCLUSIVE ARMADALE</h2>
          <a className="text-sm uppercase" href="/campaigns">VIEW ALL</a>
        </div>

        <div className="overflow-x-auto pb-4 mb-6 -mx-4 px-4 md:overflow-x-visible md:pb-0 md:mb-10 md:mx-0 md:px-0">
          <div className="flex gap-2 min-w-max md:min-w-0 md:justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`border px-6 py-2 text-sm uppercase transition-colors duration-300 whitespace-nowrap ${
                  category === selectedCategory
                    ? 'bg-[#080d1e] text-white border-[#080d1e]'
                    : 'border-gray-300 hover:bg-[#080d1e] hover:text-white hover:border-[#080d1e]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[45px]">
          {filteredOffers.map((offer) => (
            <div key={offer.id} className="flex flex-col h-full group">
              <div className="flex w-full">
                <div className="w-[15px] bg-orange-500"></div>
                <div className="bg-[#080d1e] text-white px-3 py-2 flex-1">
                  <span className="text-sm uppercase font-medium">{offer.business}</span>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <a href={`/campaigns/${offer.business.toLowerCase().replace(/\s+/g, '-')}-${offer.id}`}>
                  <img 
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-[222px] object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  />
                </a>
              </div>
              <div className="pt-4 pb-4 flex flex-col items-start h-[120px] justify-between">
                <h3 className="text-base font-medium leading-tight mb-2 line-clamp-2 h-[40px]">
                  {offer.title}
                </h3>
                <a href={`/campaigns/${offer.business.toLowerCase().replace(/\s+/g, '-')}-${offer.id}`}>
                  <button className="border border-gray-300 px-8 py-2 text-xs uppercase hover:bg-[#080d1e] hover:text-white hover:border-[#080d1e] rounded-full transition-colors duration-300 cursor-pointer">
                    ENTER
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExclusiveArmadale
