const caesercipher = require("./caesercipher")

test("shift lowercase letters", () => {
    expect(caesercipher('abc', 1)).toBe('bcd')
});

test("shift capital letters", () => {
    expect(caesercipher('aBc', 1)).toBe('bCd')
});

test("shift and keeps punctuation", () => {
    expect(caesercipher('..abc..', 1)).toBe('..bcd..')
});

test("shift amount changed", () => {
    expect(caesercipher('abc', 3)).toBe('def')
});

test("wrap capital letters", () => {
    expect(caesercipher('XYZ', 3)).toBe('ABC')
});

test("wrap lowercase letters", () => {
    expect(caesercipher('xyz', 3)).toBe('abc')
});

