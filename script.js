//create a click handler for the Post button.

    $("button").click(function(){
        var message = $("input").val();
        $(".comments").append("<p>"+message+"</p>");
});

var row;


// header toggles brands when clicked :)
var header = $(".header");
header.click(function () {
    header.toggleClass("instagram");
    var brand = header.text();
    header.text(brand === "Instagram" ? "Facebook" : "Instagram");
});