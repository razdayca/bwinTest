document.querySelector('#button__start').addEventListener('click', () => console.log('Button clicked'));
const closePopUp = document.querySelector('#popup__close');
const openPopUp = document.querySelector('#open__popup');
const popup = document.querySelector('#popup');


openPopUp.addEventListener('click', (e) => { 
    e.preventDefault();
    popup.classList.add('open'); 
});

closePopUp.addEventListener('click', (e) => { 
    e.preventDefault();
    popup.classList.remove('open'); 
});