const teamButtonNext = document.querySelector('.team-photos__button-next');
const teamButtonBack = document.querySelector('.team-photos__button-previous');
const teamPhotoBlock = document.querySelector('.team-photos');
const teamInfoBlock = document.querySelector('.team-info');

const TeamPhoto = {
    MOBILE_PHOTOS: ['img/CEO.jpg', 'img/vet.jpg'],
    MOBILE_PHOTOS_RETINA: ['img/CEO@2x.jpg 2x', 'img/vet@2x.jpg 2x'],
    TABLET_PHOTOS: ['img/CEO-tablet.jpg 1x, img/CEO-tablet@2x.jpg 2x', 'img/vet-tablet.jpg 1x, img/vet-tablet@2x.jpg 2x'],
    DESKTOP_PHOTOS: ['img/CEO-desktop.jpg 1x, img/CEO-desktop@2x.jpg 2x', 'img/vet-desktop.jpg 1x, img/vet-desktop@2x.jpg 2x'],
}

const teamInformation = {
    NAME: ['Серёжа Попов', 'Наталья Афонина'],
    POSITION: ['Основатель питомника', 'Ветеринарный врач питомника'],
    COMMENTS: [document.querySelector('.team-info__position-comment').cloneNode(true).innerHTML, 'Все питомцы нашего питомника проходят своевременные обследования, вакцинированы и абсолютно здоровы']
}

teamButtonNext.addEventListener('click', function(evt) {
    evt.preventDefault();
    for (let i = 0; i < TeamPhoto.MOBILE_PHOTOS.length - 1; i++) {
        if (teamPhotoBlock.querySelector('.team-photos__image').src.includes(TeamPhoto.MOBILE_PHOTOS[i])) {
            teamPhotoBlock.querySelector('.team-photos__image').src = TeamPhoto.MOBILE_PHOTOS[i + 1];
            teamPhotoBlock.querySelector('.team-photos__image').setAttribute('srcset', TeamPhoto.MOBILE_PHOTOS_RETINA[i + 1]);
            teamPhotoBlock.querySelector('source[media="(min-width: 768px)"]').setAttribute('srcset', TeamPhoto.TABLET_PHOTOS[i + 1]);
            teamPhotoBlock.querySelector('source[media="(min-width: 1366px)"]').setAttribute('srcset', TeamPhoto.DESKTOP_PHOTOS[i + 1]);
            teamInfoBlock.querySelector('.team-info__name').textContent = teamInformation.NAME[i + 1];
            teamInfoBlock.querySelector('.team-info__position').textContent = teamInformation.POSITION[i + 1];
            teamInfoBlock.querySelector('.team-info__position-comment').textContent = teamInformation.COMMENTS[i + 1];
            break
        }   
    }
})

teamButtonBack.addEventListener('click', function(evt) {
    evt.preventDefault();
    for (let i = 0; i < TeamPhoto.MOBILE_PHOTOS.length; i++) {
        if (i > 0 && teamPhotoBlock.querySelector('.team-photos__image').src.includes(TeamPhoto.MOBILE_PHOTOS[i])) {
            teamPhotoBlock.querySelector('.team-photos__image').src = TeamPhoto.MOBILE_PHOTOS[i - 1];
            teamPhotoBlock.querySelector('.team-photos__image').setAttribute('srcset', TeamPhoto.MOBILE_PHOTOS_RETINA[i - 1]);
            teamPhotoBlock.querySelector('source[media="(min-width: 768px)"]').setAttribute('srcset', TeamPhoto.TABLET_PHOTOS[i - 1]);
            teamPhotoBlock.querySelector('source[media="(min-width: 1366px)"]').setAttribute('srcset', TeamPhoto.DESKTOP_PHOTOS[i - 1]);
            teamInfoBlock.querySelector('.team-info__name').textContent = teamInformation.NAME[i - 1];
            teamInfoBlock.querySelector('.team-info__position').textContent = teamInformation.POSITION[i - 1];
            if (i === 1) {
                teamInfoBlock.querySelector('.team-info__position-comment').innerHTML = teamInformation.COMMENTS[i - 1];
            }
            else {
                teamInfoBlock.querySelector('.team-info__position-comment').textContent = teamInformation.COMMENTS[i - 1];
            }
            break
        }
    }
})

const reviewsPhotoBlock = document.querySelector('.reviews-photos');
const reviewsInfoBlock = document.querySelector('.reviews-info');
const reviewsNextButton = document.querySelector('.reviews-photos__button-next');
const reviewsPreviousButton = document.querySelector('.reviews-photos__button-previous');

const reviewsPhoto = {
    MOBILE_PHOTOS: ['img/buyer-photo.png', 'img/second-buyer.jpg'],
    MOBILE_PHOTOS_RETINA: ['img/buyer-photo@2x.png 2x', 'img/second-buyer@2x.jpg 2x'],
    TABLET_PHOTOS: ['img/buyer-photo-tablet.png 1x, img/buyer-photo-tablet@2x.png 2x', 'img/second-buyer-tablet.jpg 1x, img/second-buyer-tablet@2x.jpg 2x'],
    DESKTOP_PHOTOS: ['img/buyer-photo-desktop.png 1x, img/buyer-photo-desktop@2x.png 2x', 'img/second-buyer-desktop.jpg 1x, img/second-buyer-desktop@2x.jpg 2x'], 
}

const reviewsInformation = {
    NAME: ['Серёжа Попов', 'Гена Бобков'],
    COMMENTS: [reviewsInfoBlock.querySelector('.reviews-info__text').cloneNode(true).innerHTML, 'Купили котенка в 2019 году. По паспорту Юлиус, назвали Василием. Вымахал в большого бело-рыжего котищу. Любит детей, побаивается меня, и вечно кусает жену, которая его кормит. Корм используем по совету сотрудников питомника'],
    DATE: [reviewsInfoBlock.querySelector('.reviews-contacts-list__date').cloneNode(true).textContent, '1 августа 2019'],
    DATETIME: [reviewsInfoBlock.querySelector('.reviews-contacts-list__date').cloneNode(true).getAttribute('datetime'), '2019-08-01'],
}

console.log(reviewsInformation.DATETIME[0])


reviewsNextButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    for (let i = 0; i < reviewsPhoto.MOBILE_PHOTOS.length - 1; i++) {
        if (reviewsPhotoBlock.querySelector('.reviews-photos__buyer').src.includes(reviewsPhoto.MOBILE_PHOTOS[i])) {
            reviewsPhotoBlock.querySelector('.reviews-photos__buyer').src = reviewsPhoto.MOBILE_PHOTOS[i + 1];
            reviewsPhotoBlock.querySelector('.reviews-photos__buyer').setAttribute('srcset', reviewsPhoto.MOBILE_PHOTOS_RETINA[i + 1]);
            reviewsPhotoBlock.querySelector('source[media="(min-width: 768px)"]').setAttribute('srcset', reviewsPhoto.TABLET_PHOTOS[i + 1]);
            reviewsPhotoBlock.querySelector('source[media="(min-width: 1366px)"]').setAttribute('srcset', reviewsPhoto.DESKTOP_PHOTOS[i + 1]);
            reviewsInfoBlock.querySelector('.reviews-info__name').textContent = reviewsInformation.NAME[i + 1];
            reviewsInfoBlock.querySelector('.reviews-info__text').textContent = reviewsInformation.COMMENTS[i + 1];
            reviewsInfoBlock.querySelector('.reviews-contacts-list__date').textContent = reviewsInformation.DATE[i + 1];
        }
    }
    console.log('Вперед');
})

reviewsPreviousButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    for (let i = 0; i < reviewsPhoto.MOBILE_PHOTOS.length; i++) {
        if (i > 0 && reviewsPhotoBlock.querySelector('.reviews-photos__buyer').src.includes(reviewsPhoto.MOBILE_PHOTOS[i])) {
            reviewsPhotoBlock.querySelector('.reviews-photos__buyer').src = reviewsPhoto.MOBILE_PHOTOS[i - 1];
            reviewsPhotoBlock.querySelector('.reviews-photos__buyer').setAttribute('srcset', reviewsPhoto.MOBILE_PHOTOS_RETINA[i - 1]);
            reviewsPhotoBlock.querySelector('source[media="(min-width: 768px)"]').setAttribute('srcset', reviewsPhoto.TABLET_PHOTOS[i - 1]);
            reviewsPhotoBlock.querySelector('source[media="(min-width: 1366px)"]').setAttribute('srcset', reviewsPhoto.DESKTOP_PHOTOS[i - 1]);
            reviewsInfoBlock.querySelector('.reviews-info__name').textContent = reviewsInformation.NAME[i - 1];
            reviewsInfoBlock.querySelector('.reviews-contacts-list__date').textContent = reviewsInformation.DATE[i - 1];
            if (i === 1) {
                reviewsInfoBlock.querySelector('.reviews-info__text').innerHTML = reviewsInformation.COMMENTS[i - 1];
            }
            else {
                reviewsInfoBlock.querySelector('.reviews-info__text').textContent = reviewsInformation.COMMENTS[i - 1];
            }
        }
    }
    console.log('Назад');
})

