import React, { useState, useEffect } from "react";
import HangmanDisplay from "./components/HangmanDisplay";
import Keyboard from "./components/Keyboard";
import Header from "./components/Header";
import Word from "./components/Word";
import words from "./utils/words";

function App() {
  const [word, setWord] = useState("");
  const [inputPrompt, setInputPrompt] = useState("");
  const [initialPrompt, setInitialPrompt] = useState("");
  const [newWord, setNewWord] = useState(true);
  const [win, setWin] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [gameState, setGameState] = useState("default");

  const generateNewWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  const inputPromptHintGenerator = (word) => {
    var hint = [];
    var n = Math.floor(word.length / 2);
    while (hint.length < n) {
      var index = Math.floor(Math.random() * word.length);
      while (hint.includes(index)) {
        index = Math.floor(Math.random() * word.length);
      }
      hint.push(index);
    }
    return hint;
  }

  const newGameHandler = () => {
    var word = generateNewWord();
    while (word.includes(" ") || word.includes("-") || word.length < 3) {
      word = generateNewWord();
    }
    var hint = inputPromptHintGenerator(word);
    console.log(`New Word ${word}`);
    var inputPrompt = "";
    for (var i = 0; i < word.length; i++) {
      inputPrompt += hint.includes(i) ? word[i] : "_";
    }
    setInputPrompt(inputPrompt);
    setInitialPrompt(inputPrompt);
    setWord(word);
    setNewWord(false);
    setWrongAttempts(0);
    setGameState("default");
  };

  useEffect(() => {
    newGameHandler();
  }, [newWord]);

  useEffect(() => {
    if (inputPrompt === word) {
      setGameState("win");
    }
    if (wrongAttempts > 3) {
      setGameState("defeat");
    }
  }, [inputPrompt, wrongAttempts]);

  if (gameState === "default") {
    return (
      <div className='App'>
        <Header />
        <div className='game-container'>
          <HangmanDisplay wrongAttempts={wrongAttempts} />
          <Keyboard
            word={word}
            inputPrompt={inputPrompt}
            setInputPrompt={setInputPrompt}
            initialPrompt={initialPrompt}
            wrongAttempts={wrongAttempts}
            setWrongAttempts={setWrongAttempts}
          />
          <Word inputPrompt={inputPrompt} />
          <button
            onClick={() => {
              setNewWord(true);
            }}
            className='btn'>
            New Word
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='finish-container'>
      <h1 className='finish'>
        {gameState === "win" ? "you won the game!" : "you lost the game!"}
      </h1>
      <p>
        the word was<div className='correct-word'>{word}</div>
      </p>
      <button className='btn' onClick={newGameHandler} type="button" autofocus>
        Play Again
      </button>
    </div>
  );
}
export default App; 