import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const iconBaseUrl = `${import.meta.env.BASE_URL}icons.svg`;

export function createFeedBack(feedBacks) {
  const feedBackMarkup = feedBacks
    .map(({ _id, name, rating, descr }) => {
      const roundedRating = Math.round(rating * 2) / 2;
      const starsMarkup = Array.from({ length: 5 })
        .map((_, i) => {
          const starFill = Math.min(Math.max(roundedRating - i, 0), 1);
          const fillPercent = starFill * 100;
          return `
      <span class="star-container" style="position: relative; width: 20px; height: 20px; display: inline-block;">
        <svg class="star star--empty" width="20" height="20" style="position: absolute; top: 0; left: 0;">
          <use href="${iconBaseUrl}#star" fill="#fff"></use>
        </svg>
        <div class="star-fill-wrapper" style="width: ${fillPercent}%; height: 20px; overflow: hidden; position: absolute; top: 0; left: 0;">
          <svg class="star star--filled" width="20" height="20">
            <use href="${iconBaseUrl}#star" fill="#764191"></use>
          </svg>
        </div>
      </span>`;
        })
        .join('');
      return `
      <div class="swiper-slide" data-id="${_id}">
        <div class="star-rating">${starsMarkup}</div>
        <p class="feedback-descr">${descr}</p>
        <p class="feedback-name">${name}</p>
      </div>`;
    })
    .join('');

  const markup = `
    <div class="swiper modal-product__slider">
      <div class="custom-swiper-button-prev">
        <svg class="swiper-nav-icon" width="24" height="24">
          <use href="${iconBaseUrl}#icon-left-arrow-alt"></use>
        </svg>
      </div>
      <div class="swiper-wrapper">
        ${feedBackMarkup}
      </div>
      <div class="custom-swiper-button-next">
        <svg class="swiper-nav-icon" width="24" height="24">
          <use href="${iconBaseUrl}#icon-right-arrow-alt"></use>
        </svg>
      </div>
      <div class="swiper-pagination custom-pagination"></div>
    </div>
    <div class="btn-container">
        <button class="feedback-btn" id="leaveFeedbackBtn">Leave feedback</button>
    </div>
  `;

  const container = document.querySelector('.feedback-container');
  container.innerHTML = markup;

  new Swiper('.modal-product__slider', {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.custom-swiper-button-next',
      prevEl: '.custom-swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
      renderBullet: function (index, className) {
        if (index < 3) {
          return `<span class="${className}" data-bullet="${index}"></span>`;
        }
        return '';
      },
    },
    on: {
      slideChange: function (swiper) {
        const bullets = document.querySelectorAll('.swiper-pagination span');
        bullets.forEach(b =>
          b.classList.remove('swiper-pagination-bullet-active')
        );

        const activeIndex = swiper.activeIndex;
        const total = swiper.slides.length;

        if (activeIndex === 0) {
          bullets[0].classList.add('swiper-pagination-bullet-active');
        } else if (activeIndex === total - 1) {
          bullets[2].classList.add('swiper-pagination-bullet-active');
        } else {
          bullets[1].classList.add('swiper-pagination-bullet-active');
        }

        const prevBtn = document.querySelector('.custom-swiper-button-prev');
        const nextBtn = document.querySelector('.custom-swiper-button-next');

        prevBtn.classList.toggle('disabled', activeIndex === 0);
        nextBtn.classList.toggle('disabled', activeIndex === total - 1);
      },
    },
    autoplay: {
      delay: 5000,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
}
