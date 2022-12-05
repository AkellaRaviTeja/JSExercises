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
  let elibileCandidates = populationList.filter(function (candidates) {
    if (candidates.age > 18) {
      return true;
    }
  });
  console.log(elibileCandidates);
}
