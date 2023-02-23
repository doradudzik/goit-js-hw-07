import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
for (const image of galleryItems) {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<a class="gallery__item" href=" ${image.original}">
  <img
    class="gallery__image"
    src=" ${image.preview}"
    alt="${image.description}"
  />
</a>`
  );
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
