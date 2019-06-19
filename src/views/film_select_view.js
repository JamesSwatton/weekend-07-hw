const PubSub = require('../helpers/pub_sub.js');
const FilmDetailView = require('./film_detail_view.js')

const FilmSelectView = function(container){
  this.container = container
};

FilmSelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Films:films-ready', (event) => {
    this.clearList();
    this.renderFilmSelectItem(event.detail);
  });

  this.container.addEventListener('click', (event) => {
    const selectedFilm = event.target.innerHTML;
    console.log(selectedFilm)
    PubSub.publish('FilmSelectView:change', selectedFilm)
  });
};

FilmSelectView.prototype.clearList = function () {
  this.container.innerHTML = '';
};

FilmSelectView.prototype.renderFilmSelectItem = function (films) {
  films.forEach((film) => {
    const filmSelectItem = this.createFilmListItem(film);
    this.container.appendChild(filmSelectItem);
    console.log('hello')
  })
};

FilmSelectView.prototype.createFilmListItem = function (film) {
  const filmDetailView = new FilmDetailView();
  const filmSelectItem = filmDetailView.createFilmSelectItem(film);
  return filmSelectItem;
};

module.exports = FilmSelectView;
