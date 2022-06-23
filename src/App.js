import React from "react";
import './style.css'
import boxData from './boxData'
import Box from './Box'

function App() {

  const [boxes, setBoxes] = React.useState(boxData)

  const boxElements = boxes.map(box => (<Box key={box.id} on={box.on} />))

  return (
    <main>
      {boxElements}
    </main>
  );
}

export default App;
