const FilmDetailView = function () {};

FilmDetailView.prototype.createFilmDetail = function (film) {
  const filmDetail = document.createElement('div');
  filmDetail.classList.add('film-detail');

  const name = document.createElement('h1');
  name.textContent = film.title;
  filmDetail.appendChild(name);

  const description = document.createElement('p');
  description.textContent = film.description;
  filmDetail.appendChild(description);

  const year = document.createElement('h3');
  year.textContent = film.release_date;
  filmDetail.appendChild(year);

  const director = document.createElement('h3');
  director.textContent = film.director;
  filmDetail.appendChild(director);

  return filmDetail;
};

FilmDetailView.prototype.createFilmSelectItem = function (film) {
  // const filmSelect = document.createElement('div');
  // filmSelect.classList.add('film_select');

  const title = document.createElement('button');
  title.classList.add('select-film-btn');
  title.textContent = film.title;
  // filmSelect.appendChild(title);

  return title
};

module.exports = FilmDetailView;
