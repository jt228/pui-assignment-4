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

//This function will change the image in the the pillow on the product details page
function selectPillowShape(x){
	//Find out the current size of pillow



	//Get the pillow shape from the drop down
	var x = document.getElementById('shape-selector').value;
	var y = x.value ;
	console.log(x);

  //Replace the product name in breadcrumb, title and in the Product Description (same value)
  var productName = products[x].name;
  var pageTitle = document.getElementById("page-product-name");
	var pageProductTitle = document.getElementById("title-product-name");
	var prodDescriptionOne = document.getElementById("description-name-1");
	var prodDescriptionTwo = document.getElementById("description-name-2");
	pageTitle.innerHTML = productName;
	pageProductTitle.innerHTML = productName;
	prodDescriptionOne.innerHTML = productName;
	prodDescriptionTwo.innerHTML = productName;

  //Update breadcrumb with correct product ID
  var productID = products[x].id;
  var pageProductID = document.getElementById("item-number-span");
  pageProductID.innerHTML = productID;


  //Update title of the page with the correct product description

  //Update product image
  var productImage = products[x].image;
	var pageProductImage = document.getElementById("detail-product-image");
	pageProductImage.src = productImage;

  //Change the item description
  var productShapeDescription = products[x].description;
  var pageProductShapeDescription = document.getElementById("product-description-text");
  pageProductShapeDescription.innerHTML = productShapeDescription;


}

