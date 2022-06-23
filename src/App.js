import React from "react";
import './style.css'
import boxData from './boxData'
import Box from './Box'

function App() {

  const [boxes, setBoxes] = React.useState(boxData)

  function toggle(e) {
    const idx = e.target.getAttribute('data-id') - 1
    //console.log(idx)
    setBoxes(prevState => {
      const temp = prevState;
      temp[idx].on = !prevState[idx].on
      //console.log(temp)
      return temp
    })
  }

  console.log(boxes)


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
