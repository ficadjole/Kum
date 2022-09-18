var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTrigger) {
    return new bootstrap.Popover(popoverTrigger);
});


