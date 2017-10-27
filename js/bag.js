//This file is intended for tracking the goods ths user adds to his or her shopping bag

//Key varialbes in this file
//Store the shopping bag and the total items in that bag in local storage to ensure the customer has access to shopping experience when he returns to this page.
var shoppingBag = JSON.parse(localStorage.getItem("shoppingBag") || "[]");
var totalItems = JSON.parse(localStorage.getItem("totalItems") || "[]");

//Calculate the Subtotal, Tax, and Total
var shoppingBagSubtotal=0;
var shoppingBagTax=0;
var shoppingBagTotal =0;

//Create identical items whether they are aded to the shopping bag or wishlist.
function itemAddedToBag (selector,id,name,shape,size,quantity,request,price,preview,link){
  this.selector=selector;
  this.id = id;
  this.name= name;
  this.shape = shape;
  this.size = size;
  this.quantity= quantity;
  this.request = request;
  this.price=price;
  this.preview=preview;
  this.link= link;
}

//Get the user's selection from the page and add them to the bag
function addItemToBag(){
  //Identify the object type on page using the item number. 
  //Get the selector
  var itemSelector = document.getElementById('shape-selector').value;
  //Get the item number
  var itemID= document.getElementById('item-number-span').innerHTML;
  //Get the item name
  var itemName = document.getElementById('title-product-name').innerHTML;
  console.log(itemName);
  //Get the shape
  var selectedShapeInput = document.getElementById('shape-selector');
  var itemShape = selectedShapeInput.options[selectedShapeInput.selectedIndex].text;
  //For the sake of this exercise, all objects are of the same size.
  var itemSize = products[itemSelector].size;
  //Get the quantity
  var itemQuantity = document.getElementById('quantity-requested').value;
  //Get the Customization  message if necessary
  var itemRequest = document.getElementById('custom-request').value;
  //Get the price of the selected pillow
  var itemPrice = document.getElementById('item-price-span').innerHTML;
  //Get the preview image for the selected pillow
  var itemPreview = products[itemSelector].preview;
  //Get the preview image for the selected pillow
  var itemLink = products[itemSelector].link;
  //Get the link for the selected pillow
  console.log(itemSelector,itemID, itemName, itemShape, itemSize, itemQuantity, itemRequest,itemPrice,itemPreview,itemLink );
  var item = new itemAddedToBag(itemSelector,itemID, itemName, itemShape, itemSize, itemQuantity, itemRequest,itemPrice,itemPreview,itemLink );
  shoppingBag.push(item);
  console.log(item)
  //Save to local storage
  localStorage.setItem("shoppingBag", JSON.stringify(shoppingBag));
  //Update the total number of items
  calculateTotalItems();
  //The current product should be updated in case the user refreshes the page
  currentProductBeingViewed(itemSelector);
  //The current page should be reloaded so the shopping bag will be updated after displaying this modal
  showModal("false");
}


 // jQuery methods go here...
$(document).ready(function(){
  //Update the shopping bag based on what the customer has selected.
  if(shoppingBag.length != false){
    //If the visitor has placed items in the bag, they should display
    var totalItems = shoppingBag.length;
    var totalItemsStuff=document.getElementById("bag-item-total").innerHTML= "("+totalItems+")";
    //If we are on the bag page, display the total in the bag
    if ($("#bag-page-item-total").length >0){
      var totalItemsStuff=document.getElementById("bag-page-item-total").innerHTML= "("+totalItems+")";
      }
    //Pass the information from the shoppingList array so it can be displayed
    for (i=0 ; i<shoppingBag.length ; i++){
      //Get the relevant id, name, quantitiy, price, preview, slector, and request into the template
      var id = i;
      var name = shoppingBag[i].name;
      var quantity = shoppingBag[i].quantity;
      var price = shoppingBag[i].price;
      var preview = shoppingBag[i].preview;
      var selector = shoppingBag[i].selector;
      var request = shoppingBag[i].request;
      //Send the id, name, quantitiy, price, preview, slector, and request into the template
      getListItem(id,name,quantity,price,preview,selector,request).appendTo('#all-bag-contents').insertBefore('#template-item-div');
    }
  } else {
    //If there is nothing in the bag, display that bag is empty
    $("<p>Your shopping bag is empty.</p>").appendTo('#all-bag-contents').insertBefore('#template-item-div');
  }
  //Update totals for the bag
  setUpdatedTotals();
});


function removeItemFromBag(){
  //Figure out which button is being clicked.
  var removeButtonID= event.target.id;
  // Get the item ID
  var removeDivID = $("#"+removeButtonID).parent().parent().parent().attr('id');
  //Remove the item from the array
  shoppingBag.splice(removeDivID,1);
  //Resave local storage
  localStorage.setItem("shoppingBag", JSON.stringify(shoppingBag));
  //Reload the page
  location.reload();
}


function calculateTotalItems(){
  totalItems=shoppingBag.length;
  localStorage.setItem("totalItems",JSON.stringify(totalItems))
}

function sendToWishList(){
  //FIgure out which item is being clicked
  var switchButtonID= event.target.id;
  var switchItem = switchButtonID.length;
  //Move item to Bag
  var itemSelector = shoppingBag[switchItem].selector;
  //Get the item number
  var itemID= shoppingBag[switchItem].id;
  //Get the item name
  var itemName = shoppingBag[switchItem].name;
  //var selectedShapeInput = wishList[switchItem].shape;
  var itemShape = shoppingBag[switchItem].shape;
  //For the sake of this exercise, all objects are of the same size.
  var itemSize = shoppingBag[switchItem].size;
  //Get the quantity
  var itemQuantity = shoppingBag[switchItem].quantity;
  //Get the Customization  message if necessary
  var itemRequest = shoppingBag[switchItem].request;
  //Get the price of the selected pillow
  var itemPrice = shoppingBag[switchItem].price;
  //Get the preview image for the selected pillow
  var itemPreview = shoppingBag[switchItem].preview;
  //Get the link for the requested pillow
  var itemLink = shoppingBag[switchItem].link;
  //Create a new item that can be stored in the wishList 
  var item = new itemAddedToBag(itemSelector,itemID, itemName, itemShape, itemSize, itemQuantity, itemRequest,itemPrice,itemPreview,itemLink );
  //Add that item to the wishList
  wishList.push(item);
  //Save to local storage
  localStorage.setItem("wishList", JSON.stringify(wishList));
  //Update the total number of items
  calculateTotalItems();
  // Get the item ID
  var switchDivID = $("#"+switchItem).parent().parent().parent().attr('id');
  //Remove the item from the array
  shoppingBag.splice(switchDivID,1);
  //Resave local storage
  localStorage.setItem("shoppingBag", JSON.stringify(shoppingBag));
  //Reload the page
  location.reload();
}

