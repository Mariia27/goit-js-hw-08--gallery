import galleryItems from './gallery-items.js'
{/* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li> */}
// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, 
//чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.


const createPictureCollage = document.querySelector('.js-gallery');
createPictureCollage.addEventListener('click', onРhotoClic);
const parentCardImage = document.querySelector('.js-lightbox');
parentCardImage.addEventListener('click', addClassOnModal)
const closeButton = document.querySelector('.lightbox__button')
closeButton.addEventListener('click', closeModalOnClick);
const overlayEl = document.querySelector('.lightbox__overlay');
const modalOpenImage = document.querySelector('.lightbox__image');


const cardsMurcup = createCards(galleryItems);
 createPictureCollage.insertAdjacentHTML('beforeend', cardsMurcup)
 function createCards(gelleryItems) {
  return gelleryItems
    .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}}"
    />
  </a>
</li>
  `;
  })
    .join('');
 
}

 
function onРhotoClic(evt) {
  evt.preventDefault();
  const containClassName = evt.target.classList.contains('gallery__image');
   if (!containClassName) {
     return;
   }
  addClassOnModal(parentCardImage);
  modalOpenImage.src = evt.target.dataset.source;
  modalOpenImage.alt = evt.target.alt;

  closeModalOnClick(closeButton);
  closeModalOnClick(overlayEl);
}


//parentCardImage.classList.remove('.is-open');
 function addClassOnModal() {
   parentCardImage.classList.add('is-open');
   return addClassOnModal
 }
function removeClassOnModal() {
  parentCardImage.classList.remove('is-open');
  modalOpenImage.src = "";
  modalOpenImage.alt = '';
}
function closeModalOnClick() {
  parentCardImage.addEventListener('click', removeClassOnModal)
  return closeModalOnClick
  
}