App.LeadRoute = Em.Route.extend({
  model: function(params) { return this.store.find('lead', params.id) }
})
