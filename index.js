// code your solution here
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]

  function superbowlWin(array) {
    for (const data of array) {
        if (data.result === "W") {
            return data.year
        }
    }
  }

  const winningYear = superbowlWin(record);
  console.log(winningYear);

//   function superbowlWin(array) {
//     for (const data of array) {
//       // Use "W" (capital "W") instead of "w"
//       if (data.result === "W") {
//         // Use "data.year" instead of "array.year"
//         return data.year;
//       }
//     }
//   }
  
//   const winningYear = superbowlWin(record);
//   console.log(winningYear); // Output will be the year of the win or undefined if no win is found
  