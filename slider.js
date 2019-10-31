
/**
 * Startar slider animation
 */

 let currentImageIndex = 0

function beginSliderAnimation() {
setInterval(changeImage, 3000, 0);
}

/**
 * Changes the opacity on current and next image
 */

function changeImage() {
    const images = document.querySelectorAll('.container img')
    images[currentImageIndex].style.opacity = 0

    currentImageIndex = (currentImageIndex + 1) % images.length


    //Detta var koden vi hade innan vi skrev det ovan med procent!!
    
    /*currentImageIndex++
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0
    }*/



    images[currentImageIndex].style.opacity = 1
    /*document.bilder.src = images[i];

    if(i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }*/
}