/* const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

yearsUntilRetirement(1991, 'Kim');
console.log(yearsUntilRetirement(1993, 'Kim'));
console.log(yearsUntilRetirement(1970, 'Lee')); */

/* var avgDol = calcAverage(44, 23, 71);
var avgKoa = calcAverage(85, 54, 41);

function calcAverage(set1, set2, set3) {
  return set1 + set2 + set3 / 3;
}

console.log(avgDol);
console.log(avgKoa);

const checkWinner = function (avgDol, avgKoa) {
  if (avgDol > avgKoa) {
    console.log(`Dolpines win ${avgDol} vs ${avgKoa}`);
  } else if (avgKoa > avgDol) {
    console.log(`Koalas win ${avgDol} vs ${avgKoa}`);
  }
};

checkWinner(avgDol, avgKoa);
checkWinner(576, 111);

//Test2
avgDol = calcAverage(85, 54, 41);
avgKoa = calcAverage(23, 34, 27);
checkWinner(avgDol, avgKoa); */

/* const friends = ['kim', 'lee', 'park'];
friends[2] = 'Jay';
console.log(friends); */

/* const calcAge = (birthYear) => {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];
let result = years.map((x) => 2037 - x);

console.log(result); */

/* const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); // add Jay at the end
console.log(friends);
console.log(newLength);

friends.unshift('John'); // add John at the front
console.log(friends);

friends.pop();
console.log(friends);

friends.pop();
console.log(friends);

friends.shift(); // delete the first element
console.log(friends);
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Peter')) {
  console.log('You have a friend called Peter');
} */

/* let friends = ['Kim', 'Lee', 'HaeJong'];
console.log(friends);
friends.push('NH');
console.log(friends);

friends.pop();
console.log(friends);

friends.unshift('NH');
console.log(friends);

friends.shift();
console.log(friends);

friends.pop();
console.log(friends);

friends.unshift('NH and HJ');
console.log(friends); */

/* const bills = [125, 555, 44];
// const tips = [tipCal(bills[0]), tipCal(bills[1]), tipCal(bills[2])];
const tips = bills.map((x) => tipCal(x));
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

var bill = 100;
function tipCal(bill) {
  let tip = 0;
  if (bill >= 50 && bill <= 300) {
    return (tip = bill * 0.15);
  } else {
    return (tip = bill * 0.2);
  }
}

function calTipsForBill() {
  let calculatedTips = bills.map((x) => tipCal(x));
}

console.log(bills, tips);
console.log(totals); */

// const kimsArray = ['Kim', 'Seoul', 2022 - 1993];
// console.log(kimsArray);

// const namhyun = {
//   firstName: 'NH',
//   lastName: 'Kim',
//   girlfriend: 'Hae-Jong',
//   friends: ['a', 'b', 'c'],
// };

// console.log(namhyun.firstName);
// console.log(namhyun.lastName);

// const nameKey = 'Name';
// console.log(namhyun['first' + nameKey]);
// console.log(namhyun['last' + nameKey]);

// const interestedIn = prompt(
//   'What are u wonder for me? You can choose from firstName, lastName, and girlfriend'
// );

// if (namhyun[interestedIn]) {
//   console.log(namhyun[interestedIn]);
// } else {
//   console.log('Wrong request!');
// }

// console.log(
//   `${namhyun.firstName} has ${namhyun.friends.length} friends and the best one is ${namhyun.friends[0]}`
// );

/* const namhyun = {
  firstName: 'NH',
  lastName: 'Kim',
  girlfriend: 'Hae-Jong',
  age: 29,
  friends: ['a', 'b', 'c'],
  driverlicense: true,
  getSummary: function () {
    return `${this.firstName} is a ${this.age}, and he has ${
      this.driverlicense ? 'a' : 'no'
    } driver's license`;
  },
};

console.log(namhyun.getSummary()); */
/* const Mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = (this.mass / this.height) * 2;
    return this.bmi;
  },
};

const John = {
  fullName: 'John Smith',
  mass: 98,
  height: 1.95,
  calcBMI: function () {
    this.bmi = (this.mass / this.height) * 2;
    return this.bmi;
  },
};

Mark.calcBMI();
John.calcBMI();

console.log(Mark.bmi, John.bmi); */

var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var tips = [];
var totals = [];

// tips = tips.push(bills.map((x) => tipCal(x)));
// totals = totals.push(bills.map((x) => tipCal(x)));

function tipCal(bills) {
  let tip = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] >= 50 && bills[i] <= 300) {
      tip = bills[i] * 0.15;
      tips.push(tip);
      totals.push(tip + bills[i]);
    } else {
      tip = bills[i] * 0.2;
      tips.push(tip);
      totals.push(tip + bills[i]);
    }
  }
}

tipCal(bills);
console.log(bills, tips, totals);

const calAverage = function (arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return console.log(sum / arr.length);
};

// calAverage([2, 3, 7]);
calAverage(bills);
calAverage(tips);
calAverage(totals);
