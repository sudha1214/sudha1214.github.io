require.config({
  baseUrl: './',
  paths: {

    // lib
    jquery: 'bower_components/jquery/jquery',
    underscore: 'bower_components/underscore/underscore',
    backbone: 'bower_components/backbone/backbone',
    json: 'bower_components/requirejs-plugins/src/json',
    text: 'bower_components/requirejs-plugins/lib/text',
    handlebars: 'bower_components/handlebars/handlebars.min',
    bootstrap: 'bower_components/bootstrap/dist/js/bootstrap',
    app: 'config'

  },
  shim: {
    // lib
    json: {
      deps: ['text']
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    marionette: {
      deps: ['jquery', 'underscore', 'backbone']
    },
    handlebars: {
      exports: 'Handlebars'
    },
    bootstrap: {
      deps: ['jquery']
    },
    config: {
      deps: ['backbone', 'bootstrap']
    },
    main: {
      deps: ['jquery']
    }
  },
  deps: ['config']
});
require(["js/view/view","js/model/model","js/collection/collection","json!./textFile.json","backbone","underscore"], function(DataView,dataModel,dataCollection,textFile) {
  
    

    var file = textFile;  
    var items = new dataCollection(file);
    var tst = new DataView({
    collection:items
  })  
    //var tst = new DataView();
    tst.render();
      
  


});