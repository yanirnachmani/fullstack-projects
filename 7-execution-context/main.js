var x = 1
function foo() {
    var y = 2
    function bar() {
        var z = 3
        function baz() {
            console.log(x);
            console.log(y);
            console.log(z);

        }
        baz()
    }
    bar()
}
foo()