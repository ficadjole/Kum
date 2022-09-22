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

/* $(document).ready(function () {
      if (window.innerWidth < 480) {
            $('.btn').addClass('').removeClass('btn');
            $('.color-text').addClass('nav-mobile').removeClass('color-text');
      }
});

$(window).resize(function () {
      if (window.innerWidth < 1340) {
            $('.btn').addClass('').removeClass('btn');
      } else {
            $('').addClass('btn').removeClass('');
      }
});  */