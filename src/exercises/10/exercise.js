// Complete the below function. Print the names of the candidates elibile to vote
// - Use Array methods
// - Do not use loops

// Example of inputArray

const voters = [
  {
    name: "Ravi",
    age: 28,
  },
  {
    name: "Teja",
    age: 8,
  },
];

function findVoteEligibleCandidates(populationList) {
  //   const eligibleVoters = populationList.filter(function (person) {
  //     return person.age > 18;
  //   });
  const eligibleVoters = populationList.filter((person) => person.age > 18);
  console.log(eligibleVoters);
}
findVoteEligibleCandidates(voters);
