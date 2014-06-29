(function () {
    function setupList(object, property, type) {
        var listName = '__' + type;
        if (object[listName] === undefined) {
            object[listName] = {};
        }
        if (object[listName][property] === undefined) {
            object[listName][property] = [];
        }
    }

    function addToList(object, property, type, thing) {
        object['__' + type][property].push(thing);
    }

    window.tveir = {
        bind: function (object, property, outputs, inputs) {
            setupList(object, property, 'inputs');
            setupList(object, property, 'outputs');

            inputs.forEach(function (input) {
                tveir.addInput(object, property, input);
            });

            outputs.forEach(function (output) {
                tveir.addOutput(object, property, output);
            });
        },

        addInput: function (object, property, input) {
            function valueChanged(e) {
                if (e.target.value !== object[property]) {
                    object[property] = e.target.value;
                    tveir.writeValue(object, property);
                }
            }
            addToList(object, property, 'inputs', input);

            input.addEventListener('keyup', valueChanged);
            input.addEventListener('change', valueChanged);
        },

        addOutput: function (object, property, output) {
            addToList(object, property, 'outputs', output);
        },

        writeValue: function (object, property) {
            object.__outputs[property].forEach(function (output) {
                output.innerText = object[property];
            });
            object.__inputs[property].forEach(function (input) {
                input.value = object[property];
            });
        }
    };
})();
