//Key variables in this file
//The product the user is currently looking at
var currentProduct = localStorage.getItem("currentProduct");

//This will cause the filtering options on the product page for Size to show or hide
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

//This will cause the filtering options on the product page for Shape to show or hide
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
  //Only display the custom request section if the user selects "yes"
  if (y.value == 1) {
      x.style.display = "block"; //Change to visibility: visible
  } else {
      x.style.display = "none"; //Change to visibility: not visible
  }
}

//This function is a general toggle toshow and hide a div
function toggleVisibility(){
  //Toggle the visibility of the custom request section
  $(event.target).next("#custom-request-section").fadeToggle();
}

//This function sets the value of the product that is currently being viewed.
function currentProductBeingViewed(x){
  //Click on the tile of a product will set the value of the item being viewed.
  currentProduct = x;
  localStorage.setItem("currentProduct",currentProduct);
}

//This is to templatize the tiles on the product page
var getProductTiles = function (name,price,preview,key){
  //Use template to create many tiles
  tileClone = $("#product-tile-template").clone();
  //Set visibility of tile
  tileClone.css("visibility", "visible");
  //Set preview
  tileClone.find("#product-tile-image").attr("src",preview);
  //Set product name
  tileClone.find("#product-tile-name").text(name);
  //Set product price
  tileClone.find("#product-tile-price-label").text("$"+price);
  //Set the onclick event to set the clicked tile as teh current product
  tileClone.click(function() {currentProductBeingViewed(key);});
  //Return the tile that was created for display.
  return tileClone;
}

//This is to templatize the shopping bag and the wish list.
var getListItem = function (newId,name,quantity,price,preview,selector,request){
  //Use the hidden template to duplicate list items.
  listItem = $("#template-item-div").clone();
  //Set the newly made item to visible.
  listItem.css("visibility", "visible");
  //Assign the item in the list an id based on the id
  listItem.attr("id",newId);
  //Assign the correct name to the item added to the bag.
  listItem.css("visibility", "visible");
  //Assign the correct thumbnail image to the item added to the bag.
  listItem.find("#bag-preview-image").attr("src",preview);
  //Make it so the customer can go back an view the full description of the product they are purchasing.
  listItem.find("#bag-preview-image").click(function() {currentProductBeingViewed(selector);});
  //Assign the correct name to the item added to the bag.
  listItem.find("#item-name-label").text(name);
  //Assign the correct quanitity to the item added to the bag.
  listItem.find("#quantity-id").val(quantity);
  //Assign the price of the individual item to the item on the list or in teh bag
  listItem.find("#span-item-price").val(price);
  //Give each remove button button a distinct id to ensure that only teh right item will be removed.
  listItem.find("#remove-button").attr("id","remove-button-"+newId);
  //Only show  the customize link if the customer has decided to customize an item
  if(request==""){
    //This hides the customer request link. In terms of UX, I would likely make this visible all the time. However, I wantd to see if I could do this.
    listItem.find("#custom-request-link").css("visibility","hidden");
  }else{
    //If the customer does want to customize an item, the link will show and the user can expand to see the request.
    listItem.find("#custom-request-text").val(request);
  }
  //For each item, calculate the price of the quantity of the item selected.
  var itemTotal =price*quantity;
  //Add the calculcation of this item subtotal to the appropriate div.
  listItem.find("#span-item-price-total").text(itemTotal);
  //Return the list item to the function for display.
  return listItem;
}

//Calculate the total balues for the shopping bag
var setUpdatedTotals = function(){
  //Get the total of items before tax by looping through the shopping bag
  for (i=0 ; i< shoppingBag.length; i++){
    //Identify what the shoppingBagSubtotal is up until this point 
    var oldSubtotal=shoppingBagSubtotal;
    //Get the price for the specific item in the shopping bag
    var price = shoppingBag[i].price;
    //Get the quantity of items selected in the shopping bag
    var quantity = shoppingBag[i].quantity;
    //
    shoppingBagSubtotal =oldSubtotal + price*quantity;
  }
  //Convert the shopping bag total to decimals
  shoppingBagSubtotal = Math.round(shoppingBagSubtotal).toFixed(2);
  //Calculate the value of the tax on this amount and round it to the nearest cent
  shoppingBagTax = Math.round(shoppingBagSubtotal*.087).toFixed(2);
  //Add the subtotal and tax to calculate to the total
  shoppingBagTotal = Math.round(shoppingBagSubtotal+parseFloat(shoppingBagTax)).toFixed(2);
  //Set the subtotal, tax, and total in the shopping bag
  $("#subtotal-value").text("$ "+shoppingBagSubtotal);
  $("#tax-value").text(shoppingBagTax);
  $("#total-value").text("$ "+shoppingBagTotal);
}

//Update the product detail to reflect the item set as the currentProduct
function updatePageWithCurrentProduct(x){
  var x = currentProduct;
  var y = x.value ;
  //Replace the product name in breadcrumb, title and in the Product Description (same value)
  var productName = products[x].name;
  var pageTitle = document.getElementById("page-product-name");
  var pageProductTitle = document.getElementById("title-product-name");
  var selectedShapeOption = document.getElementById('shape-selector');
  var prodDescriptionOne = document.getElementById("description-name-1");
  var prodDescriptionTwo = document.getElementById("description-name-2");
  pageTitle.innerHTML = productName;
  pageProductTitle.innerHTML = productName;
  prodDescriptionOne.innerHTML = productName;
  prodDescriptionTwo.innerHTML = productName;
  selectedShapeOption.value = x;
  //Update breadcrumb with correct product ID
  var productID = products[x].id;
  var pageProductID = document.getElementById("item-number-span");
  pageProductID.innerHTML = productID;
  //Update product image
  var productImage = products[x].image;
  var pageProductImage = document.getElementById("detail-product-image");
  pageProductImage.src = productImage;
  //Change the item description
  var productShapeDescription = products[x].description;
  var pageProductShapeDescription = document.getElementById("product-description-text");
  pageProductShapeDescription.innerHTML = productShapeDescription;
}

//This function will change the image in the the pillow on the product details page
function selectPillowShape(x){
  //Get the pillow shape from the drop down
  var x = document.getElementById('shape-selector').value;
  //Set the current product you are viewing. This way, if the user refresh the same page, this product will still show.
  currentProduct = x;
  //Update the page with the current product and it's related content
  updatePageWithCurrentProduct(currentProduct);
}