import "./App.css";
import useWordGame from "./hooks/useWordGame";
//useRef grab access to the dom element

function App() {
  const {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  } = useWordGame(); // it is a function that using hooks under the hood, not a hook
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textBoxRef} // access ref
        disabled={!isTimeRunning}
        onChange={handleChange}
        value={text}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button disabled={isTimeRunning} onClick={startGame}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
