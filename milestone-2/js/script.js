
//CONTENITORE IMMAGINI
const image = [
    'lake.jpg',
    'mountain.jpg',
    'london.jpg',
    'casino.jpg',
    'sea.jpg'
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
