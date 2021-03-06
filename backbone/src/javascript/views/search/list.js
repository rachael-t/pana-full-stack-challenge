import ItemView from './item';

export default Marionette.CompositeView.extend({
  template: require('./list.jade'),
  childView: ItemView,
  childViewContainer: '.js-list',
  className: 'search-results--wrapper',
  initialize(options) {
    this.flightSearch = options.flightSearch;
    this.collection = this.flightSearch.get('paginatedResults');
    this.listenTo(
      this.flightSearch.get('paginatedResults'),
      'change',
      this.render
    );
    this.flightSearch.search();
  },
});
