
console.log("merci");

// Objet contenant les fuctions listeners
var listenerFuction ={
    h2Click: function (event){
    },
    background: function(){
        if(this && this.style.backgroundColor == "red"){
            this.style.backgroundColor = "green"
            this.style.color= "white"
            this.style.border= "3px solid blue"
            this.style.borderRadius = "20px"
            this.style.cursor = "pointer"
            this.style.fontSize = "1.4rem"
        }else{
            this.style.backgroundColor = "red"
            
        }
    }
}






// Mise en place les abonnements
var setupListeners = ()=>{
    var h2 = document.querySelector("section#html h2")
    h2.addEventListener("click", listenerFuction.h2Click)// OU h2.onclick = listenerFuction.h2Click
}

// CIBLER les sections
var section = document.getElementsByClassName("section")

for (let index = 0; index < section.length; index++) {
    const sections = section[index];
    sections.addEventListener('click', listenerFuction.background)
    // ou section.onclick = listenerFuction.background
    
}

