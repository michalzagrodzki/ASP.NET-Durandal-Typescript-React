import reactComponent = require("components/reactComponent")
import React = require("../../Scripts/react/development/react");
import ReactDOM = require("../../Scripts/react/development/react-dom");

class ReactViewModel {
    public displayName = 'React View';
    public attached() {
        ReactDOM.render(
            React.createElement(
                reactComponent,
                { text: "I am prop value from Durandal top component" },
                null
            ),
            document.getElementById('reactContainer')
        );
    }
}

export = ReactViewModel;