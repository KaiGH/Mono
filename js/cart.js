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
    FillCart();
    StoreCookie();
}

// Display cart upon button press
function OpenCart()
{
    Show('cart');
}

// Add items to div container in DOM
function FillCart()
{
    ResetCart();
    $.each(cart, function (index, value)
    {
        $("#cartlist").append("<li>"+value+"</li>");
    });
    $("#cartlist").append("Items: " + count + "<br>");
    $("#cartlist").append("Total: £" + total);
}

// Remove all items from div container
function ResetCart()
{
    $('#cartlist').contents().remove();
}

// Remove all items from the cart
function EmptyCart()
{
    cart = [];
    count = 0;
    total = 0;
    Export();
    FillCart();
}

// Store in cookie
function StoreCookie()
{
    var json = JSON.stringify(cart);
    CreateCookie('cartCookie', json);

}

// Create a cookie that expires next year
function CreateCookie(cookieName, cookieValue)
{
    var expires = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    expires = "expires="+expires.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    alert(cookieName + "=" + cookieValue + ";" + expires + ";path=/");
}

// Read cookie back to array
function ReadCookie(cookieName)
{
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    var json;
    for(var i = 0; i < ca.length; i++)
    {
        var c = ca[i];
        while (c.charAt(0) == ' ')
        {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0)
        {
            json = c.substring(name.length, c.length);
        }
    }
    cart = JSON.parse(json);
    VariableSetter();
}

// Set count and total variables from cookie
function VariableSetter()
{
    $.each(cart, function (index, value)
    {
        $.each(products, function (pindex, pvalue)
        {
            if (value == pvalue)
            {
                count++;
                total += prices[index];
            }
        });
    });
} 
