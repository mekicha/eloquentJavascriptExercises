/*** List Data Structure
**** var list = {
****  value: 1,
****  rest: {
****    value: 2,
****    rest: {
****      value: 3,
****      rest: null
****    }
****  }
**** };

**** Write a function arrayToList that builds up a data structure
**** like the  one above when given [1, 2, 3] as argument, and
****  write a listToArray function that produces an array from a
****  list. 
**** Also write the helper functions prepend, which takes an 
**** element and a list and creates a new list that adds the 
**** element to the front of the input list, and nth, which takes
**** a list and a number and returns the element at the given 
**** position in the list, or undefined when there is no such 
**** element.
***/

function arrayToList(array){
	var list = {};
	for(var i = array.length - 1; i >= 0; i--){
		list = {value: array[i], rest: list};
	}
	return list;
	
}

function listToArray(list){
	var array = [];
	for(var node = list; node; node = node.rest)
		array.push(node.value);
	return array;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

function prepend(element, list){
	var newlist = {};
	newlist.value = element;
	newlist.rest = list;
	return newlist;

}

function nth(list, index){
	var counter = 0;
  var node = list;
	while(node && counter < index){
      node = node.rest;
      counter = counter + 1;
  }
     return node.value;
}

//author's prepend function
function prepend(value, list) {
  return {value: value, rest: list};
}

//author's nth function: recursive;
function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}