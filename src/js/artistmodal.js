import { getArtistId, getArtistIdAlbums } from './soundwave-api';
import spriteUrl from '/public/icons.svg';
const artistsBlock = document.querySelector('.artists-block-list');
artistsBlock.addEventListener('click', handleLearnMoreArtist);
async function handleLearnMoreArtist(e) {
  if (e.target.className !== 'artist-learn-link') {
    return;
  }
  const id = e.target.dataset.id;
  const genres = e.target.parentElement.children[1].innerHTML;
  openArtistModal(id, genres);
}
async function openArtistModal(id, genres) {
  const modal = document.querySelector('.artist-modal-backdrop');
  const closeBtn = document.querySelector('.modal-close-btn');
  const backdrop = document.querySelector('.artist-modal-backdrop');
  const loader = document.querySelector('.modal-loader');

  // Показати модалку і лоадер
  modal.classList.remove('is-hidden');
  loader.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';

  // Додаємо слухачі
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', handleBackdropClick);
  document.addEventListener('keydown', handleEscKey);

  const artistInfo = await getArtistId(id);
  const artistAlbumInfo = await getArtistIdAlbums(id);
  loader.classList.add('is-hidden');
  createModalBiography(artistInfo, genres);
  renderAlbums(artistAlbumInfo.albumsList);

  function closeModal() {
    modal.classList.add('is-hidden');
    document.body.style.overflow = '';

    // Знімаємо слухачі
    closeBtn.removeEventListener('click', closeModal);
    backdrop.removeEventListener('click', handleBackdropClick);
    document.removeEventListener('keydown', handleEscKey);
  }
}
function handleBackdropClick(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}

function handleEscKey(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

function renderAlbums(albums) {
  document.querySelector('.modal-albums').innerHTML = albums
    .map(album => renderAlbumMarkup(album))
    .join('');
}
function renderAlbumMarkup(album) {
  const tracksMarkup = album.tracks
    .map(track => {
      const minutes = Math.floor(track.intDuration / 60000);
      const seconds = Math.floor((track.intDuration % 60000) / 1000)
        .toString()
        .padStart(2, '0');
      return `
      <li class="modal-track-item">
        <span class="track-name">${track.strTrack}</span>
        <span class="track-time">${minutes}:${seconds}</span>
        <a class="track-link" target="_blank" href="${track.movie}">${
        track.movie
          ? `<svg class="track-link-youtube">
            <use href="${spriteUrl}#youtube"></use>
          </svg>`
          : ''
      }</a>
      </li>
    `;
    })
    .join('');

  const markup = `
    <li class="modal-album-item">
      <h3 class="modal-album-title">${album.strAlbum}</h3>
      <ul class="modal-track-list">
            <li class="modal-track-item">
        <p class="modal-track-name-title track-name">Track</p>
        <p class="modal-track-time-title track-time">Time</p>
        <p class="modal-track-link-title track-link">Link</p>
      </li>
            ${tracksMarkup}
      </ul>
    </li>
  `;

  return markup;
}

function createModalBiography(
  {
    intDiedYear,
    intFormedYear,
    intMembers,
    strGender,
    strArtist,
    strArtistThumb,
    strBiographyEN,
    strCountry,
  },
  genres
) {
  const markupYears =
    intFormedYear || intDiedYear
      ? `      ${intFormedYear ?? 'last'}-${intDiedYear ?? 'present'}`
      : 'information missing';

  const markup = `
   <p class="modal-biography__title">${strArtist}</p>
   <div class="modal-bbiography-desktop">     
   <img class="modal-biography__photo" src="${strArtistThumb}" alt="${strArtist}" />
        <div class="modal-biography__info">
        <div class="modal-biography___content">
        <p class="modal-biography___years">Years active</br> <span>
        
        ${markupYears}
     </span></p>
        <p class="modal-biography___sex">Sex</br> <span>${strGender}</span></p>
        <p class="modal-biography___members">Members</br> <span>${intMembers}</span></p>
        <p class="modal-biography___country">Country</br> <span>${strCountry}</span></p>
        </div>
        <p class="modal-biography___biography">Biography</br> <span>${strBiographyEN}</span></p>
        <ul class="modal-biography__genre-list">${genres}</ul>
        </div></div>`;
  document.querySelector('.modal-biography').innerHTML = markup;
}
