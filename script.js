
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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
    infinite:true,
    
  });
});

$(function ()  {
  $('.multiple-items-team').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows:false,
    infinite:true
  });
});

$('.previous').click(function(){
  $('.multiple-images').slick('slickPrev');
 
})
$('.next').click(function(){
  $('.multiple-images').slick('slickNext');
})

$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay:true,
  autoplaySpeed:3000,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})