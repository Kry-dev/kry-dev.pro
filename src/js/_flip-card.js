$('#flip-card').click(function() {
  $('.welcome-main').addClass('card_flipped');
});
$('#unflip-card').click(function(e) {
  e.preventDefault();
  $('.welcome-main').removeClass('card_flipped');
});
