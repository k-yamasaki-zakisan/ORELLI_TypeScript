type Shoe = {
    purpose: String
}

class BalletFalt implements Shoe {
    purpose = 'dancing'
}

class Boot implements Shoe {
    purpose = 'wodcutting'
}

class Sneaker implements Shoe {
    purpose = 'walking'
}

type ShoeCreator = {
    create(type: 'balletFalt'): BalletFalt
    create(type: 'boot'): Boot
    create(type: 'sneaker'): Sneaker
}

let shoe: ShoeCreator = {
    create(type: 'balletFalt' | 'boot' | 'sneaker'): Shoe {
        switch (type) {
            case 'balletFalt':
                return new BalletFalt()
            case 'boot':
                return new Boot()
            case 'sneaker':
                return new Sneaker()
        }
    }
}

shoe.create('balletFalt')
shoe.create('boot')
shoe.create('sneaker')
