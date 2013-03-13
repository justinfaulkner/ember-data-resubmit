App.User = DS.Model.extend(Ember.Validations.Mixin);
App.User.reopen({
  firstName: "",
  lastName: "",
  emailAddress: DS.attr('string'),
  password: DS.attr('string'),
  profile: DS.belongsTo('App.Profile'),

  validations: {
      firstName: {
          presence: true
      },
      lastName: {
          presence: true
      },
      emailAddress: {
          presence: true
      },
      password: {
          presence: true,
          length: { minimum: 6 }
      }
  }
});