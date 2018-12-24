function navHamburger() 
{
    var x = document.getElementById("topnav");
    if (x.className === "topnav")
    {
        x.className += " responsive";
    }
    else 
    {
        x.className = "topnav";
    }
}

var amountScrolled = 100;
$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.top').fadeIn('slow');
	} else {
		$('a.top').fadeOut('slow');
	}
});

$('a.top').click(function() {
	$('html, body').animate({
		scrollTop: 0
    }, 700);
	return false;
});