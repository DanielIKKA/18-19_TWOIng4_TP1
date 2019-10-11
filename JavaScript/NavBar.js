let $window = $(window);

let $firstSection;
let $navBar;

function init() {
    $firstSection = $("#first_section");
    $navBar = $("#nav-bar-header");
}

function navBarManage() {

    let beginPoint = $firstSection.outerHeight() / 3;

    let scrollTop = $window.scrollTop();


    if(scrollTop <= beginPoint) {
        $navBar.css({
            'opacity' : 0,
        });
    } else if (scrollTop <= beginPoint - 50) { // hide nav 100px before begin point to have a better fluency effect
        $navBar.hide();
    }

    // manage opacity
    if (scrollTop >= beginPoint) {
        $navBar.show();
        $navBar.css({ 'opacity' : 0.6 });
    }

}

$(document).ready(function () {
    init();
    $navBar.hide();

    let oldOpacity = 0;

    $navBar.hover(function (over) {
        if(!$(this).hidden) {
            oldOpacity = $(this).css("opacity");
            $(this).css({
                'opacity' : 1
            });
        }
    }, function () {
        if(!$(this).hidden) {
            $(this).css({
                'opacity': oldOpacity
            });
        }
    });
});

$window.on('scroll', function () {
    navBarManage();
});

