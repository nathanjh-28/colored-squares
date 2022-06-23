import React from "react";
import './style.css'
import boxData from './boxData'

function App() {

  const [boxes, setBoxes] = React.useState(boxData)

  const boxElements = boxes.map(box => (<div key={box.id} className="box"></div>))

  return (
    <main>
      {boxElements}
    </main>
  );
}

export default App;
