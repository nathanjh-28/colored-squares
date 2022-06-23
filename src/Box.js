import React from "react";

export default function box(props) {

    const styles = {
        backgroundColor: props.on ? "#222" : "None"

    }

    return (
        <div style={styles} className="box"></div>
    )
}