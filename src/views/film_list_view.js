const PubSub = require('../helpers/pub_sub.js');
const FilmDetailView = require('./film_detail_view.js')

const FilmListView = function(container) {
  this.container = container;
};

FilmListView.prototype.bindEvents = function () {
  PubSub.subscribe('Films:films-ready', (event) => {
    this.clearList();
    this.renderFilmDetailView(event.detail);
  });
};

FilmListView.prototype.clearList = function () {
  this.container.innerHTML = '';
};

FilmListView.prototype.renderFilmDetailView = function (films) {
  films.forEach((film) => {
    const filmItem = this.createFilmListItem(film);
    this.container.appendChild(filmItem);
  })
};

FilmListView.prototype.createFilmListItem = function (film) {
  const filmDetailView = new FilmDetailView();
  const filmDetail = filmDetailView.createFilmDetail(film);
  return filmDetail;
};

module.exports = FilmListView;
