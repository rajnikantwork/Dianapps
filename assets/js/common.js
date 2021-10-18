var position = $(window).scrollTop();
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > position) {
        $("header").removeClass("stickey_header_down");
        $("header").addClass("stickey_header_up");
    } else {
        $("header").removeClass("stickey_header_up");
        $("header").addClass("stickey_header_down");
    }
    position = scroll;
});

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
    $(".mb_menu_bar").on("click", function() {
        $('body').addClass("open-menu");
    });
    $(".mb_close").on("click", function() {
        $('body').removeClass("open-menu");
    });

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