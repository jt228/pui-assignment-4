//This file is intended for tracking the goods ths user adds to his or her shopping bag

var shoppingBag = new Array;

function itemAddedToBag (id,shape,size,quantity,request,price){
    this.id = id;
    this.shape = shape;
    this.size = size;
    this.quantity= quantity;
    this.request = request;
    this.price=price;
}

//Change the product information on the page when the shape is changed
function updateDetailPage(){
  //Look  up the item that was selected

  //Change the item name

  //Change the item price

  //Change the item image

  //Change the item description

}


//Get the user's selection from the page and add them to the bag
function addItemToBag(){
  //Identify the object type on page using the item number
  var size = "couch";
  //Get the item number
  var itemNo= document.getElementById('item-number-span').text;
  //Get the shape
  var selectedShape = document.getElementById('shape-selector').value;
  //Get the quantity
  var selectedQuantity = document.getElementById('quantity-requested').value;
  //Get the Customization  message if necessary
  var customRequest = document.getElementById('custom-request').value;
  //Get the price of the selected pillow
  var itemPrice = document.getElementById('item-price-span').value;
  console.log(selectedShape, selectedQuantity, customRequest);
  itemAddedToBag(itemNo, selectedShape, size, selectedQuantity, customRequest);
  shoppingBag.push(itemAddedToBag);
  console.log(itemAddedToBag);
  console.log(shoppingBag);
  //Save to local storage
  localStorage.setItem("shoppingBag", JSON.stringify(shoppingBag));

}



function displayShoppingBag(){
  //For each item in the bag, display it on the shopping bag page


}

function removeItemFromBag(){
  //Remove the total collection of items 
  // localStorage.removeItem("savedAnimal");
}

