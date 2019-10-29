let images = [];
images[0] = "./bild1.jpg"
images[1] = "./bild2.jpg"
images[2] = "./bild3.jpg"

let i = 0;

setInterval(bytBild, 2000, 0);


function bytBild() {
    document.bilder.src = images[i];

    if(i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
}