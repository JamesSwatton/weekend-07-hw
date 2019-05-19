const PubSub = require('../helpers/pub_sub.js')
const RequesHelper = require('../helpers/request_helper.js')

const Films = function () {
  this.filmsData = []
  this.directors = []
};

Films.prototype.bindEvents = function () {
  PubSub.subscribe('DirectorSelectView:change', (event) => {
    this.publishFilmsByDirector(event.detail);
  });
};

Films.prototype.getData = function () {
  const request = new RequesHelper('https://ghibliapi.herokuapp.com/films');
  request.get().then((data) => {
    this.filmsData = data;
    PubSub.publish('Films:films-ready', this.filmsData);
    this.publishDirectors()
    console.log('directors', this.directors)
  })
};

Films.prototype.publishDirectors = function () {
  this.directors = this.uniqDirectorList();
  PubSub.publish('Films:directors-ready', this.directors);
};

Films.prototype.directorList = function () {
  const fullList = this.filmsData.map(film => film.director);
  return fullList;
};

Films.prototype.uniqDirectorList = function () {
  return this.directorList().filter((director, index, array) => {
    return array.indexOf(director) === index;
  });
};

Films.prototype.filmsByDirector = function (selectedIndex) {
  const selectedDirector = this.directors[selectedIndex];
  return this.filmsData.filter((film) => {
    return film.director === selectedDirector;
  })
};

Films.prototype.publishFilmsByDirector = function (selectedIndex) {
  const foundFilms = this.filmsByDirector(selectedIndex);
  PubSub.publish('Films:films-ready', foundFilms)
};

module.exports = Films;
