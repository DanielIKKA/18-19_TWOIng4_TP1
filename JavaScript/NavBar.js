let $window = $(window);

function navBarManageOnScroll() {

    let $navBar = $('#header_wrapper');

    let range = $navBar.outerHeight();

    if(window.pageYOffset <= range*4) {
        $navBar.css({
            'top' : $window.scrollTop()/4-range + 'px'
        });
    } else if($navBar.position().top === 0) {
        $navBar.css({
            'transition-duration' : '0ms'
        });
    } else if (window.pageYOffset > range*4) {
        $navBar.css({
            'transition-duration' : '100ms',
            'top' : -$navBar.scrollTop()
        })
    }
}
function navBarManageOnReady() {

    let $navBar = $('#header_wrapper');

    let range = $navBar.outerHeight();

    if(window.pageYOffset <= range*4) {
        $navBar.css({
            'transition-duration' : '400ms',
            'top' : $window.scrollTop()/4-range + 'px'
        });
    } else if (window.pageYOffset > range*4) {
        $navBar.css({
            'transition-duration' : '400ms',
            'top' : 0
        })
    }

    window.setTimeout(function () {
        $navBar.css({
            'transition-duration' : '0ms'
        });
    }, 400);

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

$(document).on( "mousemove", function( event ) {
    $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
    let $navBar = $('#header_wrapper');

    let range = $navBar.outerHeight();

    if(window.pageYOffset < range*4) {
        if(-window.pageYOffset + event.pageY < 40) {
            $navBar.css({
                'transition-duration' : '400ms',
                'top' : 0
            })
        } else {
            $navBar.css({
                'transition-duration' : '400ms',
                'top' : -$navBar.outerHeight()
            })
        }
    }


    window.setTimeout(function () {
        $navBar.css({
            'transition-duration' : '0ms'
        });
    }, 400);
});

