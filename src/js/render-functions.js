const artistsBlock = document.querySelector('.artists-block-list');
const loader = document.querySelector('.loader');
const moreBtn = document.querySelector('.artists-load-more');

export function clearList() {
  artistsBlock.innerHTML = '';
}
export function showLoader() {
  loader.hidden = false;
}
export function hideLoader() {
  loader.hidden = true;
}
export function showLoadMoreButton() {
  moreBtn.hidden = false;
}
export function hideLoadMoreButton() {
  moreBtn.hidden = true;
}

export function createArtistsList(artists) {
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
          <use href="../img/icons/icons.svg#arrow-right"></use></svg></a>
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
