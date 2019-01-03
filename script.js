const angleLeft = ".fa-angle-left",
    angleRight = ".fa-angle-right",
    angleUp = ".fa-angle-up",
    angleDown = ".fa-angle-down";

$(document).ready(function () {
    $("#modal-menuExit").modal("show");
    $(".button-show-group > .fa-th-list").on("click", function () {
        $("#modal-group-show").modal("show");
    })

    $(".word-name").on("click", function () {
        $(this).hide();
        $(".word-mean").fadeIn();
    })

    $(".word-mean").on("click", function () {
        $(this).hide();
        $(".word-name").fadeIn();
    })

    $(".group-show .fa-times, .group-show .fa-eye-slash").on("click", function () {
        $(this).closest("div").css("visibility", "hidden")
    })
})

$(document).ready(function () {
    fadeCard(".name", ".translate");

    var myElement = document.getElementById('card');
    var mc = new Hammer(myElement);

    mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

    // listen to events...
    mc.on("panleft panright panup pandown", function (ev) {
        switch (ev.type) {
            case "panleft":
                $(angleLeft).fadeIn();
                hideExcludeArrow(angleLeft);
                break;
            case "panright":
                $(angleRight).fadeIn();
                hideExcludeArrow(angleRight);
                break;
            case "panup":
                $(angleUp).fadeIn();
                hideExcludeArrow(angleUp);
                break;
            case "pandown":
                $(angleDown).fadeIn();
                hideExcludeArrow(angleDown);
                break;

            default:
                hideAllArrow();
                break;
        }

        if (ev.isFinal) {
            console.log(ev.type + " gesture detected.");
            hideAllArrow();
        }
        // hideAllArrow();
        return true;
    });
})

function fadeCard(selector, sselector) {
    fade(selector, sselector);
    fade(sselector, selector);
}

function fade(selector, sselector) {
    $(selector).on("click", function () {
        $(this).hide();

        $(sselector).fadeIn();
    })
}
function hideAllArrow() {
    $(`${angleLeft}, ${angleRight}, ${angleUp}, ${angleDown}`).hide();
}
function hideExcludeArrow(element) {
    $(`${angleLeft}, ${angleRight}, ${angleUp}, ${angleDown}`).not(element).hide();
    // $(`.arrow-group > fas:not(${element})`).hide();
}


