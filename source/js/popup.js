const wool = document.querySelector('.care-list__item-button--wool');
const woolSection = document.querySelector('.wool')
const woolCloseButton = woolSection.querySelector('.wool__close-button');
const clutches = document.querySelector('.care-list__item-button--clutches');
const clutchesSection = document.querySelector('.clutches');
const clutchesCloseButton = clutchesSection.querySelector('.clutches__close-button');
const earsButton = document.querySelector('.care-list__item-button--eyes-ears');
const earsSection = document.querySelector('.eyes-ears');
const earsCloseButton = earsSection.querySelector('.eyes-ears__close-button');
const foodButton = document.querySelector('.care-list__item-button--food');
const foodSection = document.querySelector('.food');
const foodButtonClose = foodSection.querySelector('.food__close-button');

const answerButtons = document.querySelectorAll('.faq-list__button');
const answerWrapper = document.querySelectorAll('.faq-list__wrapper');

wool.addEventListener('click', function() {
    if (woolSection.classList.contains('visually-hidden')) {
        woolSection.classList.remove('visually-hidden');
    }
})

woolCloseButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    woolSection.classList.add('visually-hidden');
})

clutches.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (clutchesSection.classList.contains('visually-hidden')) {
        clutchesSection.classList.remove('visually-hidden')
    }
})

clutchesCloseButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    clutchesSection.classList.add('visually-hidden');    
})

earsButton.addEventListener('click', function() {
    if (earsSection.classList.contains('visually-hidden')) {
        earsSection.classList.remove('visually-hidden');
    }
})

earsCloseButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    earsSection.classList.add('visually-hidden');    
})

foodButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (foodSection.classList.contains('visually-hidden')) {
        foodSection.classList.remove('visually-hidden')
    }
})

foodButtonClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    foodSection.classList.add('visually-hidden');
})

for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        if (answerButtons[i].classList.contains('faq-list__button--clicked') &&  !answerWrapper[i].classList.contains('visually-hidden')) {
            answerButtons[i].classList.remove('faq-list__button--clicked');
            answerWrapper[i].classList.add('visually-hidden');
        }
        else {
            answerButtons[i].classList.add('faq-list__button--clicked');
            answerWrapper[i].classList.remove('visually-hidden');
        }
    })
}