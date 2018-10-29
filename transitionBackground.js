$(document).ready(function() {
  var pays = $('.message');
  var back = $('.backgroundContainer');
  pays.hover( function() {
    var imageUrl = $(this).data('pays');
    back.css('background-image', `url(images/${imageUrl}.jpg)`);
  });
});
