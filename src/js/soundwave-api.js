import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export async function getGenres() {
  try {
    const baseURL = 'https://sound-wave.b.goit.study/api';
    const endPoint = `/genres`;
    const url = baseURL + endPoint;
    const res = await axios.get(url);
    return res.data;
  } catch (e) {
    iziToast.error({
      message: `${e}`,
      position: 'topRight',
    });
    return null;
  }
}

export async function getArtists({
  currentPage = 1,
  name = '',
  sortName = '',
  genre = '',
} = {}) {
  try {
    const baseURL = 'https://sound-wave.b.goit.study/api';
    const endPoint = '/artists';
    const url = baseURL + endPoint;
    const params = {
      limit: 8,
      page: currentPage,
      ...(name && { name }),
      ...(sortName && { sortName }),
      ...(genre && { genre }),
    };

    const res = await axios.get(url, { params });
    return res.data;
  } catch (e) {
    iziToast.error({
      message: `${e}`,
      position: 'topRight',
    });
    return null;
  }
}

export async function getArtistId(id = '65ada227af9f6d155db46908') {
  try {
    const baseURL = 'https://sound-wave.b.goit.study/api';
    const endPoint = `/artists/${id}`;
    const url = baseURL + endPoint;
    const res = await axios.get(url);
    return res.data;
  } catch (e) {
    iziToast.error({
      message: `${e}`,
      position: 'topRight',
    });
    return null;
  }
}

export async function getArtistIdAlbums(id = '65ada227af9f6d155db46908') {
  try {
    const baseURL = 'https://sound-wave.b.goit.study/api';
    const endPoint = `/artists/${id}/albums`;
    const url = baseURL + endPoint;
    const res = await axios.get(url);
    return res.data;
  } catch (e) {
    iziToast.error({
      message: `${e}`,
      position: 'topRight',
    });
    return null;
  }
}

export async function getFeedBacks() {
  try {
    const baseURL = 'https://sound-wave.b.goit.study/api';
    const endPoint = '/feedbacks';
    const url = baseURL + endPoint;
    const params = {
      limit: 12,
    };

    const res = await axios.get(url, { params });
    return res.data;
  } catch (e) {
    iziToast.error({
      message: `${e}`,
      position: 'topRight',
    });
    return null;
  }
}

export async function postFeedBack(name, rating, descr) {
  try {
    const baseURL = 'https://sound-wave.b.goit.study/api';
    const endPoint = `/feedbacks`;
    const url = baseURL + endPoint;
    const data = {
      name: name,
      rating: rating,
      descr: descr,
    };
    const res = await axios.post(url, data);
    console.log(data);
    return res.data;
  } catch (e) {
    iziToast.error({
      message: `${e}`,
      position: 'topRight',
    });
    return null;
  }
}

// //Приклад роботи
// async function initMainPage() {
//   //жанри нічого не приймає
//   const genres = await getGenres();
//   console.log('genres        ', genres);

//   //приймає об'єкт з параметрами
//   const artists = await getArtists({ sortName: 'asc', name: 'Bob' });
//   console.log('artists        ', artists);

//   // нічого не приймає
//   const feedBacks = await getFeedBacks();
//   console.log('feedBacks      ', feedBacks);

//   // приймає id
//   const artistId = await getArtistId('65ada227af9f6d155db46908');
//   console.log('artistId       ', artistId);
//   // приймає id
//   const artistIdAlbums = await getArtistIdAlbums('65ada227af9f6d155db46908');
//   console.log('artistIdAlbums ', artistIdAlbums);

//пост
// const post = await postFeedBack(
//   'Jhonny Depp',
//   4.5,
//   'Some text with user`s comment about application'
// );
// console.log(post);
// }
// initMainPage();
// // розкоментувати для прикладу
