$(document).ready(function () {
  $(document).on("click", ".profile-btn", function () {
    // Do something when button is clicked
    var pos_top = $('.profile-btn').position();
    var profile_wd = $('.profile-btn').width();
    $(".user_link").toggle();
    console.log(pos_top.left);
    $(".user_link").css({
      'left': pos_top.left + profile_wd - "210",
      'top': 'pos_top.top'
    });
    $('body').toggleClass('ov_hidden');
    $(".dark_back").toggle();
  });
});

$(document).on("click", ".logout", function () {
  $(".user_link").hide();
  $(".dark_back").hide();
});

$(document).mouseup(function (e) {
  var links = $(".user_link");
  if (!links.is(e.target) && links.has(e.target).length === 0) {
    links.hide();
    $(".dark_back").hide();
    $("body").removeClass("ov_hidden");
  }
});
