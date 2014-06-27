var tveir = {
    bind: function (object, property, outputs, inputs) {
        inputs.forEach(function (input) {
            tveir.addInput(object, property, input);
        });
        outputs.forEach(function (output) {
            tveir.addOutput(object, property, output);
        });
    },

    setupList: function (object, property, type) {
        var listName = '__' + type;
        if (object[listName] === undefined) {
            object[listName] = {};
        }
        if (object[listName][property] === undefined) {
            object[listName][property] = [];
        }
    },

    addInput: function (object, property, input) {
        function valueChanged(e) {
            if (e.target.value !== object[property]) {
                object[property] = e.target.value;
                tveir.writeValue(object, property);
            }
        }
        tveir.setupList(object, property, 'inputs');
        object.__inputs[property].push(input);

        input.addEventListener('keyup', valueChanged);
        input.addEventListener('change', valueChanged);
    },

    addOutput: function (object, property, output) {
        tveir.setupList(object, property, 'outputs');
        object.__outputs[property].push(output);
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
