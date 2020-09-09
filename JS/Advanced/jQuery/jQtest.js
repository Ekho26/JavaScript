$('input.first').click(changeButton);
$('input.second').click(styleButton);
// document.querySelector('input').addEventListener('click', changeButton);

function styleButton() {
    $('div').css({
        'background-color': 'lightblue' ,
        'top' : '30vh'
    });
    // document.querySelector('div').style.backgroundColor = 'lightblue';
}

function changeButton() {
    let newElem = $('<span>Hello</span>');
    // $('div').toggle()
    //         .html(newElem);
    // $('div').slideToggle()
    //         .html(newElem);
    // $('div').slideUp()
    //         .html(newElem);    
    $('div').slideDown()
            .html(newElem);
    // $('div').text('You clicked!');
    // document.querySelector('div').style.visibility = 'hidden';
}