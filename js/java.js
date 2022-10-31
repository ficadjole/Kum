$(document).ready(function () {
      $('[data-toggle="popover"]').popover({
            placement: "left",
            trigger: "focus",
            html: true,
            content: function () {
                  return '<img class="img-fluid"  src="' + $(this).data("img") + '" />';
            },
      });
});
$(document).ready(function () {
      const $nav = $("#navbarSupportedContent");
      $nav.find(".nav-link").on("click", () => {
            setTimeout(() => {
                  $nav.collapse("hide");
            }, 300);
      });
});