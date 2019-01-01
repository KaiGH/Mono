// Declare arrays of shop items
var items = ["helmet", "poster", "print", "shirt", "strap", "suit"];
var prices = [79, 9, 8, 20, 5, 249];

// Cart variables for item count and value
var count = 0;
var total = 0;

// Add to cart method which is called by button press
function AddToCart(item)
{
    alert(item + " added to cart");
    FindItem(item);
}

// Find item in array
function FindItem(item)
{
    $.each(items, function (index, value)
    {
        if (item === value)
        {
            alert(item + " is of value " + prices[index]);
            Update(index);
        }
    });
}

// Update cart variables
function Update(index)
{
    count++;
    total += prices[index];
    alert("Cart items: " + count + " Total: " + total);
    Export();
}

// Update DOM
function Export()
{
    
}
