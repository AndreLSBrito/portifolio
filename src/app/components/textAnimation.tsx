'use client'

import { useEffect, useState } from "react";

interface TextAnimationProps {
  words: string[]
}

export function TextAnimation ({ words }:TextAnimationProps) {
  const [isAlreadyWritten, setIsAlreadyWritten] = useState(false)
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let timer:NodeJS.Timeout;
    const word = words[currentWordIndex];

    if (displayedText === word || isAlreadyWritten) {
      if (!isAlreadyWritten) setIsAlreadyWritten(true)
      
      timer = setTimeout(() => {
        let index = displayedText.length;
        timer = setInterval(() => {
          if (index >= 0) {
            setDisplayedText(word.substring(0, index));
            index -= 1;
          } else {
            clearInterval(timer);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // loop pelo array de words
            setIsAlreadyWritten(false)
          }
        }, 50);
      }, displayedText === word ? 1000 : 0);
    } else {
      timer = setInterval(() => {
        const currentLength = displayedText.length;
        if (currentLength < word.length) {
          setDisplayedText(word.substring(0, currentLength + 1));
        } else {
          clearInterval(timer);
        }
      }, 200);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(timer);
    };
  }, [currentWordIndex, displayedText, isAlreadyWritten, words]);

  return<span className='bg-clip-text text-transparent bg-target text-xl md:text-3xl'> {displayedText}</span>
};