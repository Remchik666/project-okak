export function openArtistModal(artist) {
    const modal = document.querySelector('.artist-modal-backdrop');
    modal.classList.remove('is-hidden');
  
    // Прокрутка блоку
    document.body.style.overflow = 'hidden';
  
    // Заповнення даних
    document.querySelector('.artist-name').textContent = artist.name;
    document.querySelector('.artist-image').src = artist.image;
    document.querySelector('.years-active').textContent = formatYears(artist.years);
    document.querySelector('.sex').textContent = artist.sex || '—';
    document.querySelector('.members').textContent = artist.members || '—';
    document.querySelector('.country').textContent = artist.country || '—';
    document.querySelector('.bio-text').textContent = artist.bio || '—';
  
    renderGenres(artist.genres);
    renderAlbums(artist.albums);
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
                    <use href="/img/icons/icons.svg#youtube"></use>
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
