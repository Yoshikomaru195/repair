var top_show = 150;
var delay = 1000;
$(document).ready(function() {
  $('#offer-form').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
      url: 'mail.php',
      type: 'post',
      data: $(this).serialize(),
      success: function(data) {
        $('.success').html(data + ', ваша форма отправлена.')
      }
    })
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > top_show) $('#top').fadeIn();
    else $('#top').fadeOut();
  });
  $('#top').click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, delay);
  });
});