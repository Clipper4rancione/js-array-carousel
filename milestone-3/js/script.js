
//CONTENITORE IMMAGINI
const image = [
    'lake.jpg',
    'cyberpunk.jpg',
    'mountain-lake.jpg',
    'mushrooms.jpg',
    'mountain-snow.jpg'
];

//CONTENITORE IMMAGINI
const slider = document.querySelector('.img-wrapper');

let imgTags = '';
//CREO UN CICLO PER L'ARRAY E CREO UNA STRING PER LO SLIDER

for(let i = 0; i < image.length; i++){
    imgTags += `
        <img class="item" src="img/${image[i]}" alt="${image[i]}">
    `;
}

//AGGIUNGO I TAG ALLO SLIDER
slider.innerHTML += imgTags;

//CREO UN CONTATORE PER LE IMMAGINI
let counterImg = 0;

//SALVO GLI ITEM IN UNA COLLECTION
const items = document.getElementsByClassName('item');

//assegno la classe active al primo elemento deella collection
items[counterImg].classList.add('active')


//SELEZIONO I BOTTONI PER SWITCHARE TRA LE IMMAGINI
const next = document.querySelector('.down');
const prev = document.querySelector('.top');

prev.classList.add('hide');

next.addEventListener('click', function(){
    items[counterImg].classList.remove('active')
    counterImg++;
    items[counterImg].classList.add('active');

    prev.classList.remove('hide');
    if(counterImg === image.length - 1){
        next.classList.add('hide');
    }
})
prev.addEventListener('click', function(){
    items[counterImg].classList.remove('active')
    counterImg--;
    items[counterImg].classList.add('active');

    next.classList.remove('hide');
    if(counterImg === 0){
        prev.classList.add('hide');
    }
})
