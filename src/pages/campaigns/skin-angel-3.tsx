import React from 'react';
import VictorButton from '../../components/VictorButton';
import ShareButton from '../../components/ShareButton';

const SkinAngelCampaign = () => {
  return (
    <div className="bg-white min-h-screen pt-16">
      <div className="mx-auto px-4 sm:px-6 max-w-[1040px]">
        {/* Brand Header */}
        <div className="mb-4 flex items-center">
          <div className="w-[15px] h-[24px] bg-[#FF004F] mr-2"></div>
          <span className="uppercase font-medium">Skin Angel</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          12 IPL Limelight Full Face Treatments for the price of 9!
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          <VictorButton>ENTER</VictorButton>
          <ShareButton />
        </div>

        {/* Main Image */}
        <div className="mb-10">
          <img 
            src="https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/skin_angel.png"
            alt="12 IPL Limelight Full Face Treatments for the price of 9!"
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>

        {/* Content */}
        <div className="mb-10">
          <p className="text-lg leading-relaxed mb-6">
            Step into 2025 with a home that's ahead of the curve. Win a personal interior design consultation from James Said, Armadale's luxury design haven on High Street. Our experts will bring the latest trends—think bold glamour, soft textures, and timeless vibes—to your space. From our historic showroom to your front door, it's your chance to live in style.
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

export default SkinAngelCampaign; 