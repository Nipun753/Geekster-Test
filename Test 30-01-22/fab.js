var a=0;
var b=1;


var count;
var num=prompt("Enter the Nth number");
num=parseInt(num);
alert(a);
alert(b)
for(count=2;count<num;count=count+1){
var num2=a+b;

alert(num2);


a=b;
b=num2;
}