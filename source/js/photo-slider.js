const SOURCES_OF_CAT_MALE_PHOTOS = ['img/black-cat-tablet.png 1x, img/black-cat-tablet@2x.png 2x','img/white-cat-tablet-active.jpg 1x, img/white-cat-tablet-active@2x.jpg 2x', 'img/brown-cat-tablet-active.png 1x, img/brown-cat-tablet-active@2x.png 2x']; 
const SOURCES_OF_CAT_FEMALE_PHOTOS = ['img/red-cat-tablet.jpg 1x, img/red-cat-tablet@2x.jpg 2x', 'img/white-female-cat-tablet-active.jpg 1x, img/white-female-cat-tablet-active@2x.jpg 2x', 'img/gray-cat-female-tablet-active.jpg 1x, img/gray-cat-female-tablet-active@2x.jpg']
const SOURCES_OF_KITTEN_PHOTOS = ['img/white-kitten-tablet.jpg 1x, img/white-kitten-tablet@2x.jpg 2x', 'img/red-kitten-tablet.jpg 1x, img/red-kitten-tablet@2x.jpg 2x', 'img/gray-kitten-tablet.jpg 1x, img/gray-kitten-tablet@2x.jpg 2x'];

const CatMalePhoto = {
    MOBILE_PHOTOS: ['img/black-cat-mobile.png', 'img/white-cat-mobile.jpg', 'img/brown-cat-mobile.png'],
    MOBILE_PHOTOS_RETINA: ['img/black-cat-mobile@2x.png 2x', 'img/white-cat-mobile@2x.jpg 2x' ,'img/brown-cat-mobile@2x.png 2x'],
    TABLET_PHOTOS: ['img/black-cat-tablet.png 1x, img/black-cat-tablet@2x.png 2x', 'img/white-cat-tablet.png 1x, img/white-cat-tablet@2x.png 2x', 'img/brown-cat-tablet.png 1x, img/brown-cat-tablet@2x.png 2x'],
    DESKTOP_PHOTOS: ['img/black-cat-desktop.png 1x, img/black-cat-desktop@2x.png 2x', 'img/white-cat-desktop.png 1x, img/white-cat-desktop@2x.png 2x', 'img/brown-cat-desktop.png 1x, img/brown-cat-desktop@2x.png 2x'],
    ALT_TEXT: ['Кот породы Мейн-Кун серого окраса', 'Кот породы Мейн-Кун белого окраса', 'Кот породы Мейн-Кун коричневого окраса'],
}

const CatFemalePhoto = {
    MOBILE_PHOTOS: ['img/red-cat-mobile.jpg', 'img/white-female-cat-mobile-active.jpg', 'img/gray-cat-female-mobile-active.jpg'],
    MOBILE_PHOTOS_RETINA:['img/red-cat-mobile@2x.jpg', 'img/white-female-cat-mobile-active@2x.jpg', 'img/gray-cat-female-mobile-active@2x.jpg'],
    TABLET_PHOTOS: ['img/red-cat-tablet.jpg 1x, img/red-cat-tablet@2x.jpg 2x','img/white-cat-tablet.png 1x, img/white-cat-tablet@2x.png 2x', 'img/brown-cat-tablet.png 1x, img/brown-cat-tablet@2x.png 2x'],
    DESKTOP_PHOTOS: ['img/red-cat-tablet.jpg 1x, img/red-cat-tablet@2x.jpg 2x', 'img/white-cat-female-desktop.jpg 1x, img/white-cat-female-desktop@2x.jpg 2x', 'img/gray-cat-female-desktop.jpg 1x, img/gray-cat-female-desktop@2x.jpg 2x'],
    ALT_TEXT: ['Кошка породы Мейн-Кун рыжего окраса', 'Кошка породы Мейн-Кун белого окраса', 'Кошка породы Мейн-кун коричневого окраса'],
    EXTRA_CLASS: ['pets-slider__photo-one--female', 'pets-slider__photo-two--female', 'pets-slider__photo-three--female'],
}

const kittensPhoto = {
    MOBILE_PHOTOS: ['img/white-kitten-mobile.jpg', 'img/red-kitten-mobile.jpg', 'img/gray-kitten-mobile.jpg'],
    MOBILE_PHOTOS_RETINA: ['img/white-kitten-mobile@2x.jpg', 'img/red-kitten-mobile@2x.jpg', 'img/gray-kitten-mobile@2x.jpg'],
    TABLET_PHOTOS: ['img/white-kitten-tablet.jpg 1x, img/white-kitten-tablet@2x.jpg 2x', 'img/white-cat-tablet.png 1x, img/white-cat-tablet@2x.png 2x', 'img/brown-cat-tablet.png 1x, img/brown-cat-tablet@2x.png 2x'],
    DESKTOP_PHOTOS: ['img/white-kitten-tablet.jpg 1x, img/white-kitten-tablet@2x.jpg 2x', 'img/red-kitten-desktop.jpg 1x, img/red-kitten-desktop@2x.jpg 2x', 'img/gray-kitten-desktop.jpg 1x, img/gray-kitten-desktop@2x.jpg 2x'],
    ALT_TEXT: ['Котенок породы Мейн-Кун белого окраса', 'Котенок породы Мейн-Кун рыжего окраса', 'Котенок породы Мейн-Кун серого окраса'],
    EXTRA_CLASS: ['pets-slider__photo-one--kitten', 'pets-slider__photo-two--kitten', 'pets-slider__photo-three--kitten']
}

// constants
const petSliderNextButton = document.querySelector('.pets-slider__button--next');
const petSliderPreviousButton = document.querySelector('.pets-slider__button--previous');
const typeOfCatButtons = document.querySelectorAll('.pet-types__button');
const catMaleButton = document.querySelector('.pet-types__button--cats-male');
const catFemaleButton = document.querySelector('.pet-types__button--cats-female');
const catKittenButton = document.querySelector('.pet-types__button--kittens');
const sliderPhotoWrapper = document.querySelector('.pets-slider__photos-wrapper');
catMaleButton.setAttribute('disabled', true);
const photoTemplate = document.querySelector('#photos').content;


const changeNextSmallPhoto = function() {
    const sliderPhotos = document.querySelectorAll('.pets-slider__photo');
    for(let i = 0; i < sliderPhotos.length - 1; i++) {
        if (sliderPhotos[i].classList.contains('pets-slider__photo--active')) {
            sliderPhotos[i].classList.remove('pets-slider__photo--active');
            sliderPhotos[i].classList.add('pets-slider__photo--non-active');
            sliderPhotos[i + 1].classList.remove('pets-slider__photo--non-active');
            sliderPhotos[i + 1].classList.add('pets-slider__photo--active');
            break 
        }
    }
}

const changeBackSmallPhoto = function () {
    const sliderPhotos = document.querySelectorAll('.pets-slider__photo');
    for (let i = 0; i < sliderPhotos.length; i++) {
        if (i > 0 && sliderPhotos[i].classList.contains('pets-slider__photo--active')) {
            sliderPhotos[i].classList.remove('pets-slider__photo--active');
            sliderPhotos[i].classList.add('pets-slider__photo--non-active');
            sliderPhotos[i - 1].classList.remove('pets-slider__photo--non-active');
            sliderPhotos[i - 1].classList.add('pets-slider__photo--active');
            break
        }
    }
}

const changeNextMiddlePhoto = function(array) {
    const tabletSliderPicture = document.querySelector('.pets-slider__photos-wrapper').querySelectorAll('picture')[0].querySelector('source[media="(min-width: 768px)"]')
    for (let i = 0; i < array.length - 1; i++) {
        if(tabletSliderPicture.getAttribute('srcset') === array[i]) {
            tabletSliderPicture.setAttribute('srcset', array[i + 1])
            break
        }
    }
}

const changeBackMiddlePhoto = function (array) {
    const tabletSliderPicture = document.querySelector('.pets-slider__photos-wrapper').querySelectorAll('picture')[0].querySelector('source[media="(min-width: 768px)"]')
    for (let i = 0; i < array.length; i++) {
        if (i > 0 && tabletSliderPicture.getAttribute('srcset') === array[i]) {
            tabletSliderPicture.setAttribute('srcset', array[i - 1])
            break
        }
    }
}

const removeDisabledFromButton = function() {
    for (let i = 0; i < typeOfCatButtons.length; i++) {
        if (typeOfCatButtons[i].hasAttribute('disabled')) {
            typeOfCatButtons[i].removeAttribute('disabled');
        }
    }
}

petSliderNextButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    changeNextSmallPhoto();
    if (catMaleButton.hasAttribute('disabled')) {
        changeNextMiddlePhoto(SOURCES_OF_CAT_MALE_PHOTOS);
    }
    else if (catFemaleButton.hasAttribute('disabled')) {
        changeNextMiddlePhoto(SOURCES_OF_CAT_FEMALE_PHOTOS);
    }
    else if (catKittenButton.hasAttribute('disabled')) {
        changeNextMiddlePhoto(SOURCES_OF_KITTEN_PHOTOS)
    }
})

petSliderPreviousButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    changeBackSmallPhoto();
    if (catMaleButton.hasAttribute('disabled')) {
        changeBackMiddlePhoto(SOURCES_OF_CAT_MALE_PHOTOS);
    }
    else if (catFemaleButton.hasAttribute('disabled')) {
        changeBackMiddlePhoto(SOURCES_OF_CAT_FEMALE_PHOTOS)
    }
    else if(catKittenButton.hasAttribute('disabled')) {
        changeBackMiddlePhoto(SOURCES_OF_KITTEN_PHOTOS);
    }
})

catMaleButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (!catMaleButton.hasAttribute('disabled')) {
        removeDisabledFromButton();    
        catMaleButton.setAttribute('disabled', true);
        sliderPhotoWrapper.innerHTML = "";
    }
    if (!sliderPhotoWrapper.innerHTML) {
        createPhotosForSlider(CatMalePhoto)
    }
})

catFemaleButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    removeDisabledFromButton();
    catFemaleButton.setAttribute('disabled', true);
    sliderPhotoWrapper.innerHTML = "";
    createPhotosForSlider(CatFemalePhoto);
})

catKittenButton.addEventListener('click', function(evt){
    evt.preventDefault();
    removeDisabledFromButton();
    catKittenButton.setAttribute('disabled', true);
    sliderPhotoWrapper.innerHTML = "";
    createPhotosForSlider(kittensPhoto);
})

const createPhotosForSlider = function(object) {
    const photoBlock = photoTemplate.cloneNode(true);
    const pictureTags = Array.from(photoBlock.querySelectorAll('picture'));
    pictureTags.forEach(function(_, element) {
        let imgTag = pictureTags[element].querySelector('img');
        imgTag.src = object.MOBILE_PHOTOS[element];
        imgTag.setAttribute('srcset', object.MOBILE_PHOTOS_RETINA[element])
        imgTag.setAttribute('alt', object.ALT_TEXT[element])
        let tabletSource = pictureTags[element].querySelector('source[media="(min-width: 768px)"]');
        tabletSource.setAttribute('srcset', object.TABLET_PHOTOS[element]);
        let desktopSource = pictureTags[element].querySelector('source[media="(min-width: 1366px)"]');
        desktopSource.setAttribute('srcset', object.DESKTOP_PHOTOS[element]);
        if (object.EXTRA_CLASS) {
            imgTag.classList.add(object.EXTRA_CLASS[element])
        }
    })
    sliderPhotoWrapper.appendChild(photoBlock);
}
