function navHamburger() 
{
    // Select the element
    var x = document.getElementById("nav");

    // Add the responsive class when user clicks menu button if its closed
    if (x.className === "nav")
    {
        x.className += " responsive";
    }
    // Remove the responsive class when user clicks menu button if its open
    else 
    {
        x.className = "nav";
    }
}
