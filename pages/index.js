import React, { useState, useEffect } from 'react';
import { wordList } from '../util/wordList';
import Button from '../components/Inputs/Button';
import Progress from '../components/UI/Progress/Progress';
import Statement from '../components/UI/Statement/Statement';
import Selected from '../components/UI/selectedWords/SelectedWords';

export default function Home() {
  const [words, setWords] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);

  useEffect(() => {
    setWords(wordList);
  }, []);

  const handleWordClick = index => {
    const wordToAddList = [...selectedWords];
    const wordList = [...words];
    const wordToAdd = wordList[index];
    wordToAdd.isClicked = true;
    wordToAddList.push(wordToAdd);
    setSelectedWords(wordToAddList);
    setWords(wordList);
  };

  return (
    <div className="site-container border border-solid border-black">
      {/* To show progress bar and score */}
      <Progress />
      <header className="font-bold text-xl mb-6">
        Translate this sentence
      </header>
      <hr className="mb-6" />
      <Statement />

      {/* Show selected words */}
      <Selected selectedWords={selectedWords} />

      {/* Show all words */}
      <div className="flex flex-wrap mb-12">
        {words.map(({ word, id, isClicked }, index) => (
          <Button
            key={id}
            clickHandler={() => handleWordClick(index)}
            isDisable={isClicked}
            className={` ${
              isClicked ? `bg-gray-150 text-gray-150` : ''
            } px-4 py-2 m-2 rounded-full border-2 border-gray-250 font-semibold text-sm flex align-center w-max cursor-pointer transition duration-300 ease`}
          >
            {word}
          </Button>
        ))}
      </div>
      <Button
        type="button"
        className="text-white w-full bg-indigo-550 font-medium rounded-full text-xs px-5 py-2.5 text-center mb-2"
      >
        Check Answers
      </Button>
    </div>
  );
}
