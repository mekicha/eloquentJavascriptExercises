/***Write a function min that takes two
**** arguments and returns their minimum.
***/

//My Solution

function min(arg1, arg2){
	if(arg1 < arg2)
		return arg1;
	else
		return arg2;
}

console.log(min(0,10));
console.log(min(0,-10));