/****Write a loop that makes seven calls to
*****console.log to output the following triangle:
****/
//My solution:
var h = "#";
for(var i = 0; i < 7; i++) {
	console.log(h);
	h+="#";
}

//Author's solution
for(var line = "#"; line.length < 8; line += "#")
	console.log(line);