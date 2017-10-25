// Javascript substitute for $( document ).ready()

function closeModal(){
}

$(document).ready(function(){
	//	var pageTitleInHead = $this.find("title").text();
		console.log("On page load, the value of currentProduct is "+currentProduct);
		updatePageWithCurrentProduct(currentProduct);
	});