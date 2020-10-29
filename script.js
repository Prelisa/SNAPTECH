
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = accordion.nextElementSibling;
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


// var mobileNav = document.getElementsByClassName('js--mobile-nav-icon');

// mobileNav.addEventListener("click", function () {


//   var nav = $('.js--main-nav');
//   var icon = $('.js--mobile-nav-icon i')
//   nav.slideToggle(200);

//   if (icon.hasClass('ion-navicon-round')) {
//     icon.addClass('ion-close-round')
//     icon.removeClass('ion-navicon-round')
//   }
//   else {
//     icon.addClass('ion-navicon-round')
//     icon.removeClass('ion-close-round');
//   }

// });
