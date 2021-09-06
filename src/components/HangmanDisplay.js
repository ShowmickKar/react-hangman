import React from "react";

const HangmanDisplay = ({ wrongAttempts }) => {
  return (
    <div className='hangman-display'>
      <svg height='250' width='200' className='hangman-display'>
        {/* <!-- Rod --> */}
        <line x1='60' y1='20' x2='140' y2='20' />
        <line x1='140' y1='20' x2='140' y2='50' />
        <line x1='60' y1='20' x2='60' y2='230' />
        <line x1='20' y1='230' x2='100' y2='230' />

        {/* <!-- Head --> */}
        <circle
          cx='140'
          cy='70'
          r='20'
          className={wrongAttempts < 4 ? "show" : "hide"}
        />
        {/* <!-- Body --> */}
        <line
          x1='140'
          y1='90'
          x2='140'
          y2='150'
          className={wrongAttempts < 3 ? "show" : "hide"}
        />
        {/* <!-- Arms --> */}
        <line
          x1='140'
          y1='120'
          x2='120'
          y2='100'
          className={wrongAttempts < 2 ? "show" : "hide"}
        />
        <line
          x1='140'
          y1='120'
          x2='160'
          y2='100'
          className={wrongAttempts < 2 ? "show" : "hide"}
        />
        {/* <!-- Legs --> */}
        <line
          x1='140'
          y1='150'
          x2='120'
          y2='180'
          className={wrongAttempts < 1 ? "show" : "hide"}
        />
        <line
          x1='140'
          y1='150'
          x2='160'
          y2='180'
          className={wrongAttempts < 1 ? "show" : "hide"}
        />
      </svg>
    </div>
  );
};

export default HangmanDisplay;
