interface Person {
    fullName : string
    age : number
    email : string
    single? : boolean
}

let jd : Person = {
    fullName: "John Doe",
    age: 28,
    email: "jdoe@example.com",
    single: false
}

let jane : Person = {
    fullName: "Jane Smith",
    age: 20,
    email: "jane@example.com"
}

function showPerson(p : Person) {
    console.log("Name: " + p.fullName)
    console.log("Email: " + p.email)
    console.log("Age: " + p.age + " years old")
    console.log("Single?: " + (p.single !== undefined ? p.single : "unknown"))
}

showPerson(jd)
showPerson(jane)