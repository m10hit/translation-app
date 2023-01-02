import React from 'react';
import SelectedWord from './selectedWord/SelectedWord';

const Selected = ({ selectedWords }) => {
  return (
    <div className="h-56">
    <div className="flex flex-wrap mb-12">
      {selectedWords.map(({ word, id }, index) => (
        <SelectedWord key={id} word={word} />
      ))}
    </div>
</div>
  );
};

export default Selected;
