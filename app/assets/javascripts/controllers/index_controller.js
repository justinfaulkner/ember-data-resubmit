App.SignupController = Ember.ObjectController.extend({
    submit: function(user){
        alert("submitted!");
        this.transitionToRoute('success');
    }
});
