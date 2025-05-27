import React from 'react';
import VictorButton from '../../components/VictorButton';
import ShareButton from '../../components/ShareButton';

const VictorChurchillCampaign = () => {
  return (
    <div className="bg-white min-h-screen pt-16">
      <div className="mx-auto px-4 sm:px-6 max-w-[1040px]">
        {/* Brand Header */}
        <div className="mb-4 flex items-center">
          <div className="w-[15px] h-[24px] bg-[#FF004F] mr-2"></div>
          <span className="uppercase font-medium">Victor Churchill</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          Free aperitif with reservations for two in April
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          <VictorButton>ENTER</VictorButton>
          <ShareButton />
        </div>

        {/* Main Image */}
        <div className="mb-10">
          <img 
            src="https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/victor.png"
            alt="Free aperitif with reservations for two in April"
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>

        {/* Content */}
        <div className="mb-10">
          <p className="text-lg leading-relaxed mb-6">
            Rina's iconic set menu changes daily to reflect seasonal flavours. Produce is delivered from small farms and local markets to create an exciting and ever-changing menu, paired with an elegantly curated drinks menu. Click ENTER to go into the running to win an exclusive dining experiences at Rina's for you and three friends.
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

export default VictorChurchillCampaign; 