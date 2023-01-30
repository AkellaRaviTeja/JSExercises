// Complete the below function. Print the names of the candidates elibile to vote
// - Use Array methods
// - Do not use loops

// Example of inputArray
// const inputArray = 
// 	[
// 		{
// 			name:"Ravi",
// 			age:28
// 		},
// 		{
// 			name:"Teja",
// 			age:28
// 		}
// 	]

function findVoteEligibleCandidates(populationList) {
	populationList.forEach( item => {
		if (item.age >= 18)
			console.log(item.name)
	})
}

// findVoteEligibleCandidates(inputArray)