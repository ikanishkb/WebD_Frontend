console.log($("li"));
console.log($("li")[0]);

$("h1").css("color","red");

var styles={
    color:"pink",
    fontweight:"bold"   
}
$("li").css(styles);

$("div").css("background","purple");
$("div.highlight").css("width","200px");
$("#third").css("border", "solid orange 5px");
$("div:first-of-type").css("border","pink 5px solid");
$("h1:first-of-type").css("background-color", "yellow"); 
console.log($("h1").text());
console.log($("h1").text("newtext"));
console.log($("h1").html());
console.log($("h1").html("<h6>hahaha</h6>"));
console.log($("#img").attr("src"));
console.log($("#img").attr("src", "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"));
$("input").attr("type","text");
$("input").attr("placeholder","your name");
$("input").val ();
$("input").val("batra");
$("h6").addClass("correct");
$("h6").removeClass("correct");
$("li").addClass("wrong");