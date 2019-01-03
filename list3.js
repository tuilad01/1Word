// $(".check-all").on("click", function () {
//     $(this).closest(".container-list")
//         .find("input[type='checkbox']")
//         .not(this)
//         .prop("checked", $(this).prop("checked"));
// })

// $("input[type='checkbox']").on("click", function () {
//     const listGroup = $(this).parents(".list-group");

//     const checkAll = listGroup.siblings(".list-check-all").find(".check-all");

//     const checkBox = listGroup.find("input:checkbox:not(:checked)");

//     if (checkBox.length === 0) {
//         checkAll.prop("checked", true);
//     } else {
//         checkAll.prop("checked", false);
//     }
// })

$(".brand").on("click", function () {
    $(".sidenav").css("width", "100%")
})

$(".close-sidenav").on("click", function () {
    $(".sidenav").css("width", "0")
})
