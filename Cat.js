const customization = document.getElementById('customization');
customization.addEventListener('click', runInput);
function runInput() {
    sizeInput();
    animationInput();
};

function sizeInput() {
    let sizeInput = document.querySelector('input[name="catSize"]:checked').value;
    switch(sizeInput) {
        case 'giantSizedCat':
            scaleCat(1.5);
            break;
        case 'regularSizedCat':
            scaleCat(1);
            break;
        case 'pocketSizedCat':
            scaleCat(.5);
            break;
    };
};
function scaleCat(catSize) {
    cat.style.transform = `scale(${catSize})`;
    cat.style.setProperty('--catScaleAnimation', `${catSize}`);
};

function animationInput() {
    let animationInput = document.querySelector('input[name="catAnimation"]:checked').value;
    switch(animationInput) {
        case 'none':
            pawsCat();
            break;
        case 'all':
            animateCat(20, 44);
            moveCat();
            break;  
        case 'leg1':
            animateCat(21, 26);
            break;  
        case 'leg2':
            animateCat(27, 29);
            break;  
        case 'leg3':
            animateCat(30, 35);
            break;  
        case 'leg4':
            animateCat(36, 38);
            break;  
        case 'tail':
            animateCat(39, 44);
            break;
    };
}; 

const piece = document.querySelectorAll('.piece');
const cat = document.getElementById('cat');

// reference for pieces leg1=21-26 leg2=27-29 leg3=30-35 leg4=36-38 tail=39-44
function animateCat(startPiece, endPiece) {
    pawsCat();
    startPiece -= 1;
    endPiece -=1;
    for (let i = startPiece; i <= endPiece; i++) {
        piece[i].style.animation = '';
    };
};
function moveCat() {
    cat.style.animation = '';
};
function pawsCat() {
    for (let i = 20; i < 44; i++) {
        piece[i].style.animation = 'paused';
        cat.style.animation = 'paused';
    };
};
pawsCat();

function addSolidPiece() {
    for (let i = 0; i < 44; i++) {
        setTimeout(() => {
            piece[i].classList.add('solidPiece');
        },500 + (500 * i));
    };
};

let pickBorderColor = document.getElementById('pickBorderColor');
pickBorderColor.addEventListener('input', changeBorderColor);
function changeBorderColor() {
    document.documentElement.style.setProperty('--shadow', `${pickBorderColor.value}`);
};
let pickMainColor = document.getElementById('pickMainColor');
pickMainColor.addEventListener('input', changeMainColor);
function changeMainColor() {
    document.documentElement.style.setProperty('--solidPieceColor', `${pickMainColor.value}`);
};

let customizeBtn = document.getElementById('customizeBtn');
customization.style.display = 'none';
function showCustomization() {
    let customizationDisplay = customization.style.display;
    customization.style.display = (customizationDisplay == 'none')? 'block' : 'none';
    let hide = customizeBtn.innerHTML;
    customizeBtn.innerHTML = (hide == 'Customize meow')? 'Hide meow' : 'Customize meow';
};

let meow = document.getElementById('meow');
function sayMeow() {
    meow.classList.toggle('animateMeow');
    setTimeout(() => {
        if (meow.classList.contains('animateMeow')) {
            meow.classList.remove('animateMeow');
        };   
    }, 2000);
};




function resetPosition() {
    for (let i = 20; i < 44; i++) {
        piece[i].style.left = '0px';
        piece[i].style.top = '0px';
    };
};
