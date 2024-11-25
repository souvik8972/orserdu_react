import React, { useState } from 'react';
import IMPORTANT_SAFETY_INFORMATION from '../IMPORTANT_SAFETY_INFORMATION/IMPORTANT_SAFETY_INFORMATION';

const FooterPopUp = () => {
  // State to control the height
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the height when the button is clicked
  const toggleHeight = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='w-full absolute bottom-0 z-[100] overflow-y-scroll h-auto bg-white'>
      <div>
        <div className='sticky top-0'>
          <div className='bg-green_bar w-full flex justify-around'>
            <h2>IMPORTANT SAFETY INFORMATION AND INDICATION</h2>
            <button onClick={toggleHeight}>{isExpanded ? '-' : '+'}</button>
          </div>
        </div>
        {/* Dynamic height based on isExpanded */}
        <div
          className={`bg-white flex justify-center transition-all duration-300 ease-in-out ${isExpanded ? 'h-[450px]' : 'h-[80px]'}`}
        >
          <IMPORTANT_SAFETY_INFORMATION />
        </div>
      </div>
    </div>
  );
};

export default FooterPopUp;
