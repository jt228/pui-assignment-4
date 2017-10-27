// Javascript substitute for $( document ).ready()

function showModal(x){
//Display appropriate content and links based on whether the user adds something to the shopping bag or the wishlist
	if(x=="false"){
		//Display this information if added to shopping bag
		document.getElementById("modal-text").innerHTML="Added to your shopping bag!";
		document.getElementById("destination").innerHTML="Continue to Checkout";
		document.getElementById("destination-link").href="bag.html";
		}else{
		//Display this information if added to shopping bag
		document.getElementById("modal-text").innerHTML="Added to your wishlist!";
		document.getElementById("destination").innerHTML="See Wishlist";
		document.getElementById("destination-link").href="account.html";
		}
	//Make the modal visibilbe
	document.getElementById("detail-page-modal").style.visibility='visible';
}

function closeModal(){
	//hide the modal
	document.getElementById("detail-page-modal").style.visibility='hidden';
	//The current page should be reloaded so the shopping bag will be updated.
  location.reload();
}

//Always set the page with the current variable
$(document).ready(function(){
		updatePageWithCurrentProduct(currentProduct);
});