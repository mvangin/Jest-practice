const arrayAnalysis = require("./arrayAnalysis")


test("object parameters correct",
    () => {
        expect(arrayAnalysis([2, 1, 3])).toEqual({
            average: 2,
            min: 1,
            max: 3,
            length: 3
        });
    })

