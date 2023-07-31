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
