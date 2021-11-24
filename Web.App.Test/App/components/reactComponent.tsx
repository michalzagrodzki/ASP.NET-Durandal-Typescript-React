import React = require("../../Scripts/react/development/react");

function reactComponent(props) {
    const localA = "template value";
    return (
        <div>
            <h1>Hello, {localA}</h1>
            <p>Some value from props: {props.text}</p>
        </div>
    )
}

export = reactComponent;