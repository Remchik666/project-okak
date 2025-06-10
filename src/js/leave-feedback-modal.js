import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

let escapeKeyHandler = null; // хранит ссылку на обработчик, чтобы можно было удалить

function addEscapeKeyListener(instance) {
  escapeKeyHandler = function (e) {
    if (e.key === 'Escape') {
      instance.close(); // закрываем модалку
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

document.getElementById('openModalBtn').addEventListener('click', () => {
  const modalHtml = document.getElementById('feedbackModalTemplate').innerHTML;

  const modalInstance = basicLightbox.create(modalHtml, {
    onShow: () => {
      document.body.classList.add('modal-open');
      addEscapeKeyListener(modalInstance); // добавить слушатель
    },
    onClose: () => {
      document.body.classList.remove('modal-open');
      removeEscapeKeyListener(); // удалить слушатель
    },
  });

  modalInstance.show();

  setTimeout(() => {
    const modal = modalInstance.element();
    const closeBtn = modal.querySelector('#closeModalBtn');
    if (closeBtn) closeBtn.onclick = () => modalInstance.close();

    const ratingInputs = modal.querySelectorAll('input[name="rating"]');
    const hiddenInput = modal.querySelector('#ratingValue');

    ratingInputs.forEach(input => {
      input.addEventListener('change', () => {
        hiddenInput.value = input.value;
        console.log('Рейтинг выбран:', input.value);
      });
    });
  }, 0);
});

// пример проверки валидации для бордеров формы - цсс написан, джаву подтесать.
// document
//   .getElementById('feedbackForm')
//   .addEventListener('submit', function (e) {
//     if (!e.target.checkValidity()) {
//       e.preventDefault();
//       e.target.classList.add('was-validated');
//     }
//   });