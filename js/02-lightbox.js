import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" 
    href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryEl.addEventListener("click", onImgClick);

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const gallery = new SimpleLightbox(".gallery a");
}
