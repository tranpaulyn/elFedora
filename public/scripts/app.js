<<<<<<< HEAD
// const env = process.env.NODE_ENV || 'development';
// const knexConfig = require('./../../knexfile');
// const knex = require('knex')(knexConfig[env]);

$(document).ready(function() {
=======
>>>>>>> 3a6ab6b699ca0c45b07cfe13e0a244659ea997a9

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 50) {
      $("#nav-bar").css("background", "rgb(189, 178, 165, 0.5)");
    } else {
      $("#nav-bar").css("background", "transparent");
    }
  });
  // Food Nav
  $(document).on("scroll", function() {
    if ($(window).scrollTop() >= $(".hero-image").height()) {
      $(".col-3-left").addClass("col-3-left-fixed-top");
    }
    if ($(window).scrollTop() < $("#hero").height()) {
      $(".col-3-left").removeClass("col-3-left-fixed-top");
    }
  });
  // Render Menu Function
  $(function() {
    const renderMenuItem = function(menuData) {
      return `<article id="${menuData.id}" class="menu-item" data-name='${
        menuData.name
      }'>
    <header class="food-name">
    <span class="food-item">${menuData.name}</span>
    <span class="food-price">
    ${menuData.price}
    <br><br>
    <button data-id="${
      menuData.id
    }" style="margin-top:9px;" type="submit" class="btn btn-danger mb-2 add-to-cart">ADD</button>
    </span>
    </header>
    <section class="food-description">
    <p>${menuData.description}</p>
    </section>
    </article>`;
    };
    // Append Menu
    $(() => {
      $.ajax({
        method: "GET",
        url: "/api/menu"
      }).done(menu => {
        for (let item in menu) {
          const elm = renderMenuItem(menu[item]);
          $(".col-6").append(elm);
        }
      });
    });
    $(() => {
      $.ajax({
        method: "GET",
        url: "/api/menu"
      }).done(menu => {
        $("#menu-wrapper").on("click", ".add-to-cart", function() {
          const itemId = $(this).attr("data-id");
          const item = menu.find(i => i.id === Number(itemId));
          const $totalPriceElement = $("#totalPrice");
          const totalPrice = Number($totalPriceElement.text().substr(1));
          $totalPriceElement.show();
          $totalPriceElement.text(
            `\$${(totalPrice + Number(item.price)).toFixed(2)}`
          );
          let $cartItem = $(`#cart-item-${itemId}`);
          if ($cartItem.length) {
            const count = Number($cartItem.attr("data-count")) + 1;
            $cartItem.attr("data-count", count);
            $cartItem.text(`${item.name} x ${count} \$${item.price}`);
          } else {
            const $cartDiv = $("<div />");
            const $cartItem = $(
              `<p id="cart-item-${itemId}" class="cart-item" data-count='1'>`
            ).text(item.name + " x 1 $" + item.price);
            const $deleteButton = $(
              `<button type="Submit" class="btn btn-danger cart-item-delete">Delete</button>`
            );
            $deleteButton.on("click", function() {
              const cartItemCount = Number($cartItem.attr("data-count")) - 1;
              const currentTotalPrice =
                Number($totalPriceElement.text().substr(1)) -
                Number(item.price);
              $totalPriceElement.text(`\$${currentTotalPrice.toFixed(2)}`);
              if (cartItemCount <= 0) {
                $cartDiv.remove();
                if (currentTotalPrice <= 0) {
                  $("#logoBag").css("display", "block");
                  $("#build-order").css("display", "block");
                  $totalPriceElement.hide();
                }
              } else {
                $cartItem.attr("data-count", cartItemCount);
                $cartItem.text(
                  `${item.name} x ${cartItemCount} \$${item.price}`
                );
              }
            });
            $cartDiv.append($cartItem);
            $cartDiv.append($deleteButton);
            $cartItem.append();
            $(".appendCart").append($cartDiv);
          }
          $("#logoBag").css("display", "none");
          $("#build-order").css("display", "none");
        });
      });
    });
    // Checkout Cart
    $("#checkout").on("click", function() {
      console.log("yahoo");
    });
  });
<<<<<<< HEAD

//   Append Cart
let priceArray = [];

 $(() => {
   $.ajax({
     method: "GET",
     url: "/api/menu"
   }).done((menu) => {
    $("#menu-wrapper").on("click", ".add-to-cart", function() {
      const $menuArticle = $(this).closest('.menu-item');
      const foodName = $menuArticle.attr("data-name");
      let foodPrice = 0;

      // Find the price of the item clicked
      for(let item in menu) {
        if (menu[item].name === foodName) {
          foodPrice = menu[item].price;
        }
      }
    
      // checking if already in cart
      const $existingItem = $(`[data-cart-name='${foodName}']`);
  
      if ($existingItem.length) {
        priceArray.push(foodPrice)
        let counter = $existingItem.attr("data-count");
        counter = counter ? Number(counter) + 1 : 1;
        foodPrice = counter * foodPrice;
        foodPrice = foodPrice.toFixed(2);
        $existingItem.attr("data-count", counter, foodPrice).text(foodName + ' x ' + counter + '  $' + foodPrice)
      } else {
        priceArray.push(foodPrice)
        let $p = $(`<p class="cart-item" data-cart-name='${foodName}' data-count='1' data-price='${foodPrice}'>`).text(foodName + ' x 1 $' + foodPrice)
        $('.appendCart').append($p);

      }
      $('#logoBag').css('display', 'none');
      $('#build-order').css('display', 'none');
      $('#checkout').show();
      $('#customerInfo').show();
      $('.loading').hide();
      $('.cart-item').show();
      $('#customerInfo').show();

      // Total Price Business
      // Calculating Total Price
      let sum = 0;
      let totalPrice = 0;
      for (var i = 0; i < priceArray.length; i++) {
        sum += Number(priceArray[i])
      }
      totalPrice = sum.toFixed(2);
      // console.log(`$ ${totalPrice}`);
      $('#totalPrice').show();
      $('#totalPrice').replaceWith(`<h5 id="totalPrice">Total Price $ ${totalPrice}</h5>`) // Update Total Price
    })
   })
 })

});

$('#checkout').on('click', function() {
  event.preventDefault();
  $('.loading').show();
  $('#customerInfo').hide();
  $('#checkout').hide();
  $('#totalPrice').hide();
  $('.cart-item').hide();

  let customerName = ($('#InputName').val());
  let customerPhone = ($('#InputPhoneNumber').val());
  let orderTotal = ($('#totalPrice').text().replace("Total Price $ ", ""));
  let orderItems = ($('.cart-item').text())

  let addOrder = {
    customerName: customerName,
    phoneNumber: customerPhone,
    totalPrice: orderTotal,
    orderTicket: orderItems
  };

  console.log($('.cart-item').text());

  $.ajax({
    method: "POST",
    url: "/api/cart",
    data: addOrder
  });



  // console.log($('#InputName').val());
  // console.log($('#InputPhoneNumber').val());
  // console.log($('#totalPrice').text().replace("Total Price $ ", ""));


  
})

// $.post( "/api/cart", function( data ) {

// });


});
=======
});
>>>>>>> 3a6ab6b699ca0c45b07cfe13e0a244659ea997a9
