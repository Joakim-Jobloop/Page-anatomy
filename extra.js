console.log ("Hello World")

let firstName = "John"

console.log (firstName)

let lastName = "Doe"

console.log (lastName)

// let fullName = firstName + " " + lastName
let fullName = `my name is ${firstName} ${lastName}`

console.log (fullName)

let randomNumber = Math.random() * 10
let roundedNumber = Math.round(randomNumber)

console.log (randomNumber)
console.log (roundedNumber)

if (roundedNumber > 5) {
    console.log ("The number is greater than 5")
} else {
    console.log ("The number is less than 5")
}

let fruits = ["apple", "banana", "orange", "pear"]

console.log (fruits)

for (let i = 0; i < fruits.length; i++) {
    console.log (fruits[i])
}

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    address: {
        street: "Main Street",
        number: 123
    }
}

console.log (person)

console.log (person.firstName)
console.log (person.lastName)
console.log (person.age)
console.log (person.address.street)
console.log (person.address.number)


