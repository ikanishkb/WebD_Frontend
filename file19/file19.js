var num = prompt("Enter a number");
console.log(isEven(num));
console.log(factorial(num));

function isEven(number){
    if(number%2 == 0){
        return true;
    }
    return false;
}

function factorial(number){
    if(number == 0){
        return 1;
    }
    return number*factorial(number-1);
}

function kebabToSnake(string){
    var newStr = string.replace(/-/g,"_");
    return newStr;
}

var todo = [];
var newarr =[];
var choice = prompt("What would you like to do?");

while(choice != "quit"){
    if (choice == "list"){
       listtodo();
    }
    else if(choice == "new"){
        pushtodo();
    }
    else if(choice == "delete"){
        deletedtodo();
    }
    choice = prompt("What would you like to do?");
console.log("you quit")
}

function listtodo(){
    console.log("*********");
    todo.map(function(data,index){
        console.log(index +":"+ data);
    })
    console.log("*********");
}

function pushtodo(){
    var newChoice = prompt("What would you like to add?");
    todo.push(newChoice);
}

function deletedtodo(){
    var delChoice = prompt("What would you like to delete?");
    todo.splice(delChoice,1);
}