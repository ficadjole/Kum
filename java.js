$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
         trigger: 'click', 
         html: true,
         content: function () {
               return '<img class="img-fluid" src="'+$(this).data('img') + '" />';
         },       
   }) 
});


