var Click = 0;
    let manipulatableGallery = document.querySelector(".S1")
    manipulatableGallery.addEventListener('click', (event) => {
        Click++
        if (Click === 0){     
                event.target.src = "image/stroller1.jpg";
        }else if (Click === 1){
                event.target.src = "image/stroller2.jpg";
        }else if (Click === 2){
                event.target.src = "image/stroller3.jpg";
        }else if (Click === 3){
                event.target.src = "image/stroller4.jpg";    
        }else{
            Click = 0;
            event.target.src = "image/stroller1.jpg";
        }
    });
cont = 1;
let gifmove = () =>{
        console.log (cont);
        cont++;
    if (cont === 2){
        document.querySelector(".strGif").src = "image/gif2.png";
}else if(cont === 3){
        document.querySelector(".strGif").src = "image/gif3.png";
        cont++;
}else {
        stopgif();
}
};

let giffy = setInterval(gifmove, 150);
let stopgif = () =>{
clearInterval(giffy);
}
