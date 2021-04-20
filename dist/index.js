"use strict";
// console.log("Hello TS!!")
let a = 1 + 2;
let b = a + 3;
let c = {
    apple: a,
    banana: b
};
let d = c.apple * 4;
let age = 55;
let driver = {
    name: 'James May',
    age: age
};
var Language;
(function (Language) {
    Language[Language["English"] = 0] = "English";
    Language[Language["Spanish"] = 1] = "Spanish";
    Language[Language["Russian"] = 2] = "Russian";
})(Language || (Language = {}));
let myFirstLanguage = Language.Russian;
let mySecondLanguage = Language['English'];
let t = [true, false, true];
//# sourceMappingURL=index.js.map