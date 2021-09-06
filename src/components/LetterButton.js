import React, { useState, useEffect } from "react";
import setCharAt from "../utils/utils";

const LetterButton = ({
  letter,
  word,
  inputPrompt,
  setInputPrompt,
  initialPrompt,
  wrongAttempts,
  setWrongAttempts,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [prompt, setPrompt] = useState(initialPrompt);

  useEffect(() => {
    console.log("Initial Prompt:" + prompt);
    for (var i = 0; i < inputPrompt.length; i++) {
      if (inputPrompt.charAt(i) === letter && prompt[i] === "_") {
        setDisabled(!disabled);
        return;
      }
    }
  }, [inputPrompt]);

  const userInputHandler = (e) => {
    console.log(wrongAttempts);
    if (word.includes(letter)) {
      for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) === letter) {
          inputPrompt = setCharAt(inputPrompt, i, letter);
        }
      }
      setInputPrompt(inputPrompt);
    } else {
      setWrongAttempts(wrongAttempts + 1);
    }
  };

  return (
    <button
      className={`letter-button-${disabled ? "disabled" : "active"}`}
      disabled={disabled}
      onClick={() => {
        userInputHandler();
      }}>
      {letter}
    </button>
  );
};

export default LetterButton;
