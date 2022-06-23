import React from "react";

export default function Box(props) {
    const colors = ['red', 'green', 'blue']
    function getRandomColor(arr) {
        const randomIdx = Math.floor(Math.random() * arr.length)
        return arr[randomIdx]
    }
    const newColor = getRandomColor(colors)

    const styles = {
        backgroundColor: props.on ? newColor : "transparent"

    }

    return (
        <div style={styles} className="box"
            onClick={() => props.toggle(props.boxid)} data-id={props.boxid}></div>
    )
}

