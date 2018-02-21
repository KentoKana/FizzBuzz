//Create a list of numbers from 1 - 100
numList=()=>{
	let array = []
	for(i=0;i<100;i++){
		array.push(i);
	}
	return array;
}

let numArray = numList();

//Adds Fizz, Buzz, and FizzBuzz(written as THIS IS FIZZBUZZ for readability)

addFizzBuzz=(num1, num2)=>{
	for(i=0;i<numArray.length;i++){
		if(numArray[i]%(num1*num2) === 0){
			numArray[i]="THIS IS FIZZBUZZ"
		}else if(numArray[i]%num1 === 0){
			numArray[i] = 'Fizz'
		} else if(numArray[i]%num2 === 0){
			numArray[i] = 'Buzz'
		}
	}
	return numArray;
}

console.log(addFizzBuzz(3,5));