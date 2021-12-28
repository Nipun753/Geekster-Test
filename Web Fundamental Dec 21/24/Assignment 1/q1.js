console.log("h1");

var num =prompt("Enter the number");

num=parseInt(num);
var fact=1;

while(num>1){
 fact=fact*num;
 num=num-1;
}
alert(fact);
