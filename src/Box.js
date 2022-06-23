import React from "react";

export default function Box(props) {

    const [onState, setOnState] = React.useState(props.on)

    function handleOn() {
        setOnState(prev => {
            return !prev
        })
    }

    const styles = {
        backgroundColor: onState ? "#222" : "transparent"

    }

    return (
        <div style={styles} className="box" onClick={handleOn}></div>
    )
}