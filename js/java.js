$(document).ready(function () {
      $('[data-toggle="popover"]').popover({
            placement: 'left',
            trigger: 'click',
            html: true,
            content: function () {
                  return '<img class="img-fluid"  src="'+$(this).data('img') + '" />';
            },
      })
});

/* var isVisible = false;
var clickedAway = false;

$('.popoverThis').popover({
    html: true,
    trigger: 'manual'
}).click(function (e) {
    $(this).popover('show');
    $('.popover-content').append('<a class="close" style="position: absolute; top: 0; right: 6px;">&times;</a>');
    clickedAway = false
    isVisible = true
    e.preventDefault()
});

$(document).click(function (e) {
      if (isVisible & clickedAway) {
          $('.popoverThis').popover('hide')
          isVisible = clickedAway = false
      } else {
          clickedAway = true
      }
  }); */
 /*  $(document).ready(function () {
  $('#popoverId').popover({
      html: true,
      title: 'Popover Title<a class="close" href="#");">&times;</a>',
      content: $('#popoverContent').html(),
  });
});
  
  $('#popoverId').click(function (e) {
      e.stopPropagation();
  });
  
  $(document).click(function (e) {
      if (($('.popover').has(e.target).length == 0) || $(e.target).is('.close')) {
          $('#popoverId').popover('hide');
      }
}); */


$(document).ready(function(){
      $('[data-toggle="popover"]').popover();   
  });