describe('a simple binding', function () {
    it('updates the output when the input has a keyup', function () {
        var obj = {};
        var input = document.createElement('input');
        var output = document.createElement('p');
        tveir.bind(obj, 'foo', [output], [input]);
        expect(output.innerText).toEqual('');
        input.value = 'something else';
        input.dispatchEvent(new KeyboardEvent('keyup'));
        expect(output.innerText).toEqual('something else');
    });

    it('updates the output when the input changes', function () {
        var obj = {};
        var input = document.createElement('input');
        var output = document.createElement('p');
        tveir.bind(obj, 'foo', [output], [input]);
        expect(output.innerText).toEqual('');
        input.value = 'something else';
        input.dispatchEvent(new Event('change'));
        expect(output.innerText).toEqual('something else');
    });

    it('supports mutliple inputs and outputs', function () {
        var obj = {};
        var in1 = window.document.createElement('input');
        var in2 = document.createElement('input');
        var out1 = document.createElement('p');
        var out2 = document.createElement('p');
        expect(out1.innerText).toEqual('');
        expect(out2.innerText).toEqual('');
        expect(in2.value).toEqual('');
        tveir.bind(obj, 'whatever', [out1, out2], [in1, in2]);
        in1.value = 'new value!';
        in1.dispatchEvent(new Event('change'));
        expect(out1.innerText).toEqual('new value!');
        expect(out2.innerText).toEqual('new value!');
        expect(in2.value).toEqual('new value!');
    });

    it('does not set the value for unbound inputs', function () {
        var obj = {};
        var input = document.createElement('input');
        var output = document.createElement('p');
        tveir.bind(obj, 'later', [output], []);
        expect(output.innerText).toEqual('');
        input.value = 'something else';
        input.dispatchEvent(new Event('change'));
        expect(output.innerText).toEqual('');
    });

    it('can add an input binding later', function () {
        var obj = {};
        var input = document.createElement('input');
        var output = document.createElement('p');
        tveir.bind(obj, 'later', [output], []);
        expect(output.innerText).toEqual('');
        tveir.addInput(obj, 'later', input);
        input.value = 'later value';
        input.dispatchEvent(new Event('change'));
        expect(output.innerText).toEqual('later value');
    });
});
