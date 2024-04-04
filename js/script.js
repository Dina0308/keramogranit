//menu
$('.header__btn').on('click', function(){
    $('.header__nav').addClass('header__nav_active');
});
$('.menu__close').on('click', function(){
    $('.header__nav').removeClass('header__nav_active');
});


$('.menu__item__submenu').each(function(i){
  $(this).on('mouseenter', function(){
    $('.submenu').eq(i).addClass('submenu_active');
  });
});
$('.menu__item__submenu').each(function(i){
  $(this).on('mouseleave', function(){
    $('.submenu').eq(i).removeClass('submenu_active');
  });
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 300) {
    $('.header__nav').removeClass('header__nav_active');
  }
});

//страница Полезная информация показать статью
$('.info__item').each(function(i) {
  $(this).on('click', function() {
    $('.info-modal').eq(i).fadeIn();
    $('body').css('overflow', 'hidden');
    $('header').css('position', 'fixed');
  });
  
});
$('.modal__close, .close-info-modal').on('click', function() {
  $('.info-modal').fadeOut();
  $('body').css('overflow', '');
  $('header').css('position', '');
});
//слайдер в портфолио

$('.portf__slider1').each(function() {
  var $slider = $(this);
  var $nav = $slider.next('.portf__slider2');

  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    asNavFor: $nav
  });

  $nav.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: $slider,
    infinite: false,
    focusOnSelect: true,
    // centerMode: true
  });
});
//promo slider

  $('.promo__slider').slick({
    fade: true,
    cssEase: 'linear',
    arrows: true,
   
  });

//rew slider
$('.main-rew__slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1438,
      settings: {
        
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 3,
        
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1,
        dots: true,
      }
    }
  ]
});

//form
$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
      type: "POST",
      url: "/send.php",
      data: $(this).serialize()
  }).done(function() {
      $(this).find("input").val("");
      $('.modal__order').fadeOut();
      $('.modal').fadeOut();
      $('.thanks').fadeIn();
      $('.overlay').fadeIn();
  
      $('form').trigger('reset');
      console.log('ok');
  });
  return false;
  });   

//маска для телефона

let element = document.querySelectorAll('.phone');
let maskOptions = {
    mask: '+7(000)000-00-00'
};
for (let i = 0; i < element.length; i++) {
    let mask = IMask(element[i], maskOptions);
}




//табы в каталоге мод окно
$(function() {
  
  $('ul.tabs__caption').on('click', 'li:not(.tabs__caption__li_active)', function() {
    $(this)
      .addClass('tabs__caption__li_active').siblings().removeClass('tabs__caption__li_active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
  
});

//слайдер в каталоге мод окно

$('.catalog-prod__modal__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: false,
  asNavFor: '.catalog-prod__modal__slider2'
});
$('.catalog-prod__modal__slider2').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.catalog-prod__modal__slider',
  infinite: false,
  
  focusOnSelect: true,
  
});



//modal catalog
$('.catalog-prod__item').each(function(i) {
  $(this).on('click', function() {
      $('.catalog-prod__modal .tabs__caption__li:first-child').eq(i).addClass('tabs__caption__li_active');
      $('.catalog-prod__modal .tabs__content_first').eq(i).addClass('active');
      $('.catalog-prod__modal').eq(i).addClass('catalog-prod__modal_active');
      // $('.catalog-prod__modal .tabs__content_first .catalog-prod__modal__slider').eq(i).slick('resize');
      // $('.catalog-prod__modal .tabs__content_first .catalog-prod__modal__slider2').eq(i).slick('resize');
      $('.catalog-prod__modal_active .tabs__content_first .catalog-prod__modal__slider').slick('resize');
      $('.catalog-prod__modal_active .tabs__content_first .catalog-prod__modal__slider2').slick('resize');
  });
});
$('.catalog-prod__modal__close').on('click', function(){
  $('.catalog-prod__modal').removeClass('catalog-prod__modal_active');
  $('.catalog-prod__modal .tabs__caption__li_active').removeClass('tabs__caption__li_active');
  $('.catalog-prod__modal .tabs__content.active').removeClass('active');
});


$('.tabs__caption__li').each(function(e){
  $(this).on('click', function(){
    $(".catalog-prod__modal__slider").eq(e).slick('resize');
    $(".catalog-prod__modal__slider2").eq(e).slick('resize');
  });
});

//модальное окно заказа


$('.btn_order').each(function(i) {
  $(this).on('click', function() {
    $('.modal__order .modal__order__name').val($('.modal__title_hide').eq(i).text());
    $('.modal__order .modal__order__size').val($('.tabs__caption__li_active').text());
    let step = $('.step-value').eq(i).text();
    $('.modal__order__input').attr('step', step); 
    $('.overlay, .modal__order').fadeIn('slow');
    
    console.log(step);
  });
});
$('.modal__close').on('click', function(){
  $('.modal__order, .modal, .overlay, .thanks').fadeOut();
});

//попап слайдера
$('.catalog-prod__modal__slider').each(function(i){
  $(this).magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Загрузка изображения #%curr%...',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    }
    });
});
//попап уральского гранита
$('.catalog-prod__modal__img').each(function(i){
  $(this).magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Загрузка изображения #%curr%...',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    }
    });
});
//модальное окно заказа звонка

$('.btn_consult').on('click', function(){
  $('.modal, .overlay').fadeIn();
});
