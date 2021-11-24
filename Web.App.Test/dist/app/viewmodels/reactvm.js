define(["require", "exports", "components/reactComponent", "../../Scripts/react/development/react", "../../Scripts/react/development/react-dom"], function (require, exports, reactComponent, React, ReactDOM) {
    "use strict";
    var ReactViewModel = (function () {
        function ReactViewModel() {
            this.displayName = 'React View';
        }
        ReactViewModel.prototype.attached = function () {
            ReactDOM.render(React.createElement(reactComponent, { text: "I am prop value from Durandal top component" }, null), document.getElementById('reactContainer'));
        };
        return ReactViewModel;
    }());
    return ReactViewModel;
});
//# sourceMappingURL=reactvm.js.map