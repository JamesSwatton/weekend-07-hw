const FilmDetailView = function () {};

FilmDetailView.prototype.createFilmDetail = function (film) {
  const filmDetail = document.createElement('div');
  filmDetail.classList.add('film-detail');

  const name = document.createElement('h2');
  name.textContent = film.title;
  filmDetail.appendChild(name);

  const description = document.createElement('p');
  description.textContent = film.description;
  filmDetail.appendChild(description);

  return filmDetail;
};

module.exports = FilmDetailView;
