import React from 'react';
import Image from 'next/image';
import { loudSpeaker } from '../../../public/assets/image';
const Statement = () => {
  return (
    <div className="flex items-center mb-8">
      <Image
        src={loudSpeaker}
        width={40}
        height={40}
        alt="loudspeaker-img"
        className="mr-4"
      />
      <div className="font-bold">I walk and she swims</div>
    </div>
  );
};

export default Statement;
