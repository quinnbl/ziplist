const firstList = [1,3,5];
const secondList = [2,4,6];

function zipList(listOne, listTwo) {
  let i = 0;
  const newList = [];

  while (i < listOne.length && i < listTwo.length) {
    newList.push(listOne[i]);
    newList.push(listTwo[i]);
    i++;
  }
  while (i < listOne.length) {
    newList.push(listOne[i]);
    i++;
  }

  while (i < listTwo.length) {
    newList.push(listTwo[i]);
    i++;
  }

  return newList;
}

console.log(zipList(firstList, secondList));

function zipListTheSimpleWay(listOne, listTwo) {
  const newList = _.zip(listOne, listTwo);

  return _.flatten(newList);
}

console.log(zipListTheSimpleWay(firstList, secondList));
