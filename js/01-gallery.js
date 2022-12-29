import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
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

const instance = basicLightbox.create(
  `
    <img src="#" class='image' width="800" height="600">
`,

  {
    onShow: (instance) => {
      document.addEventListener("keydown", onEscPress);
    },
    onClose: (instance) => {
      document.removeEventListener("keydown", onEscPress);
    },
  }
);

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryEl.addEventListener("click", onImgClick);

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  instance.show();
  setAttribute(event.target);
}

function setAttribute(currentImg) {
  const imgModalEl = document.querySelector(".image");
  const openedImageSrc = currentImg.getAttribute("src");
  imgModalEl.setAttribute("src", openedImageSrc);
}

function onEscPress(event) {
  if (event.key === "Escape") {
    instance.close();
  }
}
