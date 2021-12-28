var num=prompt("Enter number");

num=parseInt(num);
if(num==0 || num==1){
console.log("Not a prime number")
}
else {
console.log(2);

for(var i=3;i<=num;i=i+1){
if(i%2 !=0){
console.log(i);
}
}
}
