// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  events: { 
    // 'add' : function() {
    //   this.collection.playFirst();
    // }
  },
  initialize: function() {
    //this.collection.on('add', this.collection.playFirst,this);
    this.songQueueEntryView = new SongQueueEntryView({});

    this.render();
  },

  render: function() {
    
  }

});
