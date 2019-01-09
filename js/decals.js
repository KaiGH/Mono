// On page load run the functions required for page use
document.addEventListener("load", Start()); 

// Run functions
function Start()
{
    for(var i = 1; i <= 6; i++)
    {
        // Make decals draggable
        $('#div' + i).draggable(
        {

        });

        // Make decals resizable
        $('#div' + i).resizable(
        {
            alsoResize: '#img' + i,
            containment: "document",
        });
    }
}