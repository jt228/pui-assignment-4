var currentProduct = localStorage.getItem("currentProduct");

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

//This function is a general toggle toshow and hide a div
function toggleVisibility(){
    console.log("you clicked htis!");
    
    console.log(event.target.id);
    //.next('div').toggle();
    $(event.target).next(".toggle").fadeToggle("fast", function () {
    });
  }


function currentProductBeingViewed(x){

  //Click on the tile of a product
  currentProduct = x;
  localStorage.setItem("currentProduct",currentProduct);
  console.log("The currentProduct has been set to "+x);
}


//This is to templatize the tiles on the product page
var getProductTiles = function (name,price,preview,key){
  
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

  return tileClone;

}


//This is to templatize the shoppingbag list
var getListItem = function (newId,name,quantity,price,preview,selector){

  listItem = $("#template-item-div").clone();

  listItem.attr("id",newId);

  listItem.css("visibility", "visible");

  listItem.find("#bag-preview-image").attr("src",preview);

  listItem.find("#bag-preview-image").click(function() {currentProductBeingViewed(selector);});

  listItem.find("#item-name-label").text(name);

  listItem.find("#quantity-id").val(quantity);

  listItem.find("#span-item-price").val(price);

  listItem.find("#remove-button").attr("id","remove-button-"+newId);
  
  var itemTotal =price*quantity;

  listItem.find("#span-item-price-total").text(itemTotal);
  
  return listItem;

}

var setUpdatedTotals = function(){

  //Get the 
  for (i=0 ; i< shoppingBag.length; i++){
    var oldSubtotal=shoppingBagSubtotal;
    var price = shoppingBag[i].price;
    var quantity = shoppingBag[i].quantity;
    shoppingBagSubtotal =oldSubtotal + price*quantity;
  }

  shoppingBagSubtotal = Math.round(shoppingBagSubtotal).toFixed(2);
  shoppingBagTax = Math.round(shoppingBagSubtotal*.087).toFixed(2);
  shoppingBagTotal = Math.round(shoppingBagSubtotal+parseFloat(shoppingBagTax)).toFixed(2);

  $("#subtotal-value").text("$ "+shoppingBagSubtotal);
  $("#tax-value").text(shoppingBagTax);
  $("#total-value").text("$ "+shoppingBagTotal);

}




function updatePageWithCurrentProduct(x){
  var x = currentProduct;
  var y = x.value ;
  console.log("What is the value of currentProduct in updatePagewithCurrentProduct? "+x);

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

//This function will change the image in the the pillow on the product details page
function selectPillowShape(x){
  //Get the pillow shape from the drop down
  var x = document.getElementById('shape-selector').value;

  currentProduct = x;

  updatePageWithCurrentProduct(currentProduct);
  console.log("This is what gets printed in selectPillowShape for currentProduct="+currentProduct);

  //location.reload();

  // var x = currentProduct;
  // var y = x.value ;
  // console.log(x);

 //  //Replace the product name in breadcrumb, title and in the Product Description (same value)
 //  var productName = products[x].name;
 //  var pageTitle = document.getElementById("page-product-name");
  // var pageProductTitle = document.getElementById("title-product-name");
  // var selectedShapeOption = document.getElementById('shape-selector');
  // var prodDescriptionOne = document.getElementById("description-name-1");
  // var prodDescriptionTwo = document.getElementById("description-name-2");
  // pageTitle.innerHTML = productName;
  // pageProductTitle.innerHTML = productName;
  // prodDescriptionOne.innerHTML = productName;
  // prodDescriptionTwo.innerHTML = productName;
  // selectedShapeOption.value = x;

 //  //Update breadcrumb with correct product ID
 //  var productID = products[x].id;
 //  var pageProductID = document.getElementById("item-number-span");
 //  pageProductID.innerHTML = productID;


 //  //Update title of the page with the correct product description

 //  //Update product image
 //  var productImage = products[x].image;
  // var pageProductImage = document.getElementById("detail-product-image");
  // pageProductImage.src = productImage;

 //  //Change the item description
 //  var productShapeDescription = products[x].description;
 //  var pageProductShapeDescription = document.getElementById("product-description-text");
 //  pageProductShapeDescription.innerHTML = productShapeDescription;

  //location.reload();
}