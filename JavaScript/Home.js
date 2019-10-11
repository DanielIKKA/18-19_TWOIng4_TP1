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
}

function translateY(startPoint, endPoint, $object, startVal, endVal) {

    let scrollPos = $win.scrollTop();

    let range = endPoint - startPoint;
    let position = scrollPos - startPoint;

    let advancementPercent;

    if(scrollPos >= startPoint && scrollPos < endPoint) {
        let rangePercent = (position / range);

        if(startVal > endVal) {
            advancementPercent = startVal - rangePercent * endVal
        } else {
            advancementPercent = startVal + rangePercent * endVal
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
            advancementPercent = startVal - rangePercent * endVal
        } else {
            advancementPercent = startVal + rangePercent * endVal
        }

        $object.css({
            scale : advancementPercent
        });
    }
}

$(document).ready( function () {
    init();
});

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

});