function Show(idname)
{
    var item = document.getElementById(idname)

    if (item.hasAttributes('hidden'))
    {
       item.removeAttribute('hidden');
    }

    $('html, body').animate(
    {
        scrollTop: 0
    }, 700);
}

function Hide(idname)
{
    var item = document.getElementById(idname)

    item.setAttribute('hidden', true);
}