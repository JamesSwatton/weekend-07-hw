const PubSub = require('../helpers/pub_sub.js')

const DirectorSelectView = function (element) {
  this.element = element;
};

DirectorSelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Films: Directors-ready', (event) => {
    this.populate(event.detail);
  })
};

DirectorSelectView.prototype.populate = function (directors) {
    directors.forEach((director, index) => {
      const option = this.createOption(director, index);
      this.element.appendChild(option);
    })
};

DirectorSelectView.prototype.createOption = function (director, index) {
  const option = document.createElement('option');
  option.textContent = director;
  option.value = index;
  return option;

};

module.exports = DirectorSelectView;
