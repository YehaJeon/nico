const player = {
    name: "Yeha",
    age: "20",
}

console.log(player.age);

function plus(a,b) {
 console.log(a+b); 
};

plus(3,5);




const calculater = {
    
    add: function (a,b) { 
        console.log (a+b)
    },
    

};

calculater.add(3,4)  

console.log(calculater.add(3,4));



function add(a,b) {
    console.log(a+b)
};

add(4,3);



const player = {
    name: "Yeha",
    sayHello: function() {
        console.log()

    }
}

console.log(player.name) 
// -- yeha
player.sayHello();
// --?


// function sayhello (name) {
//     console.log("Hello " + name )
// };

// sayhello("nico")


const age = 96;

function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);