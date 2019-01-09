function Show(idname)
{
    // Get DIV container by ID from HTML DOM
    var item = document.getElementById(idname)

    // If the div has the hidden attribute then remove it
    if (item.hasAttributes('hidden'))
    {
       item.removeAttribute('hidden');
    }

    // Scroll to the top with an animation to ensure user sees the modal
    $('html, body').animate(
    {
        scrollTop: 0
    }, 700);
}

function Hide(idname)
{
    var item = document.getElementById(idname)

    // Create hidden attribute and set it to true to re-hide the modal
    item.setAttribute('hidden', '');
}