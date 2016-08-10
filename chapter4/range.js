/***Write a range function that takes two arguments, start and 
****end, and returns an array containing all the numbers from 
****start up to (and including) end.
****Next, write a sum function that takes an array of numbers and 
****returns the sum of these numbers.
***/

//My Solution

function range(start, end, step){
	var arr = [];
	if(step == undefined){
		if(start < end)
			step = 1;
		else
			step = -1;
	}
	if(step > 0){
	  for(var i = start; i <= end; i += step){
		arr.push(i);
	  }
    }
    else {
    	for(var i = start; i >= end; i += step){
    		arr.push(i);
    	}
    }
    return arr;
}

function sum(arr){
	var total = 0;
	for(var i = 0; i < arr.length; i++){
		total += arr[i];
	}
	return total;
}
