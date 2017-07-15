
function findSum(){
	var sum=0;
	for(var i=0; i<arguments.length; i++){
		sum=sum+arguments[i];
		
	}
	return sum;
}
console.log("The sum of the numbers(1,2,3) is: "+findSum(1,2,3));
console.log("The sum of the numbers(1,2,3,4,5,6,7,8,9,10) is: "+findSum(1,2,3,4,5,6,7,8,9,10));