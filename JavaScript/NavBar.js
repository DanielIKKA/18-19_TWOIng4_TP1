let $window = $(window);

function navBarManage() {

    let $navBar = $('#header_wrapper');

    let range = $navBar.outerHeight();


    if(window.pageYOffset <= range*8) {
        $navBar.css({
            'top' : $window.scrollTop()/8-range + 'px'
        });
    }
}

$(document).ready(function () {

    let $navBar = $('#header_wrapper');

    $navBar.css({
       'top' : -$navBar.outerHeight() + 'px'
    });
});

$window.on('scroll', function () {
    navBarManage();
});

