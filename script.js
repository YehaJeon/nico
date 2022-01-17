// const age = prompt("How old are you?")

// console.log(age, parseInt(age))


// console.log(typeof "15", typeof parseInt("15"))

const age = parseInt(prompt("How old are you"))

// console.log(isNaN(age))

if(isNaN(age)) {
    console.log("Please write a number");
} else { 
    console.log("Thank you for writing your age.");
}