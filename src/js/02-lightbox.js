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
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`
).join('');
 }

function onGalleryImageClick(evt) {
    evt.preventDefault();
    if (evt.target === evt.carrentTarget) {
        return;
    }
    const carrentImage = evt.target.closest('.gallery__image');
    console.log(carrentImage.dataset.source); 

    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
});
}
