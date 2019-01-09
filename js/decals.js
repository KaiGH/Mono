// On page load run the functions required for page use
document.addEventListener("load", Start()); 

// Run functions
function Start()
{
    for(var i = 1; i <= 11; i++)
    {
        // Make decals draggable
        $('#div' + i).draggable(
        {
            snap: true,
            grid: [ 20, 20 ],
            containment: "document",
            addClasses: false,
            scroll: false,

            stop: function (event, ui) {
                positions[this.id] = ui.position
                localStorage.positions = JSON.stringify(positions)
            }
        });

        // Make decals resizable
        $('#div' + i).resizable(
        {
            alsoResize: '#img' + i,

            stop: function (event, ui) {
                sizes[this.id] = ui.size
                localStorage.sizes = JSON.stringify(sizes)
            }
        });
    }
}

// Clear local storage and refresh page
function Reset()
{
    localStorage.removeItem('positions');
    localStorage.removeItem('sizes');
    location.reload();
}

// Store positions of draggable items in local storage
// Source: http://forum.jquery.com/topic/save-position-of-draggable-item
var sPositions = localStorage.positions || "{}",
    positions = JSON.parse(sPositions);
$.each(positions, function (id, pos) {
    $("#" + id).css(pos)
})

// Store sizes of resizable items in local storage
var sSizes = localStorage.sizes || "{}",
    sizes = JSON.parse(sSizes);
$.each(sizes, function (id, siz) {
    $("#" + id).css(siz)
})
