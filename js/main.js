$(function () {
  $(".slider__inner").slick({
    asNavFor: ".slider__nav",
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="images/slider/arrow-prev.png" alt="" /></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="images/slider/arrow-next.png" alt="" /></button>',
    fade: true,
    infinite: true,
    autoplay: 3000,

    responsive: [
      {
        breakpoint: 601,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".slider__nav").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".slider__inner",
    dots: false,
    focusOnSelect: true,
    infinite: true,
  });

  $(".header__menu-btn").on("click", function () {
    $(".header__menu ul").slideToggle();
  });
});
