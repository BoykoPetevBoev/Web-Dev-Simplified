class Person {
    constructor(name, address, hobbies) {
        this.name = name
        this.address = address
        this.hobbies = hobbies
    }

    print() {
        console.log(this);
    }
}

function printPersonStreetBad(person) {
    if (person && person.address && person.address.street) {
        console.log('bad: ' + person.addres.street);
    }
}

function printPersonStreetGood(person) {
    console.log('good: ' + person?.addres?.street);
}

const boyko = new Person('Boyko', { street: 'here' }, ['hobbie1', 'hobbie2']);
const invalidPerson = new Person()

boyko.print();
boyko.printName?.()

printPersonStreetBad(invalidPerson)
printPersonStreetGood(invalidPerson)

console.log(invalidPerson?.hobbies?.[0]);