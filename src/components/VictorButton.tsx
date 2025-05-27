import React from 'react';

interface VictorButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const VictorButton: React.FC<VictorButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2 
        whitespace-nowrap ring-offset-background transition-colors 
        focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-ring focus-visible:ring-offset-2 
        disabled:pointer-events-none disabled:opacity-50 
        [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
        text-white bg-[#080d1e] hover:bg-[#080d1e]/90 
        rounded-none uppercase px-8 py-2 text-sm font-medium 
        w-[174px] h-[44px]
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default VictorButton; 