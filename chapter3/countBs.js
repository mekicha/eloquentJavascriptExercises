/*** Write a function countBs that takes a string as its
**** only argument and returns a number that indicates 
**** how many uppercase “B” characters are in the string.
***********************************************************
**** Next, write a function called countChar that behaves 
**** like countBs, except it takes a second argument that 
**** indicates the character that is to be counted (rather 
**** than counting only uppercase “B” characters). Rewrite 
**** countBs to make use of this new function.
***/

function countChar(str,char){
	var count = 0;
	for(var i = 0; i < str.length; i++){
		if(str.charAt(i) === char)
			count += 1;
	}
	return count;
}

function countBs(str){
	return countChar(str,'B');
}