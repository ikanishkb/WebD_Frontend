$(" h1").click(function(){
    alert("h1 clicked");
})

$("button").click(function(){
    alert("button clicked");
})

$("input[type=text]").keypress(function(){
    console.log("key pressed");
})

$("input[type=text]").keypress(function(event){
    if(event.keyCode == 13){
    console.log("key pressed");
    }
})

$("h1").on("click",function(){
    $(this).css("color","purple");
})

$("input").on("keypress",function(){
    console.log("keypressed");
})

$("button").on("mouseenter",function(){
    $(this).css("font-weight","bold");
})

$("button").on("mouseleave",function(){
    $(this).css("font-weight","normal");
})

//effects
// $("button").on("click",function(){
//     $("div").fadeOut(2000); 
//     console.log("fade completed");
// })
//doesnt wait to fade   

$("button").on("click",function(){
    $("div").fadeOut(2000,function(){
        console.log("fade completed");
        $(this).remove;
    }); 
})