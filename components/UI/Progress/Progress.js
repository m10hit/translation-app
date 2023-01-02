import React from 'react';
import Image from 'next/image';
import { close, polygon } from '../../../public/assets/image';

const Progress = () => {
  return (
    <nav className="flex items-center ml-1 mb-6">
      {/* <div className='after:content-["\00d7"] text-2xl mr-6'></div> */}
      <Image
        src={close}
        width={10}
        height={10}
        alt="close-img"
        className="mr-6"
      />
      <div className="bg-gray-200 rounded-full w-3/5 mr-6">
        <div
          className="bg-indigo-550 h-2.5 rounded-full"
          style={{ width: '10%' }}
        ></div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={polygon}
          width={30}
          height={30}
          alt="polygon-img"
          className="mr-1"
        />
        <div className="font-medium">957</div>
      </div>
    </nav>
  );
};

export default Progress;
