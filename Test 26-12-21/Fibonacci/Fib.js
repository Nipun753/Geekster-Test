
var a=0;
var b=1;

console.log(a);
console.log(b);

var count;
var num=prompt("Enter the Nth number");
num=parseInt(num);

for(count=2;count<num;count=count+1){
var num2=a+b;

console.log(num2)

a=b;
b=num2;
}