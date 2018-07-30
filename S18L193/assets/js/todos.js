//Check off a task by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//Click on x to delete a task
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

//Hit enter to add a task
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});