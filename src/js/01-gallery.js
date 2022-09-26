
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


const gallery= document.querySelector(`.gallery`);
console.log(gallery);

const setGallery = galleryItems.forEach((element)=>{
 
  const listLink = document.createElement(`a`);
  const listImage= document.createElement(`img`);

  listLink.setAttribute(`href`, `${element.original}`);
  listLink.setAttribute(`class`, `gallery__item`);
  
  listImage.setAttribute(`alt`, `${element.description}`);
  listImage.setAttribute(`src`, `${element.preview}`);
  listImage.setAttribute(`class`, `gallery__image`);


gallery.append(listLink);
listLink.append(listImage);
});

let gallery2 = new SimpleLightbox('.gallery a',{captionsData:`alt`,captionDelay:250, swipeClose:true,});
gallery.on('show.simplelightbox', function () {
	
});


