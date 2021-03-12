// --------------------------------------
// Objects, Arrays, Enum, Tuple

// Defining an object
const person: object = {
    name: "Umar",
    age: 20,
}

// Defining an object with strict typed
const person2: {
    name: string,
    age: number,
    hobbies: string[] //can store only strings in array
    role: [number, string] //Tuple = Fixed-length array
} = {
    name: "Honey",
    age: 18,
    hobbies: ["gardening", 'cricket'],
    role: [2, "Admin"]
}


// enum
// enum becomes index; easy to remember indexes 
// we can do Admin = 5, and then indexes would start from 5
enum Role { Admin, Editor, Author }

// Defining an object with enum values inside
const person3: {
    name: string,
    age: number,
    hobbies: string[] //can store only strings in array
    role: Role //Tuple = Fixed-length array
} = {
    name: "Irfan",
    age: 18,
    hobbies: ["gardening", 'cricket'],
    role: Role.Editor
}

console.log(person3.role)
