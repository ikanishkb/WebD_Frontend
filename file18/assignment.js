// 1)
// for(var i =1; i<=25;i++){
//     console.log(i);
// }

// 2)
// for(var i=30; i>0; i--){
//     console.log(i);
// }

// 3)
// for(var i=1;i<=100;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }

// 4)
// var sum = 0;
// for(var i=1;i<=50;i++){
//     sum+=i;
// }
// console.log(`Sum of 1st 50 natural numbers is ${sum}`);

// 5)
// var sumEven=0;
// for(var i=1; i<=50;i++){
//     if(i%2 == 0){
//         sumEven+=i;
//     }
// }
// console.log(`Sum of even numbers between 1 to 50 is ${sumEven}`);

// 6)
// var numberTable = prompt("Enter a number");
// for(var i=1;i<=10;i++){
//     console.log(`${i}*${numberTable} = ${i*numberTable}`);
// }

// 7)
// var isPrime = prompt("Enter a number");
// var flag = true;
// for(i=2;i<Math.sqrt(isPrime);i++){
//     if((isPrime%i)==0){
//         flag=false;
//          break;
//     }
// }
// if(flag==false){
//     console.log("Not a prime number");
// }
// else{
//     console.log("Prime number");
// }

// 8)
// console.log(1);
// console.log(2);
// for(var i=3; i<=100;i++){
//     var flag = true;
//     for(var j=2;j<=Math.sqrt(i);j++){
//         if (i%j == 0){
//             flag = false;
//         }
//     }
//     if(flag==true){
//     console.log(i);
//     }
// }

// 9)
// var numLines = prompt("Enter number of lines to print");
// for(var i=1;i<=numLines;i++){   
//     var str="";
//     for(var j=1;j<=i;j++){
//         str+="*";
//     }
//     console.log(str);
// }

//10)
// var numLines = prompt("Enter number of lines to print");
// for(var i=1;i<=numLines;i++){   
//     var str="";
//     for(var k=0;k<numLines-i; k++){
//         str+=" ";
//     }
//     for(var j=1;j<=2*i-1;j++){
//         str+="*";
//     }
//     console.log(str);
// }
