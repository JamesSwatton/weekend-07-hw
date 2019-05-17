const PubSub = require('../helpers/pub_sub.js')
const RequesHelper = require('../helpers/request_helper.js')

const Films = function () {
  this.filmsData = []
};

Films.prototype.bindEvents = function () {
  
};

Films.prototype.getData = function () {
  const request = new RequesHelper('https://ghibliapi.herokuapp.com/films');
  request.get().then((data) => {
    this.filmsData = data;
    PubSub.publish('Films:films-ready', this.filmsData);
  })
};

module.exports = Films;
