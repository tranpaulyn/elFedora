// Nav Bar
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

