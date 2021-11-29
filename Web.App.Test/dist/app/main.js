requirejs.config({
    paths: {
        'text': '../Scripts/text',
        'durandal': '../Scripts/durandal',
        'plugins': '../Scripts/durandal/plugins',
        'transitions': '../Scripts/durandal/transitions',
        'react': '../Scripts/react/development/react',
        'react-dom': '../Scripts/react-dom/development/react-dom'
    },
    shim: {
        'react': {
            exports: 'React'
        },
        'react-dom': {
            exports: 'React-dom'
        }
    }
});
define('jquery', function () { return jQuery; });
define('knockout', ko);
define(['durandal/system', 'durandal/app', 'durandal/viewLocator'], function (system, app, viewLocator) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");
    app.title = 'Durandal Typescript Starter Kit';
    app.configurePlugins({
        router: true,
        dialog: true
    });
    app.start().then(function () {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention('viewmodels', 'views');
        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell', 'entrance');
    });
});
//# sourceMappingURL=main.js.map