function Show(idname)
{
    var item = document.getElementById(idname)

    if (item.hasAttributes('hidden'))
    {
       item.removeAttribute('hidden');
    }
}

function Hide(idname)
{
    var item = document.getElementById(idname)

    item.setAttribute('hidden', true);
}