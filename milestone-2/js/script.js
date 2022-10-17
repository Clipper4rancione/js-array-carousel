
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

//SALVO GLI ITEM IN UNA COLLECTION
const items = document.getElementsByClassName('item');
//SELEZIONO I BOTTONI PER SWITCHARE TRA LE IMMAGINI
const next = document.querySelector('.down');
const prev = document.querySelector('.top');

let counterImg = 0;

//assegno la classe active al primo elemento deella collection
items[counterImg].classList.add('active')

next.addEventListener('click', function(){
    
})