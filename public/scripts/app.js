$(document).ready(function() {

// Connors Twillio API
  const MessagingResponse = require('twilio').twiml.MessagingResponse;
  
  const app = express();
  
  app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
  
    twiml.message('The Robots are coming! Head for the hills!');
    console.log(res.body);
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
  });
  
  

$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
    $('#nav-bar').css('background','rgb(189, 178, 165, 0.5)');
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
    return `<article class="menu-item">
    <header class="food-name">
    <span class="food-item">${menuData.name}</span>
    <span class="food-price">
    ${menuData.price}
    <br><br>
    <form class="form-inline" style="float:right; margin-right:-3em;">
    <div class="form-group mb-2">
      <label for="quantity" class="sr-only">Quantity</label>
      <input style="width:50%;" type="quantity" class="form-control" id="quantity" placeholder="Quantity">
    &nbsp; &nbsp;<button style="margin-top:9px;" type="submit" class="btn btn-danger mb-2">ADD</button>
  </div>
  </form>
    </span>
    </header>
    <section class="food-description">
    <p>${menuData.description}</p>
    </section>
    </article>`

  }

// Append Menu
  $(() => {
    $.ajax({
      method: "GET",
      url: "/api/menu"
    }).done((menu) => {
      for(let item in menu) {
        console.log(menu[item]);
        const elm = renderMenuItem(menu[item]);
        $('.col-6').append(elm);
      }
    });;
  });

  // Add Quantity and Add to Cart

});

});