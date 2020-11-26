
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = acc.nextElementSibling;
        if (panel.classList.contains('active')) {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
        else {
            panel.style.maxHeight = 0;
        }
    });
}


var careeracc = document.getElementsByClassName("accordion-career");
var i;

for (i = 0; i < careeracc.length; i++) {
    careeracc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = careeracc.nextElementSibling;
        if (panel.classList.contains('active')) {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
        else {
            panel.style.maxHeight = 0;
        }
    });
}






var owl = $('.owl-carousel');
owl.owlCarousel();
// Listen to owl events:
owl.on('changed.owl.carousel', function (event) {
    var currentItem = event.item.index;
    window.location.hash = currentItem + 1;
    // console.log(currentItem);  
    if (currentItem.toString() == '2') {
        $("#Sbtn2").addClass("active");
        $("#Sbtn3").removeClass("active");
        $("#Sbtn4").removeClass("active");
    }
    else if (currentItem.toString() == '3') {
        $("#Sbtn3").addClass("active");
        $("#Sbtn2").removeClass("active");
        $("#Sbtn4").removeClass("active");
    }
    else if (currentItem.toString() == '4') {
        $("#Sbtn4").addClass("active");
        $("#Sbtn3").removeClass("active");
        $("#Sbtn2").removeClass("active");
    }
})


$(document).ready(function () {
    $(".Sbtn1").click(function () {
        owl.trigger('to.owl.carousel', [2, 1000]);
        $("#Sbtn2").addClass("active");
        $("#Sbtn3").removeClass("active");
        $("#Sbtn4").removeClass("active");

    });
    $(".Sbtn2").click(function () {
        owl.trigger('to.owl.carousel', [3, 1000]);
        $("#Sbtn3").addClass("active");
        $("#Sbtn2").removeClass("active");
        $("#Sbtn4").removeClass("active");
    });
    $(".Sbtn3").click(function () {
        owl.trigger('to.owl.carousel', [4, 1000]);
        $("#Sbtn4").addClass("active");
        $("#Sbtn3").removeClass("active");
        $("#Sbtn2").removeClass("active");
    });
});


