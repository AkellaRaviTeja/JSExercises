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
	let eligibleList = populationList.filter(i => i.age > 18, 0).map(i => i.name, 0)
	eligibleList.map(i=>console.log(i),0)
}

