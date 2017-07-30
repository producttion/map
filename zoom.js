// $(document).ready(function() {
$('.zoomZone').click(function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    $(this).zoomTo({ debug: false, nativeanimation: true });
});

$(window).click(function(evt) {
    evt.stopPropagation();
    $("body").zoomTo({ targetsize: 1.0, nativeanimation: true });
});

// for iPhone
$("#container").click(function(evt) {
    evt.stopPropagation();
    $("body").zoomTo({ targetsize: 1.0, nativeanimation: true });
});

$("body").zoomTo({ targetsize: 1.0, nativeanimation: true });
// });