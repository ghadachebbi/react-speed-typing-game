import { useState, useEffect, useRef } from "react";
function useWordGame(startingTime = 10) {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const textBoxRef = useRef(null); //instance of ref
  // keeping tracking  the words counts requires a state
  const [wordCount, setWordCount] = useState(0);
  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }
  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(startingTime);
    setText("");
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus(); // have the focus when the game is started
  }
  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  }
  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning, wordCount]);
  return {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  };
}
export default useWordGame;
