import React from 'react';
import Image from 'next/image';
import { polygon } from '../../../public/assets/image';

const Progress = () => {
  return (
    <nav className="flex items-center ml-1 mb-6">
      <div className='after:content-["\00d7"] text-2xl mr-6'></div>
      <div className="bg-gray-200 rounded-full w-2/4 mr-6">
        <div
          className="bg-indigo-550 h-2.5 rounded-full"
          style={{ width: '10%' }}
        ></div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={polygon}
          width={20}
          height={20}
          alt="polygon-img"
          className="mr-1"
        />
        <div className="font-medium">957</div>
      </div>
    </nav>
  );
};

export default Progress;
