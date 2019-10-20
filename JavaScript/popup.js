function openForm() {

    let name = $("input[name|='name']").val('');
    let email = $("input[name|='email']").val('');
    let area = $("textarea").val('');

    $('.popup').fadeIn();

    $('html').css({
        overflow : 'hidden'
    });
}

function verify() {
    let name = $("input[name|='name']");
    let email = $("input[name|='email']");

    if(name.val() === undefined || name.val() === '') {
        console.log('yes1');
        name.css('border', 'solid 1px red');
        return;
    } else if(email.val() === undefined || email.val() === '') {
        console.log('yes2');
        email.css('border', 'solid 1px red');
        return
    }

    closePopup();
}

function closePopup() {

    $('.popup').fadeOut();

    $('html').css({
        overflow : 'initial'
    });
}