// Declare arrays of shop items
var products = ["helmet", "poster", "print", "shirt", "strap", "suit"];
var prices = [79, 9, 8, 20, 5, 249];

// Cart variables for item count and value
var count = 0;
var total = 0;
var cart = [];

// Add to cart method which is called by button press
function AddToCart(item)
{
    FindItem(item);
}

// Find item in array
function FindItem(item)
{
    $.each(products, function (index, value)
    {
        if (item === value)
        {
            Update(index);
        }
    });
}

// Update cart variables
function Update(index)
{
    count++;
    total += prices[index];
    cart.push(products[index]);
    Export();
}

// Update DOM with Variable Values
function Export()
{
    $("#value").html($("#value").html().replace(value));
    $(value).html('<i class="fas fa-pound-sign"></i>' + total);
    $("#items").html($("#items").html().replace(total));
    $(items).html('<i class="fas fa-hashtag"></i>' + count);
}

// List items in cart on button press
function OpenCart()
{
    $.each(cart, function (index, value)
    {
        $( "#cartlist" ).append( "<li>"+value+"</li>" );
    });
}
