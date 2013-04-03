DS.Model.reopen({
  errors: Ember.Object.create()
});

DS.RESTAdapter.reopen({
  namespace: 'api'
});

App.Store = DS.Store.extend({
  revision: 12,
  adapter: DS.RESTAdapter.create()
});
