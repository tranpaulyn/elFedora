$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($(".col-6"));
    }
  });;
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
    $('#nav-bar').css('background','#bdb2a5');
    } else {
    $('#nav-bar').css('background','transparent');
    }
    });

