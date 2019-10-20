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

    console.log('currentWindowPosY :' + currentWindowPosY);
    console.log('start:' + start);
    console.log('end:' + end);

    if(currentWindowPosY >= start && currentWindowPosY <= end) {
        $obj.text(text);
        $obj.css({
            opacity : 1
        })
    } else {
        $obj.css({
            opacity : 0
        })
    }
}

function datesManagement() {

    let start = lastTarget.offset().top - window.outerHeight/2;
    let end = start + (2/3) * lastTarget.outerHeight();
    
    if(window.pageYOffset < start && window.pageYOffset > end) {
        articlesArray.forEach(function (value, index, tab) {

            
        });
    }
    
    dateAnimation(lastTarget, start, end, '2010');

}

$('document').ready(function () {
   init();
});

$(window).scroll(function () {

    datesManagement();
});