
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


function testimonialbtncontainer(value) {
  var testimonialbutton = document.getElementsByClassName('testimonial-slider-button');
  var cardcontainer = document.getElementsByClassName('blocks');

  if (value == '1') {
    cardcontainer[0].style.left = '0%';
    testimonialbutton[0].style.background = "#00ff57";
    testimonialbutton[1].style.background = "#ecf0f3";
    testimonialbutton[2].style.background = "#ecf0f3";

    console.log('card 1 selected')

  }
  if (value == '2') {
    cardcontainer[0].style.left = '-70%';
    testimonialbutton[1].style.background = "#00ff57";
    testimonialbutton[0].style.background = "#ecf0f3";
    testimonialbutton[2].style.background = "#ecf0f3";

    console.log('card 2 selected')

  }
  if (value == '3') {
    cardcontainer[0].style.left = '-90%';
    testimonialbutton[2].style.background = "#00ff57";
    testimonialbutton[1].style.background = "#ecf0f3";
    testimonialbutton[0].style.background = "#ecf0f3";

    console.log('card 3 selected')

  }
}


$(function ()  {
  $('.multiple-items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    infinite:true
  });
});

$(function ()  {
  $('.multiple-images').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
    infinite:true
  });
});