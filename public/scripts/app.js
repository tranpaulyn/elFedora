$(document).ready(function() {

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

  function renderMenuItem(data) {
    let $menuItem = `<article class="menu-item">
    <header class="food-name">
      <span class="food-item">Spaghetti</span>                    //Add KNEX query here
      <span class="food-price">
        $19.99                                                    //Add KNEX query here
        <form>
            <div class="form-row align-items-center">
              <div class="col-auto my-1">
                <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                  <option selected>Choose...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>                            //Add more options
                </select>
              </div>
              <div class="col-auto my-1">
                <button type="submit" class="btn btn-primary">Add</button>
              </div>
            </div>
          </form>
      </span>
      </header>
      
      <section class="food-description">
          <p>Tasty spaghtetti</p>                         //Add KNEX query here
      </section>
  </article>`


  }

// Append Users
  $(() => {
    $.ajax({
      method: "GET",
      url: "/api/users"
    }).done((users) => {
      for(user of users) {
        $("<p>").text(user.name).appendTo($(".food-name"));
      }
    });;
  });

})