$(function() {
  $('#cart-items').hide().click(function(e) {
    e.stopPropagation();
  });      
  $("div.cart-img").click(function(e) {
    $('#cart-items').animate({ opacity: "toggle" },200);
    e.stopPropagation();
  });
  $(document).click(function() {
    $('#cart-items').fadeOut("fast");
  });
});
