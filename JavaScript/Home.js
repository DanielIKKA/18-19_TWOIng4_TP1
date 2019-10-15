let $mouseIcon;
let $workTitle;
let $projectTitle;
let $educationTitle;

let $win = $(window);

function init() {
    $mouseIcon = $('#icon_wrapper');
    $workTitle = $('#text_work_exp');
    $projectTitle = $('#text_project');
    $educationTitle =$('#text_education');

    // Color the correct page on navBar
    let $navBar = $('#nav1');
    $navBar.css({
        'color' : 'var(--pink)'
    });
}

function translateY(startPoint, endPoint, $object, startVal, endVal) {

    let scrollPos = $win.scrollTop();

    let range = endPoint - startPoint;
    let position = scrollPos - startPoint;

    let advancementPercent;

    if(scrollPos >= startPoint && scrollPos < endPoint) {
        let rangePercent = (position / range);

        if(startVal > endVal) {
            advancementPercent = startVal - rangePercent * (startVal - endVal);
        } else {
            advancementPercent = startVal + rangePercent * (endVal - startVal);
        }

        $object.css({
            top : advancementPercent + '%',
            opacity : rangePercent,
        });
    }
}
function scale(startPoint, endPoint, $object, startVal, endVal) {

    let scrollPos = $win.scrollTop();

    let range = endPoint - startPoint;
    let position = scrollPos - startPoint;

    let advancementPercent;

    if(scrollPos >= startPoint && scrollPos < endPoint) {
        let rangePercent = (position / range);

        if(startVal > endVal) {
            advancementPercent = startVal - rangePercent * (startVal - endVal);
        } else {
            advancementPercent = startVal + rangePercent * (endVal - startVal);
        }

        $object.css({
            scale : advancementPercent
        });
    }
}
function animateArrows() {
    let $arrow1 = $('#arrow-1');
    let $arrow2 = $('#arrow-2');
    let $arrow3 = $('#arrow-3');

    $arrow1.css({
        opacity : 0
    });
    $arrow2.css({
        opacity : 0
    });
    $arrow3.css({
        opacity : 0
    });

    $arrow1.animate({
        'opacity' : 1
    }, 400, 'linear', function () {
        $arrow2.animate({
            'opacity' : 1
        }, 400 , 'linear', function () {
            $arrow3.animate({
                'opacity' : 1
            },400, 'linear');
        });
    });

    window.setTimeout(animateArrows, 1500);
}
function linesAnimation() {
    let scrollPos = $win.scrollTop();

    // Select lines around last experience text
    let $lines = $('#line_r, #line_l');

    // define the starting and ending point of animation
    let startPoint = $('#second_section').offset().top - 90;
    let endPoint = startPoint + $('#second_section').outerHeight()/2;

    // define between which values lines gonna evolute
    let startVal = 0;
    let endVal = 40;

    let range = endPoint - startPoint;
    let position = scrollPos - startPoint;

    let advancementPercent;

    if(scrollPos >= startPoint && scrollPos < endPoint) {
        let rangePercent = (position / range);

        if(startVal > endVal) {
            advancementPercent = startVal - rangePercent * (startVal - endVal);
        } else {
            advancementPercent = startVal + rangePercent * (endVal - startVal);
        }

        // lines' width gonna change from 0% to 40%
        $lines.css({
            width : advancementPercent + '%'
        });

        // text and article's opacity gonna change from 0% to 100%
        $('#icon_text, #last_experience').css({
           opacity : rangePercent
        });
    }
}
function educationFeaturesAnimation() {
    let scrollPos = $win.scrollTop();

    // Select lines around last experience text
    let $ece = $('#ece_feature');
    let $malmo = $('#malmo_feature');

    // define the starting and ending point of animation
    let startPoint = $('#forth_section').offset().top;
    let endPoint = startPoint + 2.5*$('#forth_section').outerHeight()/4;

    // define between which values lines gonna evolute
    let startVal = 20;
    let endVal = 5;

    let range = endPoint - startPoint;
    let position = scrollPos - startPoint;

    let advancementPercent;

    if(scrollPos >= startPoint && scrollPos < endPoint) {
        let rangePercent = (position / range);

        if(startVal > endVal) {
            advancementPercent = startVal - rangePercent * (startVal - endVal);
        } else {
            advancementPercent = startVal + rangePercent * (endVal - startVal);
        }

        // malmo's feature gonna change from 0% to 15%
        $malmo.css({
            'margin-left' : advancementPercent + '%',
            opacity : rangePercent
        });

        // text and article's opacity gonna change from 0% to 100%
        $ece.css({
            opacity : rangePercent
        });
    }
}

// event when DOM is ready
$(document).ready( function () {

    init();

    animateArrows();

});

// Events on scroll
$win.scroll( function () {
    let endPointWorkTitle = $('#second_section').position().top;
    let startPointWorkTitle =  endPointWorkTitle - $win.outerHeight()/2;

    let endPointProjectTitle = $("#third_section").position().top;
    let startPointProjectTitle = endPointProjectTitle - $win.outerHeight()/2;

    let endPointEducationTitle = $("#forth_section").position().top;
    let startPointEducationTitle = endPointEducationTitle - $win.outerHeight()/2;

    translateY(startPointWorkTitle, endPointWorkTitle, $workTitle, 40, 20);
    scale(startPointWorkTitle, endPointWorkTitle, $('#img1'), 1, 1.5);
    translateY(startPointProjectTitle, endPointProjectTitle, $projectTitle, 40, 20);
    translateY(startPointEducationTitle, endPointEducationTitle, $educationTitle, 40, 20);

    linesAnimation();

    educationFeaturesAnimation();
});