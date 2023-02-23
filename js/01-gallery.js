import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
for (const image of galleryItems) {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item">
    <a class="gallery__link" href=" ${image.original}">
      <img
        class="gallery__image"
        src=" ${image.preview}"
        data-source=" ${image.original}"
        alt="${image.description}"
      />
    </a>
  </div>`
  );
}

gallery.addEventListener("click", clickOnImage);

function clickOnImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src=" ${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  gallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
