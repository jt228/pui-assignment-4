//This file is intended for tracking the goods ths user adds to his or her shopping bag

var shoppingBag = JSON.parse(localStorage.getItem("shoppingBag") || "[]");
var totalItems = JSON.parse(localStorage.getItem("totalItems") || "[]");
var wishList;

//Current product that is being viewed



//Calculate the Subtotal, Tax, and Total
var shoppingBagSubtotal=0;
var shoppingBagTax=0;
var shoppingBagTotal =0;

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

// function itemBag(id){
//   this.start ='<div class="col-2 shopping-cart-img-container">';
//   this.id = id;
//   this.end = '</div>';
// }


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
  var itemSize = "couch";
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

  currentProductBeingViewed(itemSelector);
  
  location.reload();
  }


 // jQuery methods go here...
$(document).ready(function(){
   
   //$('#all-bag-contents').append(function(){
  //result= "";
  if(shoppingBag.length != false){
    //If the visitor has placed items in the bag, they should display

    var totalItems = shoppingBag.length;

    var totalItemsStuff=document.getElementById("bag-item-total").innerHTML= "("+totalItems+")";
    //If we are on the bag page
    if ($("#bag-page-item-total").length >0){
      var totalItemsStuff=document.getElementById("bag-page-item-total").innerHTML= "("+totalItems+")";
      }

    for (i=0 ; i<shoppingBag.length ; i++){
      var id = i;
      var name = shoppingBag[i].name;
      var quantity = shoppingBag[i].quantity;
      var price = shoppingBag[i].price;
      var preview = shoppingBag[i].preview;
      var selector = shoppingBag[i].selector;
      getListItem(id,name,quantity,price,preview,selector).appendTo('#all-bag-contents').insertBefore('#template-item-div');
    }
  } else {
    //If there is nothing in the bag, display that bag is empty
    $("<p>Your shopping bag is empty.</p>").appendTo('#all-bag-contents').insertBefore('#template-item-div');
  }

  setUpdatedTotals();

});


function removeItemFromBag(){

  //shoppingBag.splice(0,0);
  // localStorage.setItem('shoppingBag', JSON.stringify('shoppingBag'));
  var removeButtonID= event.target.id;
  console.log(removeButtonID);
  // console.log(shoppingBag.length)
  // Get the item ID
  var removeDivID = $("#"+removeButtonID).parent().parent().parent().attr('id');

  //$("#"+removeDivID).remove();
  //Remove the item from the array
  shoppingBag.splice(removeDivID,1);
  //Resave local storage
  localStorage.setItem("shoppingBag", JSON.stringify(shoppingBag));
  console.log("shoppingBag");
  //Reload the page
  location.reload();
  
  //$("#remove-button").parents(test).remove();
  console.log("no of items in bag is "+shoppingBag.length);
  }


function calculateTotalItems(){
  totalItems=shoppingBag.length;
  localStorage.setItem("totalItems",JSON.stringify(totalItems))

}

