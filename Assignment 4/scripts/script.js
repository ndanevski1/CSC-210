// source: https://stackoverflow.com/questions/16165001/jquery-best-way-to-show-list-items-one-by-one

$(document).ready(function() {
	hideLists();
	changeIngredients();
	changeSteps();
});

// a function that hides the lists on the page
function hideLists() {
	$('#stepsList > li').hide();
	$('#ingredientsList > li').hide();
}

// a function that includes the properties needed for the ingredients
function changeIngredients() {
	var ul = $('#ingredientsList > li')
	// show the first hidden item on a click
	$('#showIngredients').click(function() {
		ul.filter(':hidden:first').show();
	});
	// add an ingredient
	$("#addIngrBtn").click(function() {
		if($('#addIngrText').val() != '') {		// checking if there is no text
        	$("#ingredientsList").append('<li><span>' + $('#addIngrText').val() + '</span></li>');
        	$('#addIngrText').val('')		// setting the text to none
		}
        return false;
    });
}

// a function that includes the properties needed for the steps
function changeSteps() {

	var ol = $('#stepsList > li')
	// show the first hidden item on a click
	$('#showSteps').click(function() {
		ol.filter(':hidden:first').show();
	});
	// add a step
	$("#addStepBtn").click(function() {
		if($('#addStepText').val() != '') {		// checking if there is no text
        	$("#stepsList").append('<li><span>' + $('#addStepText').val() + '</span></li>');
        	$('#addStepText').val('')		// setting the text to none
		}
        return false;
    });
}

// the code can be further improving by creating a function that does what changeSteps and changeIngredients do by taking parameters, 
// but I chose not so as it is only 10 more lines of code this way