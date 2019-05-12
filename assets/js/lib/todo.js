$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function() {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation;
});

$("input").keypress(function(e) {
    if (e.which === 13) {
        var newtodo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newtodo + "</li>");
    }
});