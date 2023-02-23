import { fillUserComments, removeLoadingButtonClickHandler } from './big-picture-comment.js';
import { addBigPictureHandlers } from './big-picture-listeners.js';

const bigPicture = document.querySelector('.big-picture');
const image = bigPicture.querySelector('.big-picture__img img');
const descriptionContainer = bigPicture.querySelector('.social__caption');
const likesContainer = bigPicture.querySelector('.likes-count');

const fillBigPicture = ({ url, description, likes, comments }) => {
  image.src = url;
  descriptionContainer.textContent = description;
  likesContainer.textContent = likes;

  fillUserComments(comments, 5, 5);
};

export const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  removeLoadingButtonClickHandler();
};

export const openBigPicture = (photoData) => {
  fillBigPicture(photoData);
  addBigPictureHandlers();

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
};