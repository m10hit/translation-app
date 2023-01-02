import React from 'react';

const SelectedWord = ({ word }) => {
  return (
    <div className="border-gray-250 mb-2">
      <span className="px-4 py-2 m-2 mr-1 rounded-full border-2 border-gray-250 font-semibold text-sm flex align-center w-max cursor-pointer transition duration-300 ease">
        {word}
      </span>
    </div>
  );
};

export default SelectedWord;
