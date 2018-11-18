let imagesList = ['./images/moto1.jpg','./images/moto2.jpg','./images/moto3.png','./images/moto4.jpg','./images/moto5.jpg','./images/moto6.jpg'];
let active = 0;
let time = 3000;
let imgHtml = document.querySelector('.images-slide');
let leftButton = document.querySelector('.leftButton');
let rightButton = document.querySelector('.rightButton');

function displayImages(){
    let i = 0, length = imagesList.length;
    for (; i < length; i++) {
        let img = new Image();
        img.src = imagesList[i];
        img.style.width = '180px';
        img.style.height = '120px';
        document.getElementById('image-list').appendChild(img);
    }
}

function slideSlide(){
    imgHtml.src = imagesList[active];
    active++;
    if (active === (imagesList.length-1)) {
        active = 0;
    }
    setTimeout(slideSlide, time)
}

leftButton.onclick = function (){
    active--;
    if (active >= (imagesList.length)) {
        active = 0;
    } else if (active === 0 ) {
        active = imagesList.length - 1;
    }
    console.log("Left button: " + active);
    imgHtml.src = imagesList[active];
}

rightButton.onclick = function (){
    active++;
    if (active === 0) {
        active = (imagesList.length-1);
    } else if (active >= imagesList.length-1 ) {
        active = 0;    
    }
    console.log("Right button: " + active);
    imgHtml.src = imagesList[active];
}

displayImages();
slideSlide();