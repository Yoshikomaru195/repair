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