import React = require("react");

function reactComponent (props) {
    var [local, setLocal] = React.useState("local value");
    return (
        <div>
            <h1>Hello, {local}</h1>
            <p>Some value from props: {props.text}</p>
        </div>
    )
}

export = reactComponent;