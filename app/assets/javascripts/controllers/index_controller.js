App.IndexController = Ember.ObjectController.extend({

  startEditing: function() {
    // create a new record on a local transaction
    this.transaction = this.get('store').transaction();
    var profile = new Ember.Object();
    this.set('content', this.transaction.createRecord(App.User, {profile: profile}));
  },

  submit: function(user){
    console.log("submitting!");
    this.transaction.commit();
  },

  _transitionOnSuccess: function(stuff) {
    if (this.get('content.id') && this.get('content.id').length > 0) {
      console.log("_transitionOnSuccess");
      this.transitionToRoute('success');
    }
  }.observes('content.id')
});
