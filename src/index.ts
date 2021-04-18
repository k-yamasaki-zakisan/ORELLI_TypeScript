// console.log("Hello TS!!")
let a = 1 + 2;
let b = a + 3;
let c = {
    apple: a,
    banana: b
}
let d = c.apple * 4

type Age = number
type Person = {
    name: string
    age: Age
}

let age: Age = 55
let driver: Person = {
    name: 'James May',
    age: age
}

enum Language {
    English = 0,
    Spanish = 1,
    Russian = 2
}

let myFirstLanguage = Language.Russian
let mySecondLanguage = Language['English']

let t = [true, false, true];

