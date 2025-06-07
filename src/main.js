import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  getGenres,
  getArtists,
  getArtistId,
  getArtistIdAlbums,
  getFeedBacks,
  postFeedBack,
} from './js/soundwave-api';
import {
  createArtistsList,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  clearList,
} from './js/render-functions.js';

const moreBtn = document.querySelector('.artists-load-more');

let currentPage = 1;
let loadedArtistsCount = 0;
let totalArtists = 0;

function showWarning(message) {
  iziToast.warning({
    message,
    iconUrl: errorIcon,
    iconColor: '#fff',
    messageColor: '#fff',
    position: 'topRight',
    messageSize: '16px',
    backgroundColor: '#EF4040',
  });
}

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
      showWarning(
        'Sorry, there are no Artists matching your search query. Please try again!'
      );
      hideLoader();
    } else {
      createArtistsList(artists.artists);
      hideLoader();
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'Error loading more Artists.',
      position: 'topRight',
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
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
