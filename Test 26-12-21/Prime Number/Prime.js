var num=prompt("Enter a number");

num=parseInt(num);

if(num==2){
alert("Prime Number");
}
else if(num==0 || num==1){
alert("Not a Prime Number")
}
else if(num%2==0){
alert("Not a Prime Number");
}
else{
alert("Prime Number")
}