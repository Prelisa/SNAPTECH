
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


var productDetail = document.getElementsByClassName("product-detail");
var i;

for (i = 0; i < productDetail.length; i++) {
  productDetail[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const productItems = productDetail.nextElementSibling;
    if (productItems.classList.contains('active')) {
      productItems.style.maxHeight = productItems.scrollHeight + '2rem';
    }
    else {
      productItems.style.maxHeight = 0;
    }
  });
}



$(function () {
  $('.multiple-items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true

  });
});
$(".count").counterUp({ delay: 20, time: 1000 })
$(function () {
  $('.multiple-images').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 555,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]

  });
});

$(function () {
  $('.multiple-items-team').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$('.previous').click(function () {
  $('.multiple-images').slick('slickPrev');

})
$('.next').click(function () {
  $('.multiple-images').slick('slickNext');
})

$('.owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplaySpeed: 3000,
  nav: false,
  dots: true,
  // autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})

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

