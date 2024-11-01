
let aboutOffset = $(".about").offset().top;

if ( $('.navbar').offset().top  > aboutOffset )
{
    $('.navbar').css({'backgroundColor':'rgba(0, 0, 0 , 0.75)' , 'padding-left':'50px' ,'padding-right':'50px'});
}

$(window).scroll(function () {
    let wScroll = $(window).scrollTop();
    if ( wScroll > aboutOffset - 50) {
        $('.navbar').css({'backgroundColor':'rgba(0, 0, 0 , 0.75)' , 'padding-left':'50px' ,'padding-right':'50px'});
        $('#btnUp').fadeIn(300)

    }
    else
    {
        $('.navbar').css({'backgroundColor':'transparent' , 'padding-left':'0px' ,'padding-right':'0px'})
        $('#btnUp').fadeOut(300)
    }
})

$('#btnUp').click(function () {
    $('html , body').animate({scrollTop:0} , 1000) ;
})





// الطريقه الاولي

$("a[href^='#']").click(function (e) {
    let aHref = $(e.target).attr('href');
    let sectionOffset = $(aHref).offset().top;
    $('html , body').animate( {scrollTop:sectionOffset}  , 700);
})




//  الطريقه الثانيه


// $(' nav .nav-item a').click(function () {
//     let arrayOfSection =  Array.from(document.querySelectorAll('section')) ; 
//     for (let i = 0; i < arrayOfSection.length; i++) {
//         if (arrayOfSection[i].id+'-btn' == this.id) {
//             let sectionOffset = $(`#${arrayOfSection[i].id}`).offset().top;
//             $('html , body').animate( {scrollTop:sectionOffset}  , 1000);
//         }
//     } 
// })



$(document).ready( function () {
    $('#loading .loader').fadeOut(0 , function () {
        $('#loading').fadeOut(0 , function () {
            $("body").css('overflow-y' , 'auto')
    })
})})




$('.color-div .c').click(function () {
    let theColor = $(this).css('backgroundColor');
    $(':root').css('--main-color' , theColor);
})



$('.icon-div').click(function () {
    let x = $(".color-div").innerWidth();

    if ($(".change-color").css('left') == '0px') {
        $(".change-color").animate({left : -x } , 700)
    }
    else 
    {
        $(".change-color").animate({left : '0px' } , 700)
    }
})




