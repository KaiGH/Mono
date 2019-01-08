// Make shop items draggable
$('#helmet').draggable(
{
    revert:true,
    proxy:'clone',
});
$('#poster').draggable(
{
    revert:true,
    proxy:'clone'
});
$('#print').draggable(
{
    revert:true,
    proxy:'clone'
});
$('#shirt').draggable(
{
    revert:true,
    proxy:'clone'
});
$('#strap').draggable(
{
    revert:true,
    proxy:'clone'
});
$('#suit').draggable(
{
    revert:true,
    proxy:'clone'
});

// Make cart items droppable
$('#drop').droppable(
{
    // Accept item if it makes contact with any area of #drop
    tolerance:"touch",

    // Add item to cart on drop
    drop: function( event, ui ) 
    {
        var draggableId = ui.draggable.attr("id");
        AddToCart(draggableId);
        alert("Added " + draggableId + " to cart");
    } 
});
