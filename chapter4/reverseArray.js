/*** write two functions, reverseArray and reverseArrayInPlace. 
**** The first, reverseArray, takes an array as argument and 
**** produces a new array that has the same elements in the 
**** inverse order. The second, reverseArrayInPlace, does what the
**** reverse method does: it modifies the array given as argument
**** in order to reverse its elements. Neither may use the standard
**** reverse method.
***/

function reverseArray(arr){
	var newArr = [];
	for(var i = 0; i < arr.length; i++){
		newArr.unshift(arr[i]);
	}
	return newArr;
}

function swapArray(arr,i, j){
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;

}

function reverseArrayInPlace(arr){
	var temp = 0;
	for(var i = 0; i < Math.floor(arr.length / 2); i++){
		swapArray(arr, i,arr.length -1 -i);
	}
}

//Author's solution

function reverseArray(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}