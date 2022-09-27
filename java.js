$(document).ready(function () {
      $('[data-toggle="popover"]').popover({
            placement: 'right',
            trigger: 'click',
            html: true,
            content: function () {
                  return '<img class="img-fluid" src="' + $(this).data('img') + '" />';
            },
      })
});
