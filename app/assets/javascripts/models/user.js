App.User = DS.Model.extend(Ember.Validations.Mixin);
App.User.reopen({
  username: DS.attr('string'),
  password: DS.attr('string'),

  validations: {
      username: {
          presence: true
      },
      password: {
          presence: true,
          length: { minimum: 6 }
      }
  }
});