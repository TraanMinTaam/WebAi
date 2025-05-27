import React from 'react';
import VictorButton from '../../components/VictorButton';
import ShareButton from '../../components/ShareButton';

const ScanlanTheodoreCampaign = () => {
  return (
    <div className="bg-white min-h-screen pt-16">
      <div className="mx-auto px-4 sm:px-6 max-w-[1040px]">
        {/* Brand Header */}
        <div className="mb-4 flex items-center">
          <div className="w-[15px] h-[24px] bg-[#FF004F] mr-2"></div>
          <span className="uppercase font-medium">Scanlan Theodore</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          Attend our AW25 Collection Preview and Win a Trip to Paris!
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          <VictorButton>ENTER</VictorButton>
          <ShareButton />
        </div>

        {/* Main Image */}
        <div className="mb-10">
          <img 
            src="https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/scanlan.png"
            alt="Attend our AW25 Collection Preview and Win a Trip to Paris!"
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>

        {/* Content */}
        <div className="mb-10">
          <p className="text-lg leading-relaxed mb-6">
            Treat yourself to something special with a chance to win a $200 voucher from Et Al. Nestled on High Street in Armadale, our boutique brings you easy, timeless style—think soft fabrics, clean lines, and pieces made right here in Australia. Perfect for refreshing your wardrobe with a look that's all your own. Click CLAIM to enter for your shot at this exclusive prize now!
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Click <span className="font-bold">CLAIM</span> to book your exclusive dining experience now.
          </p>
        </div>

        {/* Bottom Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-16">
          <VictorButton>ENTER</VictorButton>
          <ShareButton />
        </div>
      </div>
    </div>
  );
};

export default ScanlanTheodoreCampaign; 