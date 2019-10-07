var Click = 0;
let manipulatableGallery = document.querySelector(".gallery")
manipulatableGallery.addEventListener('click', (event) => {
        if (Click = 0) {
                event.target.img.src = "../image/stroller1.jpg";
        } else if (Click = 1) {
                event.target.img.src = "../image/stroller2.jpg";
        } else if (Click = 2) {
                event.target.img.src = "../image/stroller3.jpg";
        } else {
                event.target.img.src = "../image/stroller4.jpg";

                Click = 0;
        }
});