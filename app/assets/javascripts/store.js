App.Store = DS.Store.extend({
  namespace: 'api/v1'
});

// Override the default adapter with the `DS.ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.
App.ApplicationAdapter = DS.ActiveModelAdapter.extend({
  // Ember Rails has active_model_serializers as a dependency
});
