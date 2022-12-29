import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
  })
  .join("");

const instance = basicLightbox.create(`
    <img src="#" class='image' width="800" height="600">
`);

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);
gallery.addEventListener("click", onImgClick);

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  instance.show();
  const image = document.querySelector(".image");

  const modalImg = event.target.getAttribute("src");
  image.setAttribute("src", modalImg);
}

if (instance.visible) {
  window.addEventListener("keydown", onEscPress);
}
function onEscPress(event) {
  if (event.key === "Escape") {
    instance.close();
  }
}
