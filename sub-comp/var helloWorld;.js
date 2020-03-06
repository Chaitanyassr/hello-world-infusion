var helloWorld;

fluid.defaults("fluidTutorial.helloWorld", {
    gradeNames: ["fluid.viewComponent"],
    model: {
        message: "Hello, World!"
    },
    selectors: {
        messageArea: ".flc-messageArea"
    },
    // Subcomponents are defined here
    components: {
        consoleHello: {
            // The type must be an existing grade
            type: "fluid.modelComponent",
            // Configuration options for a subcomponent go under the
            // 'options' key
            options: {
                model: {
                    // "{helloWorld}.model.message" is an IoC
                    // reference to the parent fluidTutorial.helloWorld
                    // component's message value
                    // The framework handles two-way synchronization
                    // between the models automatically in this form;
                    // many other forms are possible, including
                    // ones that transform a value before it is
                    // relayed
                    message: "{helloWorld}.model.message"
                },
                modelListeners: {
                    message: "{that}.sayHello"
                },
                invokers: {
                    sayHello: {                        
                        funcName: "fluidTutorial.helloWorld.consoleHello",
                        // Here, "{that}" means the context of the current
                        // component configuration of this block (consoleHello)
                        args: ["{that}.model.message"]
                    },
                }
            }
        },
        displayHello: {
            type: "fluid.modelComponent",
            options: {
                model: {
                    message: "{helloWorld}.model.message"
                },
                modelListeners: {
                    message: "{that}.displayHello"
                },
                invokers: {
                    displayHello: {
                        "this": "{helloWorld}.dom.messageArea",
                        method: "html",
                        args: ["{that}.model.message"]
                    }
                }
            }
        }
    }
});

fluidTutorial.helloWorld.consoleHello = function (message) {
    console.log(message);
};

$(document).ready(function () {
  helloWorld = fluidTutorial.helloWorld(".helloWorld", {});
});