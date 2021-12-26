var first=prompt("Enter the first  number");

first=parseInt(first);

var diff=prompt("Enter the Comman Ratio");

diff=parseInt(diff);

var num=prompt("Enter the Nth number");

num=parseInt(num);

var result= first * Math.floor(Math.pow(diff, num - 1)) ;

alert(result);