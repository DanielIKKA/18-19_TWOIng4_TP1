let $window = $(window);

function navBarManageOnScroll() {

    let $navBar = $('#header_wrapper');

    let range = $navBar.outerHeight();

    if(window.pageYOffset <= range*8) {
        $navBar.css({
            'top' : $window.scrollTop()/8-range + 'px'
        });
    } else if($navBar.position().top === 0) {
        console.log('yes');
        $navBar.css({
            'transition-duration' : '0ms'
        });
    } else if (window.pageYOffset > range*8) {
        $navBar.css({
            'transition-duration' : '100ms',
            'top' : -$navBar.scrollTop()
        })
    }
}
function navBarManageOnReady() {

    let $navBar = $('#header_wrapper');

    let range = $navBar.outerHeight();

    if(window.pageYOffset <= range*8) {
        $navBar.css({
            'transition-duration' : '100ms',
            'top' : -$navBar.scrollTop()
        });
    } else if($navBar.position().top === 0) {
        console.log('yes');
        $navBar.css({
            'transition-duration' : '0ms'
        });
    } else if (window.pageYOffset > range*8) {
        $navBar.css({
            'transition-duration' : '200ms',
            'top' : 0
        })
    }
}

$(document).ready(function () {

    let $navBar = $('#header_wrapper');

    $navBar.css({
       'top' : -$navBar.outerHeight() + 'px'
    });

    let $sendMe = $('#nav_contact');

    navBarManageOnReady();

    $sendMe.hover(function () {
        let $path = $('#A3_send');

        $path.css({
            'fill' : 'var(--pink)'
        })
    }, function () {
        let $path = $('#A3_send');

        $path.css({
            'fill' : 'var(--white)'
        })
    })
});

$window.on('scroll', function () {
    navBarManageOnScroll();
});


