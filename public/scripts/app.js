$(document).ready(function() {
  $(window).scroll(function () {
      if ($(window).scrollTop() >= 50) {
      $('#nav-bar').css('background','rgb(189, 178, 165, 1)');
      } else {
      $('#nav-bar').css('background','transparent');
      }
      });
  
  // Food Nav 
  $(document).on('scroll', function () {
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
      return `<article id="${menuData.id}" class="menu-item" data-name='${menuData.name}'>
      <header class="food-name">
      <span class="food-item">${menuData.name}</span>
      <span class="food-price">
      ${menuData.price}
      <br><br>
      <button data-id="${menuData.id}" style="margin-top:9px;" type="submit" class="btn btn-danger mb-2 add-to-cart">ADD</button>
      </span>
      </header>
      <section class="food-description">
      <p>${menuData.description}</p>
      </section>
      </article>`
    };
  
  // Append Menu
    $(() => {
      $.ajax({
        method: "GET",
        url: "/api/menu"
      }).done((menu) => {
        for(let item in menu) {
          const elm = renderMenuItem(menu[item]);
          $('.col-6').append(elm);
        }
      });
    });  
   $(() => {
     $.ajax({
       method: "GET",
       url: "/api/menu"
     }).done((menu) => {
      $("#menu-wrapper").on("click", ".add-to-cart", function() {
        const itemId = $(this).attr("data-id");
        const $textTotal = $('#totalText')
        const item = menu.find(i => i.id === Number(itemId));
        const $totalPriceElement = $("#totalPrice");
        const totalPrice = Number($totalPriceElement.text().substr(1));
        $totalPriceElement.show();
        $totalPriceElement.text(
           `\$${(totalPrice + Number(item.price)).toFixed(2)}`
        );
        $textTotal.show()
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
                $('#customerInfo').hide();
                $textTotal.hide()
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
        $("#customerInfo").show();
        $("#checkout").show();
      });
    });
  });
  
  $('#checkout').on('click', function() {
    event.preventDefault();
    $('.loading').show();
    $('#customerInfo').hide();
    $('#checkout').hide();
    $('#totalPrice').hide();
    $('.cart-item').hide();
    $('.cart-item-delete').hide();
    $('#totalText').hide();
  
    let customerName = ($('#InputName').val());
    let customerPhone = ($('#InputPhoneNumber').val());
    let orderTotal = ($('#totalPrice').text().replace("$", ""));
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
   
  
    function explode(){
      $('.loading').hide();
      $('.col-3-right').append("<h6>Your order will be ready in 45 minutes!</h6>");
      $('.col-3-right').append(`<img src="/images/tenor.gif">`);
    }
    setTimeout(explode, 28000);
    
  })
  
  });

// this is just for back to top button
(function(){
  // Back to Top - by CodyHouse.co
var backTop = document.getElementsByClassName('js-cd-top')[0],
  // browser window scroll (in pixels) after which the "back to top" link is shown
  offset = 300,
  //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  offsetOpacity = 1200,
  scrollDuration = 700,
  scrolling = false;
if( backTop ) {
  //update back to top visibility on scrolling
  window.addEventListener("scroll", function(event) {
    if( !scrolling ) {
      scrolling = true;
      (!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
    }
  });
  //smooth scroll to top
  backTop.addEventListener('click', function(event) {
    event.preventDefault();
    (!window.requestAnimationFrame) ? window.scrollTo(0, 0) : scrollTop(scrollDuration);
  });
}

function checkBackToTop() {
  var windowTop = window.scrollY || document.documentElement.scrollTop;
  ( windowTop > offset ) ? addClass(backTop, 'cd-top--show') : removeClass(backTop, 'cd-top--show', 'cd-top--fade-out');
  ( windowTop > offsetOpacity ) && addClass(backTop, 'cd-top--fade-out');
  scrolling = false;
}

function scrollTop(duration) {
    var start = window.scrollY || document.documentElement.scrollTop,
        currentTime = null;
        
    var animateScroll = function(timestamp){
      if (!currentTime) currentTime = timestamp;        
        var progress = timestamp - currentTime;
        var val = Math.max(Math.easeInOutQuad(progress, start, -start, duration), 0);
        window.scrollTo(0, val);
        if(progress < duration) {
            window.requestAnimationFrame(animateScroll);
        }
    };

    window.requestAnimationFrame(animateScroll);
}

Math.easeInOutQuad = function (t, b, c, d) {
   t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

//class manipulations - needed if classList is not supported
function hasClass(el, className) {
    if (el.classList) return el.classList.contains(className);
    else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}
function addClass(el, className) {
  var classList = className.split(' ');
   if (el.classList) el.classList.add(classList[0]);
   else if (!hasClass(el, classList[0])) el.className += " " + classList[0];
   if (classList.length > 1) addClass(el, classList.slice(1).join(' '));
}
function removeClass(el, className) {
  var classList = className.split(' ');
    if (el.classList) el.classList.remove(classList[0]);	
    else if(hasClass(el, classList[0])) {
      var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
      el.className=el.className.replace(reg, ' ');
    }
    if (classList.length > 1) removeClass(el, classList.slice(1).join(' '));
}
})();
});