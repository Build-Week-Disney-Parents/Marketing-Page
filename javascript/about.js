let imgArray = [];

imgArray = new Image();
imgArray[0] = "/images/stephanie.jpg";

imgArray = new Image();
imgArray[1] = "/images/leon.jpg";

imgArray = new Image();
imgArray[2] = "/images/trevor.jpg";

imgArray = new Image();
imgArray[3] = "/images/aaron.jpg";

let imageEditor = document.querySelector(".img-formater");

let index = 0;

console.log(imageEditor);

imageEditor = document.addEventListener("click", (imageProperty) =>{

    if(index < 3)
    {
        ++index;
    }
    else {
        index = 0;
    }
    
    imageProperty.src = imgArray[index];

    //console.log(imgArray);

    console.log(imageProperty);

});