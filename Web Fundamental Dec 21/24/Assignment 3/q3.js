var num = prompt("Enter a number");
num=parseInt(num);


var flag=0;
for(var i=1;i<=num;i=i+1){
if(num%i==0 && num/i==i){
flag=1;
break;
}
}
if(flag==1){
alert("Perfect Square")
}
else{
alert("Not a perfect square")
}