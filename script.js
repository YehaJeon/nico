// document.title = "nico"

// const title= document.getElementById("title")

// title.innerText = "goo"

//  console.log(title.innerText)

// const hellos = document.getElementsByClassName("hello")

// console.log(hellos)

// const title = document.getElementsByTagName("h1")

// const title = document.querySelector(".hello")

// console.log(title)


// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// window.addEventListener("resize", handleWindowResize)

const h1 = document.querySelector("div.hello:first-child h1");


// function handleTitleClick() {
//    const currentColor = h1.style.color;
//    let newColor;
//    if ( currentColor === "blue"){
//        newColor = "tomato";
//    }else {
//        newColor = "blue";
//    }
//    h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick)


function handleTitleClick() {
   if (h1.className === "clicked"){
       h1.className = "";
   }else {
       h1.className = "clicked";
   }
   
 }

 function handleTitleClick() {
    if (h1.className === ""){
        h1.className = "clicked";
    }else {
        h1.className = "";
    }
    
  }

 
  
 h1.addEventListener("click", handleTitleClick)



 function handleTitleClick() {
     const clickedClss = "clicked"
   if (h1.className === "clickedClss"){
       h1.className = "";
   }else {
       h1.className = "clickedClss";
   }
   
 }


 function handleTitleClick() {
    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)){
        
    }
    
 }