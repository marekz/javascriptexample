let element = document.querySelectorAll('.img');
let slide = document.querySelector('.slide');
let timer = 3000;
let leftButton = document.querySelector('.leftButton');
let rightButton = document.querySelector('.rightButton');
let galleryBlock = document.querySelector('contentGallery');

let activeImg = 0;

for(let i = 0; i < element.length; i++ ) {
    element[i].addEventListener('click', addNewClass);
}

function addNewClass(e){   
    e.target.classList.add("MyClass");
    console.log(e.target.src);
    document.querySelector('.picture').src = e.target.src;
}

function runSlider () {
    slide.src = element[activeImg].src;
    if(activeImg === element.length - 1) {
        activeImg = 0;
    } else {
        activeImg++;
    }
    setTimeout(runSlider, timer);
}

leftButton.onclick = function() {
    console.log("Left button");
    activeImg--;
    if (activeImg >= element.length) {
        activeImg = 0;
    } else if (activeImg <= 0) {
        activeImg = element.length - 1;
    }
    console.log(activeImg);
    slide.src = element[activeImg].src;
}

rightButton.onclick = function() {
    console.log("Right button");
    activeImg++;
    if (activeImg >= element.length - 1) {
        activeImg = 0;
    } else if (activeImg <= 0) {
        activeImg = element.length - 1;
    }
    console.log(activeImg);
    slide.src = element[activeImg].src;
}

runSlider();

function hideAll(){
    element.forEach(el => {
        console.log(el);
        el.classList.add("hide");
    });
}

function displayAll() {element.forEach(el => {
        console.log("Display all");
        el.classList.remove("hide");
    })
}

function hideNoAlt(){
    element.forEach(el => {
        console.log(el.alt);
        if(!el.alt) {
            el.classList.add("hide");
        }
    });
}