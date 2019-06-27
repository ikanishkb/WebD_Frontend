var clickme = document.querySelector("button");
var para = document.getElementById("para");
clickme.addEventListener("click", function(){
    para.textContent = "Someone clicked me";
});

var isCLicked = document.getElementById("heading")
isCLicked.addEventListener("click",function(){
    heading.style.background = "orange";
})

var clickbckgd = document.getElementById("color");
clickbckgd.addEventListener("click", function(){
    console.dir(color);
    body.style.backgroundColor = "purple";
})

var lis = document.querySelectorAll("li");
for(var i=0; i<lis.length; i++){
    lis[i].addEventListener("mouseover",function(){
        this.style.color = "green";
    })
    
    lis[i].addEventListener("mouseout", function(){
        this.style.color= "black";
    })
}