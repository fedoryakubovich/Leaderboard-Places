const { calculateLeaderboardPlaces } = require("./calculateLeaderboardPlaces");

function checkResult(answer, correctAnswer) {
  if (!answer) return false;
  if (!Array.isArray(answer)) return false;
  if (answer.length !== correctAnswer.length) return false;

  for (let i = 0; i < correctAnswer.length; i++) {
    const correctAnswerElement = correctAnswer[i];

    const answerElement = answer.find(
      (x) => x.userId === correctAnswerElement.userId
    );
    if (!answerElement) return false;

    if (String(answerElement.place) !== String(correctAnswerElement.place))
      return false;
  }

  return true;
}

let result1 = calculateLeaderboardPlaces(
  [
    { userId: "id1", score: 3 },
    { userId: "id2", score: 2 },
    { userId: "id3", score: 1 },
  ],
  { firstPlaceMinScore: 100, secondPlaceMinScore: 50, thirdPlaceMinScore: 10 }
);
console.log(
  "test1",
  checkResult(result1, [
    { userId: "id1", place: 4 },
    { userId: "id2", place: 5 },
    { userId: "id3", place: 6 },
  ])
);

let result2 = calculateLeaderboardPlaces(
  [
    { userId: "id1", score: 100 },
    { userId: "id2", score: 3 },
    { userId: "id3", score: 2 },
    { userId: "id4", score: 1 },
  ],
  { firstPlaceMinScore: 100, secondPlaceMinScore: 50, thirdPlaceMinScore: 10 }
);
console.log(
  "test2",
  checkResult(result2, [
    { userId: "id1", place: 1 },
    { userId: "id2", place: 4 },
    { userId: "id3", place: 5 },
    { userId: "id4", place: 6 },
  ])
);

let result3 = calculateLeaderboardPlaces([{ userId: "id1", score: 55 }], {
  firstPlaceMinScore: 100,
  secondPlaceMinScore: 50,
  thirdPlaceMinScore: 10,
});
console.log("test3", checkResult(result3, [{ userId: "id1", place: 2 }]));

console.log("-----------------------------------------------------");

// let result1 = calculateLeaderboardPlaces(
//   [
//     { userId: "id1", score: 3 },
//     { userId: "id2", score: 2 },
//     { userId: "id3", score: 1 },
//   ],
//   { firstPlaceMinScore: 100, secondPlaceMinScore: 50, thirdPlaceMinScore: 10 }
// );
// let result2 = calculateLeaderboardPlaces(
//   [
//     { userId: "id1", score: 100 },
//     { userId: "id2", score: 3 },
//     { userId: "id3", score: 2 },
//     { userId: "id4", score: 1 },
//   ],
//   { firstPlaceMinScore: 100, secondPlaceMinScore: 50, thirdPlaceMinScore: 10 }
// );
// let result3 = calculateLeaderboardPlaces([{ userId: "id1", score: 55 }], {
//   firstPlaceMinScore: 100,
//   secondPlaceMinScore: 50,
//   thirdPlaceMinScore: 10,
// });

// console.log({ result1, result2, result3 });
