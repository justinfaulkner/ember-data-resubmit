App.IndexRoute = Ember.Route.extend({
    model: function() {
        return App.User.createRecord();
    }
});