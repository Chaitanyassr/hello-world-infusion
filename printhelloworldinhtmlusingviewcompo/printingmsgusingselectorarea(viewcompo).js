fluid.defaults("fluidTutorial.helloWorld", {
    gradeNames: ["fluid.viewComponent"],
    model: {
        message: "Hello, World!"
    },
    // Creates a binding between the
    // selector named 'messageArea'
    // and the jQuery selector '.flc-messageArea'
    selectors: {
        messageArea: ".flc-messageArea"
    },
    listeners: {
        "onCreate.displayHello": "{that}.displayHello"
    },
    modelListeners: {
        message: "{that}.sayHello"
    },
    invokers: {
        sayHello: {
            "funcName": "fluidTutorial.helloWorld.consoleHello",
            args: ["{that}.model.message"]
        },
        // Another invoker to call a jQuery
        // method on a DOM node returned
        // using the DOM binder functionality
        displayHello: {
            // This IoC reference lets us refer  
            // to the DOM node bound to the
            // `messageArea` key by the selector
            // definition above; it returns a
            // standard jQuery object
            "this": "{that}.dom.messageArea",
            // Calls the 'html' function of a jQuery
            // object to replace the HTML at the node
            method: "html",
            args: ["{that}.model.message"]
        }
    }
});

fluidTutorial.helloWorld.consoleHello = function (message) {
    console.log(message);
};

$(document).ready(function () {
  helloWorld = fluidTutorial.helloWorld(".helloWorld", {});
});