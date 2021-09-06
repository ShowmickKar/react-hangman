import React from "react";
import LetterButton from "./LetterButton";

const alphabets = [];
for (var i = 0; i < 26; i++) {
  alphabets.push((i + 10).toString(36));
}

const Keyboard = ({
  word,
  inputPrompt,
  setInputPrompt,
  initialPrompt,
  wrongAttempts,
  setWrongAttempts,
}) => {
  return (
    <div className='keyboard'>
      {alphabets.map((letter) => {
        return (
          <LetterButton
            key={Math.random() * 1000}
            letter={letter}
            word={word}
            inputPrompt={inputPrompt}
            setInputPrompt={setInputPrompt}
            initialPrompt={initialPrompt}
            wrongAttempts={wrongAttempts}
            setWrongAttempts={setWrongAttempts}
          />
        );
      })}
    </div>
  );
};

export default Keyboard;
