export function openArtistModal(artist) {
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

    document.querySelector('.artist-name').textContent = artist.name;
    document.querySelector('.artist-image').src = artist.image;
    document.querySelector('.years-active').textContent = formatYears(artist.years);
    document.querySelector('.sex').textContent = artist.sex || '—';
    document.querySelector('.members').textContent = artist.members || '—';
    document.querySelector('.country').textContent = artist.country || '—';
    document.querySelector('.bio-text').textContent = artist.bio || '—';

    renderGenres(artist.genres);
    renderAlbums(artist.albums);
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
    document.querySelector('.genres-list').innerHTML = '';
    document.querySelector('.artist-albums').innerHTML = '';
  }
}

function formatYears({ start, end }) {
  if (!start && !end) return 'information missing';
  if (start && !end) return `${start}–present`;
  return `${start}–${end}`;
}

function renderGenres(genres) {
  const list = document.querySelector('.genres-list');
  list.innerHTML = '';
  genres.forEach(g => {
    const li = document.createElement('li');
    li.textContent = g;
    list.appendChild(li);
  });
}

function renderAlbums(albums) {
  const container = document.querySelector('.artist-albums');
  container.innerHTML = '<h3>Albums</h3>';

  albums.forEach(album => {
    const section = document.createElement('div');
    section.className = 'album';
    section.innerHTML = `
      <h4 class="album-title">${album.title}</h4>
      <div class="album-table">
        <div class="album-header">
          <span>Track</span>
          <span>Time</span>
          <span>Link</span>
        </div>
        <ul class="track-list">
          ${album.tracks.map(track => `
            <li>
              <span>${track.title}</span>
              <span>${track.time}</span>
              <a href="${track.youtube}" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16">
                  <use href="../img/icons/icons.svg#youtube"></use>
                </svg>
              </a>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
    container.appendChild(section);
  });
}
