# ASP.NET-MVC-DURANDAL-TYPESCRIPT-REACT

Use React and Typescript within Durandal SPA application hosted in ASP.Net MVC Application.

Project is meant as an extension for existing ASP.Net MVC / Durandal applications.

## Installation

To start local server please follow these steps:

 * Clone repository
 * Open Visual Studio
 * Rebuild solution in Visual Studio (Ctrl + Shift + B in VS)
 * Start without debugging (Ctrl + F5)
 * Open browser and navigate to following url: `http://localhost:6159/`
 * In opened application in browser navigate to following route: `http://localhost:6159/#react`

 ## Example

Simple example to get you started:

```jsx
function WelcomeComponent (React) {
  return function(props) {
    return (
      <h1>Hello { props.name }</h1>
    );
  }
}

ReactDOM.render(
  React.createElement(
    WelcomeComponent,
    {name: "World"},
    null
  ), 
  document.getElementById('reactContainer')
);
```

This example will render "Hello World" into a container with id `reactContainer` on the template view.