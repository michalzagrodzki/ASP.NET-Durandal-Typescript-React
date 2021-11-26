define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    function reactComponent(props) {
        var _a = React.useState("local value"), local = _a[0], setLocal = _a[1];
        return (React.createElement("div", null,
            React.createElement("h1", null,
                "Hello, ",
                local),
            React.createElement("p", null,
                "Some value from props: ",
                props.text)));
    }
    return reactComponent;
});
//# sourceMappingURL=reactComponent.js.map