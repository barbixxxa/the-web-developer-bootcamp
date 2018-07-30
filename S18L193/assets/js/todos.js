//Check off a todo by clicking
$("li").click(function () {
    $(this).toggleClass("completed");
});