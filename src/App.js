import React from "react";
import './style.css'
import boxData from './boxData'
import Box from './Box'

function App() {

  function toggle(e) {
    console.log(e.target.getAttribute('data-id'))
    console.log('click!')
    //   const key = e.target.getAttribute('data-id')
    //   setBoxes(prevState => {
    //     prevState[key - 1].on = !prevState[key - 1].on;
    //     return prevState
    //   })
  }

  const [boxes, setBoxes] = React.useState(boxData)

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
