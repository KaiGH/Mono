// Variables for current user selection
var colour = 'white';
var view = 'top';

// Update variable when user presses button then call Update()
function ChangeColour(selected)
{
    colour = selected;
    Update();
}
function ChangeView(selected)
{
    view= selected;
    Update();
}

// Update image in DOM with new value based on user selection
function Update()
{
    $('#car').fadeOut('slow',function()
    {
        $(this).attr('src', 'asset/config/' + colour + '-' + view + '.jpg').fadeIn('slow');
    });
}

// Click functions for various clickable objects in the DOM
$( "#black" ).click(function()
{
    ChangeColour('black');
});
$( "#blue" ).click(function()
{
    ChangeColour('blue');
});
$( "#green" ).click(function()
{
    ChangeColour('green');
});
$( "#grey" ).click(function()
{
    ChangeColour('grey');
});
$( "#gun" ).click(function()
{
    ChangeColour('gun');
});
$( "#orange" ).click(function()
{
    ChangeColour('orange');
});
$( "#red" ).click(function()
{
    ChangeColour('red');
});
$( "#titanium" ).click(function()
{
    ChangeColour('titanium');
});
$( "#white" ).click(function()
{
    ChangeColour('white');
});
$( "#yellow" ).click(function()
{
    ChangeColour('yellow');
});
$( "#toggle" ).click(function()
{
    if (view == 'side')
    {
        ChangeView('top');
    }
    else
    {
        ChangeView('side');
    }
});
