import React, {useEffect} from 'react';
import './App.css';

function App() {
  const [colorIndex, setColorIndex] = React.useState(0);
  const colors = ["#c4e7d4", "#f39c6b", "#b9c0da", "#517664", "#f0b7b3", "#c9e4e7", "#ada0cf", "#498467", "#f39c91", "#b5b0bf"];

  useEffect(() => {
    document.body.style.backgroundColor = colors[colorIndex];
  }, [colorIndex]);

  function handleChangeIndex() {
    const next = colorIndex + 1 === colors.length ? 0 : colorIndex + 1;
    setColorIndex(next);
  }

  return (
    <div>
      <h1>Change <br/> my <br/> background</h1>
      <button onClick={handleChangeIndex}>click me</button>
    </div>
  )
}
export default App;
