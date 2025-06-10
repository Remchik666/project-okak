import { getArtistId, getArtistIdAlbums } from './soundwave-api';

const artistsBlock = document.querySelector('.artists-block-list');
artistsBlock.addEventListener('click', handleLearnMoreArtist);
async function handleLearnMoreArtist(e) {
  if (e.target.className !== 'artist-learn-link') {
    return;
  }
  const id = e.target.dataset.id;
  const artistInfo = await getArtistId(id);
  const artistAlbumInfo = await getArtistIdAlbums(id);

  const genres = e.target.parentElement.children[1].innerHTML;

  renderGenres(genres);
  openArtistModal(artistInfo);
  renderAlbums(artistAlbumInfo.albumsList);
}
export function openArtistModal({
  intDiedYear,
  intFormedYear,
  intMembers,
  strGender,
  strArtist,
  strArtistThumb,
  strBiographyEN,
  strCountry,
}) {
  //   genres
  const modal = document.querySelector('.artist-modal-backdrop');
  const closeBtn = document.querySelector('.modal-close-btn');
  const backdrop = document.querySelector('.artist-modal-backdrop');
  const loader = document.querySelector('.modal-loader');

  // Показати модалку і лоадер
  modal.classList.remove('is-hidden');
  loader.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';

  // Очистити попередні дані
  clearModalContent();

  // Додаємо слухачі
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', handleBackdropClick);
  document.addEventListener('keydown', handleEscKey);

  // Заповнити дані після імітації завантаження
  setTimeout(() => {
    loader.classList.add('is-hidden');

    document.querySelector('.artist-name-modal').textContent = strArtist;
    document.querySelector('.artist-image').src = strArtistThumb;
    document.querySelector('.years-active').textContent = formatYears(
      intFormedYear,
      intDiedYear
    );
    document.querySelector('.sex').textContent = strGender || '—';
    document.querySelector('.members').textContent = intMembers || '—';
    document.querySelector('.country').textContent = strCountry || '—';
    document.querySelector('.bio-text').textContent = strBiographyEN || '—';
  }, 500);

  function closeModal() {
    modal.classList.add('is-hidden');
    document.body.style.overflow = '';

    // Знімаємо слухачі
    closeBtn.removeEventListener('click', closeModal);
    backdrop.removeEventListener('click', handleBackdropClick);
    document.removeEventListener('keydown', handleEscKey);
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

  function clearModalContent() {
    document.querySelector('.artist-name').textContent = '';
    document.querySelector('.artist-image').src = '';
    document.querySelector('.years-active').textContent = '';
    document.querySelector('.sex').textContent = '';
    document.querySelector('.members').textContent = '';
    document.querySelector('.country').textContent = '';
    document.querySelector('.bio-text').textContent = '';
    document.querySelector('.genres-list-modal').innerHTML = '';
    document.querySelector('.artist-albums').innerHTML = '';
  }
}

function formatYears(start, end) {
  if (!start && !end) return 'information missing';
  if (start && !end) return `${start}–present`;
  return `${start}–${end}`;
}

function renderGenres(genres) {
  const list = document.querySelector('.genres-list-modal');
  list.innerHTML = genres;
}

function renderAlbums(albums) {
  const container = document.querySelector('.artist-albums');
  container.innerHTML = '<h3>Albums</h3>';

  albums.forEach(album => {
    const section = document.createElement('div');
    section.className = 'album';
    section.innerHTML = `
      <h4 class="album-title">${album.strAlbum}</h4>
      <div class="album-table">
        <div class="album-header">
          <span>Track</span>
          <span>Time</span>
          <span>Link</span>
        </div>
        <ul class="track-list">
          ${album.tracks
            .map(track => {
              const minutes = Math.floor(track.intDuration / 60000);
              const seconds = Math.floor((track.intDuration % 60000) / 1000)
                .toString()
                .padStart(2, '0');
              return `
            <li>
              <span>${track.strTrack}</span>
              <span>${minutes}:${seconds}</span>
              <a href="${
                track.movie
              }" target="_blank" rel="noopener noreferrer">
                ${
                  track.movie
                    ? `+<svg class="track-link-youtube" width="24" height="24">
            <use href="./icons.svg#icon-youtube"></use>
          </svg>`
                    : ''
                }
              </a>
            </li>
          `;
            })
            .join('')}
        </ul>
      </div>
    `;
    container.appendChild(section);
  });
}
