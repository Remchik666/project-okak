import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getGenres, getArtists } from '../js/soundwave-api';

import imgNotFound from '/img/no-image.jpg';

const artistsBlock = document.querySelector('.artists-block-list');
const loader = document.querySelector('.loader');
const moreBtn = document.querySelector('.artists-load-more');
const silenceBlock = document.querySelector('.artists-silence-block');

function showSilence() {
  silenceBlock.classList.remove('hidden');
}
function hideSilence() {
  silenceBlock.classList.add('hidden');
}
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

// ====Функція рендеру списку артистів=====

function createArtistsList(artists) {
  const markup = artists.map(({ _id, strArtist, strBiographyEN, strArtistThumb, genres }) =>
    `<div class="artist-block">
      <img class="artist-img" src="${strArtistThumb || imgNotFound}" alt="${strArtist}" loading="lazy" onerror="this.onerror=null; this.src='${imgNotFound}';">
      ${createGenresList(genres)}
      <h5 class="artist-name">${escapeHTML(strArtist)}</h5>
      <p class="artist-description">${truncateText(escapeHTML(strBiographyEN), 200)}</p>
      <a class="artist-learn-link">Learn More
        <svg class="artist-link-icon" width="24" height="24">
          <use href="./icons.svg#arrow-right" data-id="${_id}"></use>
        </svg>
      </a>
    </div>`
  ).join('');
  artistsBlock.insertAdjacentHTML('beforeend', markup);
}

// ====Функція ренддеру списку жанрів Артиста=====

function createGenresList(genres = []) {
  if (!Array.isArray(genres) || genres.length === 0) return '';
  const listItems = genres.map(genre => `<li class="artist-genres-item">${escapeHTML(genre)}</li>`).join('');
  return `<ul class="artist-genres-list">${listItems}</ul>`;
}

// ====Захист від ін'єкцій в HTML====

function escapeHTML(str = '') {
  return str.replace(/[&<>"']/g, match => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }[match]));
}

// ====Скорочення опису====

function truncateText(str, maxLength) {
  if (!str) return '';
  return str.length > maxLength ? str.slice(0, maxLength) + '…' : str;
}

// ====Автопрокрутка сторінки=====

function scrollList() {
  const card = document.querySelector('.artist-block');
  if (!card) return;
  const cardHeight = card.getBoundingClientRect().height;
  window.scrollBy({ top: cardHeight, behavior: 'smooth' });
}

// ====Рендеринг списку жанрів для фільтра====

const genreList = document.querySelector('.filter-genre-dropbox');

function createGenreFilter(genres) {
  const markup = genres.map(({ genre }) =>
    `<input id="genre-${escapeHTML(genre)}" class="filter-genre-input" type="radio" name="genreGroup" value="${escapeHTML(genre)}" />
    <label for="genre-${escapeHTML(genre)}" class="filter-genre-label">${escapeHTML(genre)}</label>`
  ).join('');
  genreList.insertAdjacentHTML('beforeend', markup);
}

// ====Анімація випадаючого фільтра====

const filterBtn = document.querySelector('.artists-filter-toggle');
const filterPanel = document.querySelector('.artists-filter-form');
const sortingBtn = document.querySelector('.filter-sorting-toggle');
const sortingPanel = document.querySelector('.filter-sorting-dropbox');
const genreBtn = document.querySelector('.filter-genre-toggle');
const genrePanel = document.querySelector('.filter-genre-dropbox');

filterBtn.addEventListener('click', () => {
  filterPanel.classList.toggle('open');
  filterBtn.classList.toggle('open');
  filterBtn.querySelector('.filter-toggle-icon').classList.toggle('rotate');
});

sortingBtn.addEventListener('click', () => {
  sortingPanel.classList.toggle('open');
  sortingBtn.classList.toggle('open');
  sortingBtn.querySelector('.filter-sorting-icon').classList.toggle('rotate');
});
genreBtn.addEventListener('click', () => {
  genrePanel.classList.toggle('open');
  genreBtn.classList.toggle('open');
  genreBtn.querySelector('.filter-genre-icon').classList.toggle('rotate');
});

// ====Отримання значень фільтрів====

let filterName = document.querySelector('.filter-name-input');
let filterSorting = document.getElementsByName('sortingGroup');
let filterGenre = document.getElementsByName('genreGroup');

function getValue(filterArray) {
  const selected = Array.from(filterArray).find(input => input.checked);
  return selected ? selected.value : '';
}

// ====Скидання фільтрів====

const resetBtn = document.querySelector('.artists-filter-reset');
const silenceResetBtn = document.querySelector('.artists-silence-button');

function resetFilters() {
  filterName.value = '';

  Array.from(filterSorting).forEach(input => (input.checked = input.id === 'filter-default'));
  Array.from(filterGenre).forEach(input => (input.checked = false));

  currentPage = 1;
  loadedArtistsCount = 0;
  clearList();
  hideSilence();
}

resetBtn.addEventListener('click', async () => {
  resetFilters();
  await loadArtistsList({ page: currentPage });
});

silenceResetBtn.addEventListener('click', async () => {
  resetFilters();
  await loadArtistsList({ page: currentPage });
});

// ====Функція завантаження списку Артистів=====

async function loadArtistsList({ name = '', sortName = '', genre = '', page = 1, } = {}) {
  hideLoadMoreButton();
  showLoader();
  hideSilence();
  try {
    const artistsData = await getArtists({ name, sortName, genre, currentPage: page, });
    totalArtists = artistsData.totalArtists;
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
      showSilence();
    } else {
      createArtistsList(artistsData.artists);
      loadedArtistsCount += artistsData.artists.length;
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
}

// ====Обробка подій=====

let currentPage = 1;
let loadedArtistsCount = 0;
let totalArtists = 0;

window.addEventListener('DOMContentLoaded', async () => {
  currentPage = 1;
  loadedArtistsCount = 0;
  clearList();
  await loadArtistsList({ page: currentPage })
  const genres = await getGenres();
  if (genres.length > 0) createGenreFilter(genres);
});

moreBtn.addEventListener('click', async () => {
  currentPage += 1;
  await loadArtistsList({ name: filterName.value, sortName: getValue(filterSorting), genre: getValue(filterGenre), page: currentPage })
  scrollList();
  if (loadedArtistsCount >= totalArtists) {
    hideLoadMoreButton();
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  }
});

filterPanel.addEventListener('change', async event => {
  currentPage = 1;
  loadedArtistsCount = 0;
  clearList();
  await loadArtistsList({ name: filterName.value, sortName: getValue(filterSorting), genre: getValue(filterGenre), page: currentPage });
  if (loadedArtistsCount >= totalArtists) hideLoadMoreButton();
});