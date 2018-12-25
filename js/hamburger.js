function navHamburger() 
{
    // Select the element
    var x = document.getElementById("topnav");

    // Add the responsive class when user clicks menu button if its closed
    if (x.className === "topnav")
    {
        x.className += " responsive";
    }
    // Remove the responsive class when user clicks menu button if its open
    else 
    {
        x.className = "topnav";
    }
}
