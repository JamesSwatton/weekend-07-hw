const PubSub = require('../helpers/pub_sub.js')
const RequesHelper = require('../helpers/request_helper.js')

const Films = function () {
  this.filmsData = []
  this.directors = []
};

Films.prototype.bindEvents = function () {

};

Films.prototype.getData = function () {
  const request = new RequesHelper('https://ghibliapi.herokuapp.com/films');
  request.get().then((data) => {
    this.filmsData = data;
    PubSub.publish('Films:films-ready', this.filmsData);
    this.publishDirectors(data)
    console.log('directors', this.directors)
  })
};

Films.prototype.publishDirectors = function (data) {
  this.data = data;
  this.directors = this.uniqDirectorList();
  PubSub.publish('Films: Directors-ready', this.directors);
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

module.exports = Films;
