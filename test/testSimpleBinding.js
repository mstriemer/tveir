describe('a simple binding', function () {
    it('updates the output when the input has a keyup', function () {
        var obj = {};
        var input = document.createElement('input');
        var output = document.createElement('p');
        bind(obj, 'foo', [output], [input]);
        expect(output.innerText).toEqual('');
        input.value = 'something else';
        input.dispatchEvent(new KeyboardEvent('keyup'));
        expect(output.innerText).toEqual('something else');
    });

    it('updates the output when the input changes', function () {
        var obj = {};
        var input = document.createElement('input');
        var output = document.createElement('p');
        bind(obj, 'foo', [output], [input]);
        expect(output.innerText).toEqual('');
        input.value = 'something else';
        input.dispatchEvent(new Event('change'));
        expect(output.innerText).toEqual('something else');
    });
});
