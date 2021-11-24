define(["require", "exports", "../../Scripts/react/development/react"], function (require, exports, React) {
    "use strict";
    function reactComponent(props) {
        var localA = "template value";
        return (React.createElement("div", null,
            React.createElement("h1", null,
                "Hello, ",
                localA),
            React.createElement("p", null,
                "Some value from props: ",
                props.text)));
    }
    return reactComponent;
});
//# sourceMappingURL=reactComponent.js.map