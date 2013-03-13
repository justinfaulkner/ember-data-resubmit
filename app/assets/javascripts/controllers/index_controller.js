App.IndexController = Ember.ObjectController.extend({

  startEditing: function() {
    // create a new record on a local transaction
    this.transaction = this.get('store').transaction();
    var profile = new Ember.Object();
    this.set('content', this.transaction.createRecord(App.User, {profile: profile}));
  },

  submit: function(user){
      alert("submitted!");
  }
});
