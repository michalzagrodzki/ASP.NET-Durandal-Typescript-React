import reactComponent = require("components/reactComponent")
import React = require("react");
import ReactDOM = require("react-dom");

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
    public detached() {
        ReactDOM.unmountComponentAtNode(
            document.getElementById('reactContainer')
        );
    }
}

export = ReactViewModel;