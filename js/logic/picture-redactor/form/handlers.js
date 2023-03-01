import { closePictureRedactor } from '../picture-redactor.js';
import { validator } from './validate.js';
import { sendPhotoData } from '../../../api/sendPhotoData.js';
import { openSuccessMessage } from '../success-message/index.js';

const pictureRedactorForm = document.querySelector('.img-upload__form');
const submittingButton = pictureRedactorForm.querySelector('.img-upload__submit');

const pictureRedactorFormSubmitHandler = (event) => {
  event.preventDefault();

  if (validator.validate()) {
    const data = new FormData(pictureRedactorForm);
    submittingButton.disabled = true;
    sendPhotoData(data)
      .then(() => {
        closePictureRedactor();
        openSuccessMessage();
      })
      .catch(() => {
        closePictureRedactor(false);
      })
      .finally(() => {
        submittingButton.disabled = false;
      });
  }
};

export const addPictureRedactorValidateHandler = () => {
  pictureRedactorForm.addEventListener('submit', pictureRedactorFormSubmitHandler);
};

export const removePictureRedactorValidateHandler = () => {
  pictureRedactorForm.removeEventListener('submit', pictureRedactorFormSubmitHandler);
  validator.reset();
};