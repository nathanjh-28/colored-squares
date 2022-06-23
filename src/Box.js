import React from "react";

export default function Box(props) {

    // const [onState, setOnState] = React.useState(props.on)

    // function handleOn() {
    //     setOnState(prev => {
    //         return !prev
    //     })
    // }

    const styles = {
        backgroundColor: props.on ? "#222" : "transparent"

    }

    return (
        <div style={styles} className="box"
            onClick={() => props.toggle(props.boxid)} data-id={props.boxid}></div>
    )
}

