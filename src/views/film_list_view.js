const PubSub = require('../helpers/pub_sub.js')

const FilmListView = function() {

};

FilmListView.prototype.bindEvents = function () {
  PubSub.subscribe('Films:films-ready', (event) => {
    console.log(event.detail[0].title)
  });
};

module.exports = FilmListView;
