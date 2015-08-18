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
  ["jquery", "firebase", "hbs", "bootstrap", "dom-access",],
  // run these dependencies first, then run the below code
  function($, fb, Handlebars, bootstrap, dom, pop, promisetest, promisetest2) {
    //this assigns the arguments to the above dependencies
    var myFirebaseRef = new Firebase("https://blazing-heat-5390.firebaseio.com/");
      myFirebaseRef.on("value", function(snapshot) {