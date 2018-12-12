$(document).ready(function (){
    fadeCard(".name", ".translate");

    var myElement = document.getElementById('card');
    var mc = new Hammer(myElement);

    mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

    // listen to events...
    mc.on("panleft panright panup pandown tap press", function(ev) {
        if (ev.isFinal) console.log(ev.type +" gesture detected.");
        return true;
    });
})

function fadeCard(selector, sselector){
    fade(selector, sselector);
    fade(sselector, selector);
}

function fade(selector, sselector){
    $(selector).on("click", function () {
        $(this).hide();

        $(sselector).fadeIn();
    })
}
