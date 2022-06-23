import React from "react";
import './style.css'
import boxData from './boxData'
import Box from './Box'

function App() {

  const [boxes, setBoxes] = React.useState(boxData)



  function toggle(id) {
    setBoxes(prevBoxes => {
      return prevBoxes.map(box => {
        return box.id === id ? { ...box, on: !box.on } : box
      })
    })
  }


  const boxElements = boxes.map(box => (<Box
    key={box.id}
    boxid={box.id} on={box.on} toggle={toggle} />))

  return (
    <main>
      {boxElements}
    </main>
  );
}

export default App;
