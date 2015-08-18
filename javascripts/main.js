requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'firebase': '../bower_components/firebase/firebase',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(
  ["jquery", "firebase", "hbs", "bootstrap"],
  // run these dependencies first, then run the below code
  function($, fb, Handlebars, bootstrap, dom, pop, promisetest, promisetest2) {
    //this assigns the arguments to the above dependencies
    var myFirebaseRef = new Firebase("https://nss-austin-family.firebaseio.com//");
      myFirebaseRef.on("value", function(snapshot) {

            var showFamily = function(data) {
        require(['hbs!../templates/family.hbs'], function(familyTemplate) {
          dom.html(familyTemplate(data));
          })
        });
      };
      showFamily(snapshot.val());