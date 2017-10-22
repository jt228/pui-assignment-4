var getListItem = function (newId,name,quantity,price,preview){

  $result = $("#template-item-div").clone();

  $result.attr("id",newId);

  console.log("This is whole item div id: "+newId);

  $result.css("visibility", "visible");

  $result.find("#bag-preview-image").attr("src",preview);

  $result.find("#item-name-label").text(name);

  $result.find("#quantity-id").val(quantity);

  $result.find("#span-item-price").val(price);

  $result.find("#remove-button").attr("id","remove-button-"+newId);
  var itemTotal =price*quantity;

  $result.find("#span-item-price-total").text(itemTotal);
  
  return $result;

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

