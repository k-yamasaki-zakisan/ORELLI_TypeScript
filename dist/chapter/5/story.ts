type Color = 'Black' | 'White'
type Files = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

class Position {
    constructor(
        private file: Files,
        private rank: Rank
    ) { }
}

class Piece {
    protected position: Position
    constructor(
        private readonly color: Color,
        file: Files,
        rank: Rank
    ) {
        this.position = new Position(file, rank)
    }
}


// interface User {
//     name: string
// }

// // interface User {
// //     age: number
// // }

// let a: User = {
//     name: 'Ashley',
// }

// // type User = {
// //     name: string
// // }

// // type User = {
// //     age: number
// // }

// interface User<Age extends string> {
//     age: Age
// }

// interface Animal {
//     readonly name: string
//     eat(food: string): void
//     sleep(hours: number): void
// }

// interface Feline {
//     meow(): void
// }

// class Cat implements Animal, Feline {
//     name = 'Whiskers'
//     eat(food: string) {
//         console.info('Ate some', food, '. Mmm')
//     }
//     sleep(hours: number) {
//         console.info('Slep for', hours, 'hours')
//     }
//     meow() {
//         console.info('Meow')
//     }
// }

type State = {
    [key: string]: string
}

class StringDatabase {
    state: State = {}
    get(key: string): string | null {
        return key in this.state ? this.state[key] : null
    }
    set(key: string, value: string): void {
    }
    static from(state: State) {
        let db = new StringDatabase
        for (let key in state) {
            db.set(key, state[key])
        }
        return db
    }
}

interface StringDatabase {
    state: State
    get(key: string): string | null
    set(ket: string, value: string): void
}

interface StringDatabaseConstructor {
    new(): StringDatabase
    from(state: State): StringDatabase
}

