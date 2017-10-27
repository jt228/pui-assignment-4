//This file is intended for tracking the goods ths user adds to his or her wishList


//Key varialbes in this file
var wishList = JSON.parse(localStorage.getItem("wishList") || "[]");
var totalWishListItems = JSON.parse(localStorage.getItem("totalWishListItems") || "[]");

//Get the user's selection from the page and add them to the bag
function addItemToWishList(){
  //Identify the object type on page using the item number. 
  //Get the selector
  var itemSelector = document.getElementById('shape-selector').value;
  //Get the item number
  var itemID= document.getElementById('item-number-span').innerHTML;
  //Get the item name
  var itemName = document.getElementById('title-product-name').innerHTML;
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
  //Use the information gathered from the JSON file to create a new object to add to your wishlist
  var item = new itemAddedToBag(itemSelector,itemID, itemName, itemShape, itemSize, itemQuantity, itemRequest,itemPrice,itemPreview,itemLink );
  //Add item to the wishList array
  wishList.push(item);
  //Save to local storage
  localStorage.setItem("wishList", JSON.stringify(wishList));
  //Update the total number of items
  currentProductBeingViewed(itemSelector);
  //location.reload();
  //The current page should be reloaded so the shopping bag will be updated after displaying this modal
  showModal(true);
  }


 // jQuery methods go here...
$(document).ready(function(){
  //Display the correct status of wishlist - either the items or an empty state message
  if(wishList.length != false){
    //If the visitor has placed items in the wishlist, they should display
    var totalWishList = wishList.length;
    //Display the total items that are in the wishlist
    if ($("#wishlist-item-total").length >0){
      var totalItemsStuff=document.getElementById("wishlist-item-total").innerHTML= "("+totalWishList+")";
      }
    //Loop through the wishlist and display its contents
    for (i=0 ; i<wishList.length ; i++){
      var id = i;
      var name = wishList[i].name;
      var quantity = wishList[i].quantity;
      var price = wishList[i].price;
      var preview = wishList[i].preview;
      var selector = wishList[i].selector;
      var request = wishList[i].request;
      //Use the template to create as many items in the list as there are in the wishlist
      getListItem(id,name,quantity,price,preview,selector,request).appendTo('#wishlist-contents').insertBefore('#template-item-div');
    }
  } else {
    //If there is nothing in the bag, display that bag is empty
    $("<p>Wish for more. <a href='products.html'>Shop now.</a></p>").appendTo('#wishlist-contents').insertBefore('#template-item-div');
  }

});


function removeItemFromWishList(){
  // localStorage.setItem('shoppingBag', JSON.stringify('shoppingBag'));
  var removeButtonID= event.target.id;
  // Get the item ID
  var removeDivID = $("#"+removeButtonID).parent().parent().parent().attr('id');
  //Remove the item from the array
  wishList.splice(removeDivID,1);
  //Resave local storage
  localStorage.setItem("wishList", JSON.stringify(wishList));
  //Reload the page
  location.reload();
  }


function calculateTotalWishListItems(){
  totalWishListItems=wishList.length;
  localStorage.setItem("totalWishListItems",JSON.stringify(totalWishListItems));

}

//Switch to Bag
//This allows the users to send items from their wishlists to their shopping bags
function sendToShoppingBag(){
  //Figure out which item in the wishlist was clicked to send it to 
  var switchButtonID= event.target.id;
  //Using the id of the button, find the correct
  var switchItem = switchButtonID.length;
  //Move item to Bag. To do this, use the item id to select the item from the wishListArray
  var itemSelector = wishList[switchItem].selector;
  //Get the item number
  var itemID= wishList[switchItem].id;
  //Get the item name
  var itemName = wishList[switchItem].name;
  //Get the shape
  var itemShape = wishList[switchItem].shape;
  //For the sake of this exercise, all objects are of the same size.
  var itemSize = wishList[switchItem].size;
  //Get the quantity
  var itemQuantity = wishList[switchItem].quantity;
  //Get the Customization  message if necessary
  var itemRequest = wishList[switchItem].request;
  //Get the price of the selected pillow
  var itemPrice = wishList[switchItem].price;
  //Get the preview image for the selected pillow
  var itemPreview = wishList[switchItem].preview;
  //Get the preview image for the selected pillow
  var itemLink = wishList[switchItem].link;
  //Take the elements and construct an new itemAddedToBag
  var item = new itemAddedToBag(itemSelector,itemID, itemName, itemShape, itemSize, itemQuantity, itemRequest,itemPrice,itemPreview,itemLink );
  //Add the item to the shopping bag array
  shoppingBag.push(item);
  //Save to local storage
  localStorage.setItem("shoppingBag", JSON.stringify(shoppingBag));
  //Update the total number of items
  calculateTotalItems();
  // Get the item ID
  var switchDivID = $("#"+switchItem).parent().parent().parent().attr('id');
  //Remove the item from the array
  wishList.splice(switchDivID,1);
  //Resave local storage
  localStorage.setItem("wishList", JSON.stringify(wishList));
  //Reload the page so it reflects new item count
  location.reload(); 

}

