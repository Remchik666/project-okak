import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { postFeedBack } from './soundwave-api';

let escapeKeyHandler = null;

function addEscapeKeyListener(instance) {
  escapeKeyHandler = function (e) {
    if (e.key === 'Escape') {
      instance.close();
    }
  };
  document.addEventListener('keydown', escapeKeyHandler);
}

function removeEscapeKeyListener() {
  if (escapeKeyHandler) {
    document.removeEventListener('keydown', escapeKeyHandler);
    escapeKeyHandler = null;
  }
}

document
  .querySelector('.feedback-container')
  .addEventListener('click', async e => {
    if (
      e.target.id === 'leaveFeedbackBtn' ||
      e.target.closest('#leaveFeedbackBtn')
    ) {
      const modalHtml = document.getElementById(
        'feedbackModalTemplate'
      ).innerHTML;

      const modalInstance = basicLightbox.create(modalHtml, {
        onShow: () => {
          document.body.classList.add('modal-open');
          addEscapeKeyListener(modalInstance);
        },
        onClose: () => {
          document.body.classList.remove('modal-open');
          removeEscapeKeyListener();
        },
      });

      modalInstance.show();

      setTimeout(() => {
        const modal = modalInstance.element();
        const closeBtn = modal.querySelector('#closeModalBtn');
        if (closeBtn) closeBtn.onclick = () => modalInstance.close();
        const ratingInputs = modal.querySelectorAll(
          'input[type="radio"][name="rating"]'
        );
        const hiddenInput = modal.querySelector('#ratingValue');
        const form = modal.querySelector('#feedbackForm');

        ratingInputs.forEach(input => {
          input.addEventListener('change', () => {
            hiddenInput.value = input.value;
          });
        });
        form.addEventListener('submit', async evt => {
          evt.preventDefault();
          form.classList.remove('was-validated');
          if (!form.checkValidity()) {
            form.classList.add('was-validated');
            iziToast.error({
              message: 'Please fill in all required fields.',
              position: 'topRight',
            });
            return;
          }
          const name = form.name.value.trim();
          const descr = form.descr.value.trim();
          const rating = parseFloat(hiddenInput.value);
          if (!rating || rating <= 0) {
            iziToast.error({
              message: 'Please select a rating.',
              position: 'topRight',
            });
            return;
          }

          try {
            const response = await postFeedBack(name, rating, descr);
            if (response) {
              iziToast.success({
                message: response.message || 'Thanks for your feedback!',
                position: 'topRight',
              });
              modalInstance.close();
            }
          } catch (error) {
            iziToast.error({
              message: `Error sending review. Try again later.\n${
                error.message || error
              }`,
              position: 'topRight',
            });
          }
        });
      }, 0);
    }
  });
