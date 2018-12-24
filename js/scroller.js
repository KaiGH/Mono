// Wait for DOM to be ready then insert 'back to top' button
$(document).ready(function()
{
    $('body').prepend('<a href="#" class="top"></a>');
});

// Amount scrolled before button appears
var amountScrolled = 100;

// Logic for when to show the button
$(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) 
    {
        $('a.top').fadeIn('slow');
    }
    else 
    {
        $('a.top').fadeOut('slow');
    }
});

// Animate button click and go back to top
$('a.top').click(function ()
{
    $('html, body').animate(
    {
        scrollTop: 0
    }, 700);
    return false;
});
