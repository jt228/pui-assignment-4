// Javascript substitute for $( document ).ready()
window.onload= function() {
    console.log( "ready!" );

}


//This will cause the filtering options on the product page for Size
function showSizeFilter(y){

		//Get the right thing to modify!
		var x = document.getElementById("size-filters");

	    if (y.innerHTML === "Select") {
	    	 x.style.display = "block"; //Change to visibility: visible
	        y.innerHTML="Hide"; //Change the filter text to Hide

	    } else if (y.innerHTML === "Hide"){
	       	x.style.display = "none"; //Change to visibility: not visible
	       	y.innerHTML="Select"; //Change the filter text to Select
	    }
	}


//This will cause the filtering options on the product page for Shape
function showShapeFilter(y){

		//Get the right thing to modify!
		var x = document.getElementById("shape-filters");

	    if (y.innerHTML === "Select") {
	    	 x.style.display = "block";  //Change to visibility: visible    
	        y.innerHTML="Hide"; //Change the filter text to Hide

	    } else if (y.innerHTML === "Hide"){
	       	x.style.display = "none"; //Change to visibility: not visible
	       	y.innerHTML="Select"; //Change the filter text to Select
	    }
	}


//This function will make the Customize box visible
function customizePillow(y) {
	    var x = document.getElementById("custom-request-section");

	    console.log( "ready to customizePillow!" );

	    if (y.value == 1) {

	        x.style.display = "block"; //Change to visibility: visible

	    } else {

	        x.style.display = "none"; //Change to visibility: not visible

	    }
	}