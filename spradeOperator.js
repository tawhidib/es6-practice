const ages = [12, 14, 13, 15];
const ages2 = [15, 17, 18];
const ages3 = [23, 21, 24, 25];

const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages, ...ages2, ...ages3];
console.log(allAges);
console.log(allAges2);

// const max = Math.max(ages3); *** output will be : NaN
const max = Math.max(...ages3);
console.log(max);
