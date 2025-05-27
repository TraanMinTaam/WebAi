import React from 'react';

interface ShareButtonProps {
  onClick?: () => void;
  className?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ onClick, className = '' }) => {
  return (
    <button 
      onClick={onClick}
      className={`
        justify-center whitespace-nowrap ring-offset-background 
        transition-colors focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-ring focus-visible:ring-offset-2 
        disabled:pointer-events-none disabled:opacity-50 
        [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
        bg-background hover:bg-accent hover:text-accent-foreground 
        rounded-none border border-gray-400 uppercase px-8 py-2 
        text-sm font-medium flex items-center gap-2 w-[174px] h-[44px]
        ${className}
      `}
    >
      SHARE 
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="lucide lucide-arrow-up-right"
      >
        <path d="M7 7h10v10"></path>
        <path d="M7 17 17 7"></path>
      </svg>
    </button>
  );
};

export default ShareButton; 