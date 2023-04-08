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

//method 1
// function findVoteEligibleCandidates(populationList) {
//   const eligibleCandidates = populationList.filter((ele) => ele.age >= 18);
//   eligibleCandidates.map((ele) => {
//     console.log(ele.name);
//   });
// }

//method 2

function findVoteEligibleCandidates(populationList) {
  populationList.map((Candidates) => {
    Candidates.age >= 18 && console.log(Candidates.name);
  });
}

module.exports = findVoteEligibleCandidates;
