const calculator = require("./calculator")

let addAnswer = calculator.add(2,3)

let subtractAnswer = calculator.subtract(3,2)

let multiply = calculator.multiply(3,2)

let divideAnswer = calculator.divide(6,2)

test("add 3 + 5 equals 8", () => {
expect(calculator.add(2,3)).toBe(5);
})

test("subtract 2 from 3 equals 1", () => {
    expect(subtractAnswer).toBe(1);
})
 
test("multipy 2 and 3 equals 6", () => {
    expect(multiply).toBe(6);
})

test("divide 6 by 2 equals 3", () => {
    expect(divideAnswer).toBe(3);
})
