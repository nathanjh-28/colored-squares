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

  function addMore() {
    console.log('click')
  }


  const boxElements = boxes.map(box => (<Box
    key={box.id}
    boxid={box.id} on={box.on} toggle={toggle} />))

  return (
    <>
      <h2>click squares for random color changes</h2>
      <main>
        {boxElements}
        <button className="button" onClick={addMore}>add more</button>
      </main>
    </>
  );
}

export default App;
