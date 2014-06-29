App.LeadsRoute = Em.Route.extend({
  model: function() { return this.store.find('lead') }
})
