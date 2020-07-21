const calculator = ((x,y) => {

    function add(x,y) {
        return x + y;
    }

    function subtract(x,y) {
        return x - y;
    }

    function multiply(x,y) {
        return x * y;
    }

    function divide(x,y) {
        return x / y;
    }

    return {add, subtract, multiply, divide}
})()

module.exports = calculator