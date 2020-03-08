$(document).ready(function () {
    helloWorld = fluidTutorial.helloWorld({});
});
fluid.defaults("fluidTutorial.helloWorld", {
    gradeNames: ["fluid.component"],
    invokers: {
        // Creates a function on the component
        // referred to by name 'sayHello'
        sayHello: {
            // The value of "funcName" is the full name of
            // a free function
            funcName: "fluidTutorial.helloWorld.consoleHello",
            // Configures the arguments to pass to the function
            args: ["Hello, World!"]
        }
    }
});
fluidTutorial.helloWorld.consoleHello = function (message) {
    console.log(message);
};
var helloWorld = fluidTutorial.helloWorld({});
helloWorld.sayHello();
