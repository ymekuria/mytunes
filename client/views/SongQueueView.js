// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  events: { 
    // 'add' : function() {
    //   this.collection.playFirst();
    // }
  },
  initialize: function() {
    //this.collection.on('add', this.collection.playFirst,this);
    this.collection.on('remove add', this.render, this);

    this.render();
  },

  render: function() {
    this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    
  }

});
