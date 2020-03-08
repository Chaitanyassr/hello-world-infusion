luid.defaults("fluidTutorial.helloWorld", {
    gradeNames: ["fluid.component"],
    listeners: {
        // Configures the component to call its own 'sayHello' function
        // when it's created
        //
        // On the left side, "onCreate.sayHello":
        // 1) Configures the listener to listen for
        // the onCreate lifecycle event
        // 2) Adds an a namespace of 'sayHello' to
        // allow multiple listeners to be attached to the
        // same event without collision
        //
        // On the right side, this configures the listener
        // to use the sayHello invoker
        "onCreate.saychai": "{that}.saychai"
    },
    invokers: {
        saychai: {
            funcName: "fluidTutorial.helloWorld.consoleHello",
            args: ["Hello, World!"]
        }
    }
});

fluidTutorial.helloWorld.consoleHello = function (message) {
    console.log(message);
};

$(document).ready(function () {
    helloWorld =    fluidTutorial.helloWorld({});
});
