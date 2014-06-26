function array(thing) {
    return Array.prototype.slice.call(thing);
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

document.querySelector('.alert').addEventListener('click', function (e) {
    alert(JSON.stringify(myObject));
});
