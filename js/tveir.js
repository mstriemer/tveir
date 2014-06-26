function array(thing) {
    return Array.prototype.slice.call(thing);
}

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

var myObject = {};
var inputs = [];
var outputs = [];
var elements = array(document.querySelectorAll('[data-bind="title"]'));
elements.forEach(function (element) {
    if (element.tagName == 'INPUT') {
        inputs.push(element);
    } else {
        outputs.push(element);
    }
});

bind(myObject, 'title', outputs, inputs);
