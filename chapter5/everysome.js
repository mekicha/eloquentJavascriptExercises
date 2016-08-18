/*** Write two functions, every and some, that behave like
**** these methods, except that they take the array as their 
**** first argument rather than being a method.
**** every returns true only when the predicate returns true for
****  all elements of the array. Similarly, some returns true as
****  soon as the predicate returns true for any of the elements.
**** They do not process more elements than necessary—for 
**** example, if some finds that the predicate holds for the 
**** first element of the array, it will not look at the values
****  after that.
***/

function every(arr, func){
	var isEvery = false;
	for(var i = 0; i < arr.length; i++){
		if(func(arr[i]))
			isEvery = true;
		else
			isEvery = false;
	}
	return isEvery;
}

function some(arr, func){
	var isSome = false;
	for(var i = 0; i < arr.length; i++){
		if(func(arr[i]))
			return true;

	}
	return false;
}


//Author's solution code.


function every(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (!predicate(array[i]))
      return false;
  }
  return true;
}

function some(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i]))
      return true;
  }
  return false;
}