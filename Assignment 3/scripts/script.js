// don't execute any JS until after the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
	setEmptyList("ingredientsList");
	setEmptyList("stepsList");

	showHideItems("showIngredients", "ingredientsList");
	showHideItems("showSteps", "stepsList");
	// hideAllItems("hideIngredients", "ingredientsList");
	// hideAllItems("hideSteps", "stepsList");

});

function setEmptyList(listId) {
	var list = document.getElementById(listId);
	var length = list.children.length;
	for(var i = 0; i < length; i++)
		list.children[i].style.display="none"
}
function showHideItems(buttonId, listId) {
	var btn = document.getElementById(buttonId);
	var list = document.getElementById(listId);
	var length = list.children.length;

	var counter = 0;
	btn.addEventListener("click", function() {
		if(btn.innerHTML == "Hide Steps!") {
			setEmptyList(listId);
			btn.innerHTML = "Show Steps!";
		}
		else if(btn.innerHTML == "Hide Ingredients!") {
			setEmptyList(listId);
			btn.innerHTML = "Show Ingredients!";
		}
		else if (btn.innerHTML == "Show Steps!") {
			list.children[counter].style.display="revert";
			counter++;
			if(counter == length) {
				counter=0;
				btn.innerHTML = "Hide Steps!";
			}
		}
		else if (btn.innerHTML == "Show Ingredients!") {		
			list.children[counter].style.display="revert";
			counter++;
			if(counter == length) {
				counter=0;
				btn.innerHTML = "Hide Ingredients!";
			}
		}
	});
}