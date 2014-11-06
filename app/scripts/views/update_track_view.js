(function () {

  App.Views.SingleCoffee = Backbone.View.extend({

    tagName: 'ul',
    className: 'coffeeSingle',

    events: {
      'submit #updateTrack' : 'updateTrack',
      'click #delete' : 'deleteTrack'

    },

    template: _.template($('#singleTemp').html()),

    initialize: function (options) {
      this.options = options;
      this.render();

      $('#coffeeForm').empty();

      // Get our Element On Our Page
      $('#trackList').html(this.$el);
    },

    render: function () {

      this.$el.empty();

      this.$el.html(this.template(this.options.coffee.toJSON()));

    },

    updateTrack: function (e) {
      e.preventDefault();

      // Update our Model Instance
      this.options.coffee.set({

        title: $('#update_title').val(),
        artist: $('#update_artist').val(),
        genre: $('#update_genre').val(),
        comments: $('#update_comments').val(),
        bpm: $('#update_bpm').val(),
        number: $('#update_number').val()

      });

      // Save Instance
      this.options.coffee.save();

      // Go back to our home page
      App.router.navigate('list', {trigger: true});

    },

    deleteTrack: function (e) {
      e.preventDefault();

      // Remove Coffee
      this.options.coffee.destroy();

      // Go home ET
      App.router.navigate('list', {trigger: true});

    }

  });

}());