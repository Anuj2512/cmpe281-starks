var scShoppingCartServerURL = "http://localhost/cart";

var scSelectedCartIndex = 0;

function scGetUserShoppingCart(){
    $.ajax({
        url: scShoppingCartServerURL + '/user/anuj',
        error: function(xhr, status, error) {
           console.log(xhr.responseText);
        },
        success: function(data) {

        },
        dataType: "json"
     });
}
    