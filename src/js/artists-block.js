import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  getGenres,
  getArtists,
  getArtistId,
  getArtistIdAlbums,
  getFeedBacks,
  postFeedBack,
} from '../js/soundwave-api';

const artistsBlock = document.querySelector('.artists-block-list');
const loader = document.querySelector('.loader');
const moreBtn = document.querySelector('.artists-load-more');

function clearList() {
  artistsBlock.innerHTML = '';
}
function showLoader() {
  loader.classList.remove('hidden');
}
function hideLoader() {
  loader.classList.add('hidden');
}
function showLoadMoreButton() {
  moreBtn.classList.remove('hidden');
}
function hideLoadMoreButton() {
  moreBtn.classList.add('hidden');
}

function createArtistsList(artists) {
  const markup = artists
    .map(
      ({ _id, strArtist, strBiographyEN, strArtistThumb, genres }) =>
        `<div class="artist-block" data-id="${_id}">
            <a class="artist-link" href="#" aria-label="Go to artist ${strArtist}">
            <img class="artist-img" src="${
              strArtistThumb || '../img/no-image.jpg'
            }" alt="${strArtist}" loading="lazy" onerror="this.onerror=null; this.src='../img/no-image.jpg';"></a>
            ${createGenresList(genres)}
            <h5 class="artist-name">${escapeHTML(strArtist)}</h5>
            <p class="artist-description">${truncateText(
              escapeHTML(strBiographyEN),
              200
            )}</p>
            <a class="artist-learn-link" href="#"
        >Learn More<svg class="artist-link-icon" width="24" height="24">
          <use href="./icons.svg#arrow-right"></use></svg></a>
        </div>`
    )
    .join('');
  artistsBlock.insertAdjacentHTML('beforeend', markup);
}

function createGenresList(genres = []) {
  if (!Array.isArray(genres) || genres.length === 0) return '';
  const listItems = genres
    .map(genre => `<li class="artist-genres-item">${escapeHTML(genre)}</li>`)
    .join('');
  return `<ul class="artist-genres-list">${listItems}</ul>`;
}

function escapeHTML(str = '') {
  return str.replace(
    /[&<>"']/g,
    match =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      }[match])
  );
}

function truncateText(str, maxLength) {
  if (!str) return '';
  return str.length > maxLength ? str.slice(0, maxLength) + '…' : str;
}

let currentPage = 1;
let loadedArtistsCount = 0;
let totalArtists = 0;

window.onload = async event => {
  currentPage = 1;
  loadedArtistsCount = 0;
  hideLoadMoreButton();
  clearList();
  showLoader();
  try {
    const artists = await getArtists();
    // console.log(artists);
    totalArtists = artists.totalArtists;
    if (totalArtists === 0) {
      iziToast.info({
        message:
          'Sorry, there are no Artists matching your search query. Please try again!',
        messageColor: '#fff',
        position: 'topRight',
        messageSize: '16px',
        backgroundColor: '#EF4040',
      });
      hideLoader();
    } else {
      createArtistsList(artists.artists);
      hideLoader();
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'Error loading Artists.',
      position: 'topRight',
      backgroundColor: '#EF4040',
    });
    console.log('Error: ', error);
    hideLoader();
  }
};

moreBtn.addEventListener('click', async () => {
  currentPage += 1;
  showLoader();

  try {
    const artists = await getArtists({ currentPage: currentPage });
    // console.log(artists);
    createArtistsList(artists.artists);
    loadedArtistsCount += artists.length;
    hideLoader();
    scrollList();
    if (loadedArtistsCount >= totalArtists) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Error loading more Artists.',
      position: 'topRight',
      backgroundColor: '#EF4040',
    });
    console.error('Load More Error:', error);
    hideLoader();
  }
});

function scrollList() {
  const card = document.querySelector('.artist-block');
  if (!card) return;
  const cardHeight = card.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight,
    behavior: 'smooth',
  });
}
