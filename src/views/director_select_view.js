const PubSub = require('../helpers/pub_sub.js')

const DirectorSelectView = function (element) {
  this.element = element;
};

DirectorSelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Films:directors-ready', (event) => {
    this.populate(event.detail);
  })

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('DirectorSelectView:change', selectedIndex)
  });
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
