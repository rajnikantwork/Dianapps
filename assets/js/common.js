$(document).on("scroll", function() {
    var pixels = $(document).scrollTop();
    var pageHeight = $(document).height() - $(window).height();
    var progress = 100 * pixels / pageHeight;
    $(".page_progress").css("width", progress + "%");
});
$(function() {
    $(document).on("scroll", function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $("header").addClass("stickey_header");
        } else {
            $("header").removeClass("stickey_header");
        }
    });
    //   $("#hamburger").on("click", function() {
    //       $(this).toggleClass("active");
    //       $('body').toggleClass("open-menu");
    //   });

    //   if ($(window).width() < 767) {
    //       $(".navbar_wrapper>li>a").on("click", function() {
    //           $("#hamburger").removeClass("active");
    //           $('body').removeClass("open-menu");
    //       });
    //   }

    //   $(".totp").on("click", function(e) {
    //       e.preventDefault();
    //       $('html, body').stop().animate({
    //           scrollTop: 0
    //       }, 1000);
    //   });


    //   $(".hd_menu").on("click", function() {
    //       $(this).toggleClass("active");
    //       $('body').toggleClass("open-menu");
    //   });

});