import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryImage = document.querySelector('.gallery');
const imageMarkup = createImageCardsMarkup(galleryItems);

galleryImage.insertAdjacentHTML('beforeend', imageMarkup);

galleryImage.addEventListener('click', onGalleryImageClick);

function createImageCardsMarkup(galleryItems) {
return galleryItems
.map(({ preview, original, description }) =>
`
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`
).join('');
 }

function onGalleryImageClick(evt) {
    console.log(evt);
    // if (evt.target === evt.carrentTarget) {
    //     return
    // }
 }
