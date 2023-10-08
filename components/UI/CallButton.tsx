'use client';

import React from 'react';
import { phoneNumber } from '@/lib/variables';

const CallButton: React.FC = () => {
  const handleClick = () => {
    
    navigator.clipboard.writeText(phoneNumber);
  };

  return (
    <button className='btn h-16 w-40 text-lg' onClick={handleClick}>
      CALL NOW
    </button>
  );
};

export default CallButton;
