import React, { useState, useEffect } from 'react';
import './styles.css'; // Assuming your styles are defined here

function DynamicJobFinder() {
  const jobTitles = ["SDE", "ML Engineer", "Data Scientist", "Full Stack", "AI Engineer"];
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [characters, setCharacters] = useState(jobTitles[0].split(''));

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentJobIndex + 1) % jobTitles.length;
      transitionCharacters(jobTitles[currentJobIndex], jobTitles[nextIndex]);
      setCurrentJobIndex(nextIndex);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentJobIndex]);

  const transitionCharacters = (current, next) => {
    let currentChars = current.split('');
    let nextChars = next.split('');
    let timeout = 300;

    // Remove current characters from the end
    currentChars.reduceRight((prev, curr, i) => setTimeout(() => {
      setCharacters(chars => [...chars.slice(0, -1)]);
    }, i * timeout), 0);

    // Add next characters from the beginning
    nextChars.forEach((char, i) => setTimeout(() => {
      setCharacters(chars => [...chars, char]);
    }, (currentChars.length * timeout) + (i * timeout)));
  };

  return (
    <div>
      <h1 className='text-white text-5xl font-bold shadow-lg'>Find job for {characters.map((char, index) =>
        <span key={index} className="character-fade-in text-green-500">
          {char}
        </span>
      )}</h1>
      <h2 className='mt-2 text-gray-300 font-medium text-xl'>Unlock your career potential with our comprehensive job search portal</h2>
    </div>
  );
}

export default DynamicJobFinder;
