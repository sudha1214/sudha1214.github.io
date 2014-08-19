define(function(require) {
    require('backbone');
    var i;
   
    var DataView = Backbone.View.extend({ 
        el: 'div',
        initialize: function() {
        	i = 0;
        },
        render: function() {

        	//$('#buttonList').html(_.template($("#button_template").html()));

        },
        events : {
        	"click #buttonList #addButton": "addButton",
        	"click #buttonList #removeButton": "removeButton",
        	"click #buttonList #loadFile": "loadFile"
        },

        addButton: function() {
        	
        	i++;
            //$(' #fileLoad').empty();
        	var buttonAdded = "button" + i;
        	$('.removeNothing').remove();
         
        	$('#test').append('<input type="button" class="btn-success  btn-small ' +buttonAdded + '"value="' +buttonAdded +'">');
        	
        },
        removeButton: function() {
        	$(' #fileLoad').empty();
        	if (i > 0 && i != "undefined") {
        		var buttonAdded = "button" + i;
        		$('.' +buttonAdded).remove();
        		i--;
        	} else {
        		$('#test').html('<p class="removeNothing"> Nothing to remove </p>')
        	}
        },
        loadFile: function() {
        	var modelsList = this.collection.models[0].attributes;
        	$(' #fileLoad').empty();
        	for(var i in modelsList) {

        		$("#fileLoad").append('<p> <span class="key">' + i + ' : </span> <span class="keyValue">' +modelsList[i] + '</span> </p>');

        	}

        	//alert("file loaded");
        }
    });
    return DataView;
 });