let $window = $(window);

function navBarManage() {

    let $firstSection = $("#first_section");
    let $navBar = $('#nav-bar-header');

    let beginPoint = $firstSection.outerHeight() / 3;

    let scrollTop = $window.scrollTop();


    if(scrollTop <= beginPoint) {
        $navBar.css({
            'opacity' : 0,
        });
    }

    if (scrollTop <= 100) { // hide nav 100px before begin point to have a better fluency effect
        $navBar.hide();
    }

    // manage opacity
    if (scrollTop >= beginPoint) {
        $navBar.show();
        $navBar.css({ 'opacity' : 1 });
    }

}

$(document).ready(function () {

    let $navBar = $('#nav-bar-header');

    let oldOpacity = 0;

    // $navBar.hover(function () {
    //     if(window.pageYOffset > 100) {
    //         oldOpacity = $(this).css("opacity");
    //         $(this).css({
    //             'opacity' : 0.6
    //         });
    //     }
    // }, function () {
    //     if(window.pageYOffset > 100) {
    //         $(this).css({
    //             'opacity': oldOpacity
    //         });
    //     } else {
    //         $(this).css({
    //             'opacity': 0
    //         });
    //     }
    // });
});

$window.on('scroll', function () {
    navBarManage();
});

