define(["jquery"],function($) {
  return {
    popFamily: function(callback) {
      $.ajax({
        url: "https://nss-austin-family.firebaseio.com/.json"
      }).done(function(data) {
        callback.call(this, data);
      });
    }
  };
});