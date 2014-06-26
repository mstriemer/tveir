function bind(object, property, outputs, inputs) {
    function writeValue() {
        outputs.forEach(function (output) {
            output.innerText = object[property];
        });
        inputs.forEach(function (input) {
            input.value = object[property];
        });
    }

    inputs.forEach(function (input) {
        function valueChanged(e) {
            if (e.target.value != object[property]) {
                object[property] = e.target.value;
                writeValue();
            }
        }

        input.addEventListener('keyup', valueChanged);
        input.addEventListener('change', valueChanged);
    });
}
