// go to init() to understand roles
let kuantom;
let sidLee;
let teacher;
let agent;

let lastTarget;

let articlesArray;

function init() {

    // define different articles
    kuantom = $('#kuantom_article');
    sidLee = $('#sidLee_article');
    teacher = $('#teacher_article');
    agent = $('#polling_agent_article');

    articlesArray = [kuantom, sidLee, teacher, agent];

    // init the de first target for the date (last experience, first on the DOM)
    lastTarget = articlesArray[0];

    // Color the correct page on navBar
    let $navBar = $('#nav2');
    $navBar.css({
        'color' : 'var(--pink)'
    });
}

function dateAnimation($target, start, end, text) {

    let currentWindowPosY = window.pageYOffset;

    let $obj = $('.dates');

    let r = $('.d_right');
    let l = $('.d_left');

    // console.log('currentWindowPosY :' + currentWindowPosY);
    // console.log('start:' + start);
    // console.log('end:' + end);

    $obj.text(text);
    r.css({
       right : -$obj.outerWidth()/2 + 40,
        'transition-duration' : '200ms'
    });

    l.css({
        left : -$obj.outerWidth()/2 + 40,
        'transition-duration' : '200ms'
    });

    if(currentWindowPosY >= start+$obj.outerWidth()/2 + 40 && currentWindowPosY <= end) {

        $obj.css({
            opacity : 1
        })
    } else {
        $obj.css({
            opacity : 0,
            'transition-duration' : '0'
        });
    }
}


function datesManagement() {

    // let start_1 = articlesArray[0].offset().top - window.outerHeight/2;
    // let end_1 = start_1 + (2/3) * articlesArray[0].outerHeight();
    // let text_1 = 'July 2019 to August 2019';
    //
    // let start_2 = articlesArray[1].offset().top - window.outerHeight/2;
    // let end_2 = start_2 + (2/3) * articlesArray[1].outerHeight();
    // let text_2 = 'Jan. 2018 to Feb. 2018';
    //
    // let start_3 = articlesArray[2].offset().top - window.outerHeight/2;
    // let end_3 = start_3 + (2/3) * articlesArray[2].outerHeight();
    // let text_3 = 'Since September 2015';
    //
    // let start_4 = articlesArray[3].offset().top - window.outerHeight/2;
    // let end_4 = start_4 + (2/3) * articlesArray[3].outerHeight();
    // let text_4 = 'Since April 2017';

    // if(window.pageYOffset > start_1 && window.pageYOffset < end_1) {
    //     dateAnimation(lastTarget, start_1, end_1, text_1);
    // } if (window.pageYOffset > start_2 && window.pageYOffset < end_2) {
    //     dateAnimation(lastTarget, start_2, end_2, text_2);
    // } if (window.pageYOffset > start_3 && window.pageYOffset < end_3) {
    //     dateAnimation(lastTarget, start_3, end_3, text_3);
    // } if (window.pageYOffset > start_4 && window.pageYOffset < end_4) {
    //     dateAnimation(lastTarget, start_4, end_4, text_4);
    // }
    // if(window.pageYOffset < start || window.pageYOffset > end) {
    //     console.log('yes');
    //     articlesArray.forEach(function (value, index, tab) {
    //
    //     });
    // }
    
    //dateAnimation(lastTarget, start, end, 'July 2019 to August 2019');

}

$('document').ready(function () {
   init();
});

$(window).scroll(function () {

    //datesManagement();
});