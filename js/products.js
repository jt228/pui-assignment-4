var products = {

  "couchBear": {
      "name": "Couch Bear",
      "id": "CB123",
      "size": "couch",
      "shape": "bear",
      "price": "335",
      "image": "images/couch-bear.png",
      "preview": "images/preview-couch-bear.png",
      "link": "detail.html",
      "description": "Curl up with this charismatic emblem of childhood which adds sophistication and warmth to any room. Scaled  to enhance the comfort of the modern couch.",
    },

  "couchCat": {
      "name": "Couch Cat",
      "id": "CC123",
      "size": "couch",
      "shape": "cat",
      "price": "335",
      "image": "images/couch-cat.png",
      "preview": "images/preview-couch-cat.png",
      "link": "detail.html",
      "description": "A substitute for the rarest of creatures - the lap-cat. Will endure infinite pets and never devour your shoelaces. The perfect, submissive pet.",
    },

  "couchDog": {
      "name": "Couch Dog",
      "id": "CD123",
      "size": "couch",
      "shape": "dog",
      "price": "335",
      "image": "images/couch-dog.png",
      "preview": "images/preview-couch-dog.png",
      "link": "detail.html",
      "description": "A compliment to your loyal pet, this pillow allows you to have friendship and cuddles without worrying about soiling the couch.",
    },    

  "couchRabbit": {
      "name": "Couch Rabbit",
      "id": "CR123",
      "size": "couch",
      "shape": "rabbit",
      "price": "335",
      "image": "images/couch-rabbit.png",
      "preview": "images/preview-couch-rabbit.png",
      "link": "detail.html",
      "description": "Snuggling a real bunny can be a real challenge. (No one wants to be Lenny.) Squeeze this couch friend as much as you like without fear of snuffing him out.",
    },
  
  "couchRound": {
      "name": "Couch Round",
      "id": "CN123",
      "size": "couch",
      "shape": "round",
      "price": "335",
      "image": "images/couch-round.png",
      "preview": "images/preview-couch-round.png",
      "link": "detail.html",
      "description": "Embrace this plush friend while reclining on your cold leather couch. Gaze into his eyes when you need to remind yourself that you are not alone.",
    },

  "couchSquare": {
      "name": "Couch Square",
      "id": "CS123",
      "size": "couch",
      "shape": "square",
      "price": "335",
      "image": "images/couch-square.png",
      "preview": "images/preview-couch-square.png",
      "link": "detail.html",
      "description": "Camouflage your comfort creature on your virgin sheepskin throw. Place him face down when company’s over; flip him over when you need a real pal.",
    },

    "poufBear":{
      "name": "pouf bear",
      "id": "PB123",
      "size": "pouf",
      "shape": "bear",
      "price": "535",
      "image": "images/pouf-bear.png",
      "preview": "images/preview-pouf-bear.png",
      "link": "detail.html",
      "description": "Support is a necessary part of life. Lean on a pouf bear as you read the news, consoling you when it's bad.",
    },

    "bodyBear":{
      "name": "body bear",
      "id": "BB123",
      "size": "body",
      "shape": "bear",
      "price": "735",
      "image": "images/body-bear.png",
      "preview": "images/preview-body-bear.png",
      "link": "detail.html",
      "description": "Modern beds look great, but they can feel cold. Body bears can warm your sheets and heart.",
    },

    "roundBear":{
      "name": "round bear",
      "id": "RB123",
      "size": "round",
      "shape": "bear",
      "price": "1035",
      "image": "images/round-bear.png",
      "preview": "images/preview-round-bear.png",
      "link": "detail.html",
      "description": "Do you really need this? The answer is yes.",
    },

}


$(document).ready(function(){
  //  var pageTitleInHead = $this.find("title").text();
    //if( pageTitleInHead === "Flip Stitch Pillows - Product Details"){
     // $('#product-tile-template').text("This is stub text");
    //};
  var productArray =Object.keys(products);

  console.log(productArray.length);

  for (i=(productArray.length-1); i >=0 ; i--){

     //Get the product key that will set the current product
    var productArrayKey = productArray[i];

    //Get the custoemer friendly name
    var productName = products[productArrayKey]["name"];

    //Get the product price to display on tile
    var productPrice = products[productArrayKey]["price"];

    //Get the product image "preview"
    var productPreview= products[productArrayKey]["preview"];   

    console.log(productArrayKey+" "+productPrice+" "+productPreview+" "+productName );

    //Generate tile
    getProductTiles(productName,productPrice,productPreview,productArrayKey).appendTo('#product-shopping-section').insertBefore('#product-tile-template');
    };

    
  });