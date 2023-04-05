const { Heap } = require("@datastructures-js/heap");

function calculateLeaderboardPlaces(users, minScores) {
  const usersHeap = new Heap((a, b) => (a.score > b.score ? -1 : 1));
  usersHeap.insert({ score: minScores.firstPlaceMinScore });
  usersHeap.insert({ score: minScores.secondPlaceMinScore });
  usersHeap.insert({ score: minScores.thirdPlaceMinScore });

  let place = 1;
  users.forEach((user) => usersHeap.insert(user));
  const result = usersHeap.toArray().reduce((accum, user, index) => {
    if (user.userId) {
      accum.push({ userId: user.userId, place });
    } else if (!user.userId && ![0, 1, 2].includes(index)) {
      place--;
    }

    place++;
    return accum;
  }, []);

  return result;
}

module.exports = { calculateLeaderboardPlaces };
