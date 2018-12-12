$(".check-all").on("click", function () {
    $("input[type='checkbox']").not(this).prop("checked", $(this).prop("checked"));
})

$("input[type='checkbox']").on("click", function () {
    if(!$(this).prop("checked")){
        $(".check-all").prop("checked", false);
    }
})