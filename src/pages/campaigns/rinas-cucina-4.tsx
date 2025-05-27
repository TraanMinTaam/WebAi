import React from 'react';

const RinasCucinaCampaign = () => {
  return (
    <div className="bg-white min-h-screen pt-16">
      <div className="mx-auto px-4 sm:px-6 max-w-[1040px]">
        {/* Brand Header */}
        <div className="mb-4 flex items-center">
          <div className="w-[15px] h-[24px] bg-[#FF004F] mr-2"></div>
          <span className="uppercase font-medium">Rina's Cucina</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          Win a set menu and accompanying drinks experience for you and three friends.
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-white bg-[#080d1e] hover:bg-[#080d1e]/90 rounded-none uppercase px-8 py-2 text-sm font-medium w-[174px] h-[44px]">
            ENTER
          </button>
          <button className="justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-background hover:bg-accent hover:text-accent-foreground rounded-none border border-gray-400 uppercase px-8 py-2 text-sm font-medium flex items-center gap-2 w-[174px] h-[44px]">
            SHARE <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
          </button>
        </div>

        {/* Main Image */}
        <div className="mb-10">
          <img 
            src="https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/rinacuccina.jpg"
            alt="Win a set menu and accompanying drinks experience for you and three friends."
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>

        {/* Content */}
        <div className="mb-10">
          <p className="text-lg leading-relaxed mb-6">
            Celebrate our April menu with someone special and start your dining experience with a free exclusive aperitif. You'll enjoy fresh seasonal ingredients and autumnal flavours, complemented by an our April aperitif, available only through this offer.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Click <span className="font-bold">CLAIM</span> to book your exclusive dining experience now.
          </p>
        </div>

        {/* Bottom Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-16">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-white bg-[#080d1e] hover:bg-[#080d1e]/90 rounded-none uppercase px-8 py-2 text-sm font-medium w-[174px] h-[44px]">
            ENTER
          </button>
          <button className="justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-background hover:bg-accent hover:text-accent-foreground rounded-none border border-gray-400 uppercase px-8 py-2 text-sm font-medium flex items-center gap-2 w-[174px] h-[44px]">
            SHARE <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RinasCucinaCampaign; 