var Click = 0;
    let manipulatableGallery = document.querySelector(".S2")
    manipulatableGallery.addEventListener('click', () => {
        Click++
        if (Click === 0){     
                document.querySelector(".S1").src = "image/stroller1.jpg";
        }else if (Click === 1){
                Clicker = 2;
                document.querySelector(".S1").src = "image/stroller2.jpg";
        }else if (Click === 2){
                Clicker = 1;
                document.querySelector(".S1").src = "image/stroller3.jpg";
        }else if (Click === 3){
                Clicker = 0;
                document.querySelector(".S1").src = "image/stroller4.jpg";    
        }else{
            Click = 0;
            Clicker = 3;
            document.querySelector(".S1").src = "image/stroller1.jpg";

        }
    });
var Clicker = 4;
    let manipulatableGal = document.querySelector(".S3")
    manipulatableGal.addEventListener('click', () => {
        Clicker--
        if (Clicker === 0 || Clicker === 4){     
                Click = 3;
                document.querySelector(".S1").src = "image/stroller4.jpg";
        }else if (Clicker === 1){
                Click = 2;
                document.querySelector(".S1").src = "image/stroller3.jpg";
        }else if (Clicker === 2){
                Click = 1;
                document.querySelector(".S1").src = "image/stroller2.jpg";
        }else if (Clicker === 3){
                Click = 0;
                document.querySelector(".S1").src = "image/stroller1.jpg";
        }else{
                document.querySelector(".S1").src = "image/stroller4.jpg";
                Click = 3;
                Clicker = 4;
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
