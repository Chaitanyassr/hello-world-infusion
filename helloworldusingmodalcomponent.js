//for mutable data
fluid.defaults("fluidTutorial.helloWorld", {
    gradeNames: ["fluid.modelComponent"],
    model: {
        message: "Hello, World!"
    },
    modelListeners: {
        // On the left side, configures a
        // model listener listening to the
        // 'message' value
        //
        // On the right side, configures the
        // listener to call the component's
        // 'sayHello' invoker whenever the
        // value changes
        message: "{that}.sayHello"
    },
    invokers: {
        sayHello: {
            funcName: "fluidTutorial.helloWorld.consoleHello",
            args: ["{that}.model.message"]
        }
    }
});

fluidTutorial.helloWorld.consoleHello = function (message) {
    console.log(message);
};

$(document).ready(function () {
  helloWorld = fluidTutorial.helloWorld();
});
