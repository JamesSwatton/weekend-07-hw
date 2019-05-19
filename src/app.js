const PubSub = require('./helpers/pub_sub.js')
const Films = require('./models/films.js');
const FilmListView = require('./views/film_list_view.js');
const DirectorSelectView = require('./views/director_select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript loaded')

  const filterSelect = document.querySelector('select#filter-select');
  filterSelect.addEventListener('change', (event) => {
      const selectedId = event.target.value;
      console.log(selectedId)
      PubSub.publish('filter-select:change', (selectedId))

    })

  const selectElement = document.querySelector('select#director-select');
  const directorSelectView = new DirectorSelectView(selectElement);
  directorSelectView.bindEvents();

  const listContainer = document.querySelector('div#film-list')
  const filmListView = new FilmListView(listContainer);
  filmListView.bindEvents();

  const films = new Films();
  films.bindEvents();
  films.getData();

});
