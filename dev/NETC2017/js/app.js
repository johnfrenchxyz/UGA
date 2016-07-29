$(document).foundation();

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#findOutMore").click(function() {
   scrollToAnchor('start');
});
