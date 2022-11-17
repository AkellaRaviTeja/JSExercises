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
    console.log(populationList.filter((entry) => entry.age >= 18).map((entry => entry.name)))

    // it can also be done as follow: 
    // console.log(populationList.forEach((entry) => {
    //     entry.age >= 18 ? console.log(entry.name) : null
    // }))

    // NOTE: filter and map returns the list. whereas, forEach doesn't return anything.
    // if we need to save the result we can use filter/map not foreach
}

findVoteEligibleCandidates([
    {
        name:"Ravi",
        age:28
    },
    {
        name:"Teja",
        age:18
    },
    {
        name:"Spider-man",
        age:17
    }
])
