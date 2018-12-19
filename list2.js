$(".check-all").on("click", function () {
    $(this).closest(".container-list")
    .find("input[type='checkbox']")
    .not(this)
    .prop("checked", $(this).prop("checked"));
})

// $("input[type='checkbox']").on("click", function () {
//     if(!$(this).prop("checked")){
//         $(".check-all").prop("checked", false);
//     }
// })