var containerProperty= document.getElementsByClassName("container");

let imageEditor = document.getElementById("img-formater");

imageEditor = document.addEventListener("click", (containerProperty) =>{

    containerProperty.width = screen.width;
    
    console.log(containerProperty.width);

});