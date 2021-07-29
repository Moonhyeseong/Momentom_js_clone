const body = document.querySelector('body');
const images = ['1.jpg', '2.jpg', '3.jpg'];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement('img'); //img html 요소 생성
body.style.backgroundImage = 'url(img/' + chosenImages + ')';
// bgimage.src = 'img/' + chosenImages;
// document.body.appendChild(bgimage);
