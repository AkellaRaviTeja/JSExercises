// Complete the below function. Print the names of the candidates elibile to vote
// - Use Array methods
// - Do not use loops

// Example of inputArray
/*
	[
		{
			name:"Ravi",
			age:28
		},
		{
			name:"Teja",
			age:28
		}
	]
*/
function findVoteEligibleCandidates(populationList) {
	let resultArray=populationList.filter((candidate)=> candidate.age>18);
	resultArray.forEach((candidate)=> console.log(candidate.name));
}

