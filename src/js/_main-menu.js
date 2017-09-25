$('#menu-toggle').click(function(){
  $(this).add('.main-menu').toggleClass('active');
});

$('.main-menu__item').each(function(index) {
  var item_delay = 0.3+0.1*index;

  $(this).css('transition-delay', item_delay + 's');
});