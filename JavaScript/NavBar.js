let $window = $(window);

let $firstSection;
let $navBar;

function init() {
    $firstSection = $("#first_section");
    $navBar = $("#nav-bar-header");
}

function navBarManage() {

    let beginPoint = $firstSection.outerHeight() / 3;
    let range = $firstSection.outerHeight() / 2;

    let scrollTop = $window.scrollTop();


    if(scrollTop <= beginPoint) {
        $navBar.css({
            'opacity' : 0,
        });
    } else if (scrollTop <= beginPoint - 100) { // hide nav 100px before begin point to have a better fluency effect
        $navBar.hide();
    }

    // manage opacity
    if (scrollTop >= beginPoint && scrollTop <= (beginPoint + range)) {
        $navBar.show();
        $navBar.css({ 'opacity' : (scrollTop / (beginPoint+range)) });
    }

}

$(document).ready(function () {
    init();
    $navBar.hide();
});

$window.on('scroll', function () {
    navBarManage();
});