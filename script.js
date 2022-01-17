// const age = prompt("How old are you?")

// console.log(age, parseInt(age))


// console.log(typeof "15", typeof parseInt("15"))

const age = parseInt(prompt("How old are you"))

// console.log(isNaN(age))

if(isNaN(age)) {
    console.log("Please write a number");
} else if (age < 18 ) { 
    console.log("you are too young.");
} else if ( age >=18 && age <= 50 ) {
    console.log("you can drink.")
} else if ( age > 50 ) {
    console.log("you can't drink")
}