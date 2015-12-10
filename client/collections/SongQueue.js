// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function(){
      
      if( this.length === 1) {
        this.playFirst();
      }
    },this);

    this.on('ended', function() {
      if (this.length > 1) {
        this.shift();
        this.playFirst();
      } else {
        this.shift();
      }
    });

    this.on('dequeue', function() {
      this.remove();
    });


    
  },

  playFirst: function() {
    this.at(0).play();
  },

  remove: function() {  

  }

});