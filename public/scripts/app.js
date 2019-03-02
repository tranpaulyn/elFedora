
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
});
