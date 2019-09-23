var containerProperty= document.getElementsByClassName("container");

var footerContainer = document.addEventListener("mouseover", (containerProperty) =>{

    containerProperty.width = screen.width;
    
    console.log(containerProperty.width);

});