// function doubleIt(num) {
// 	return num * 2;
// }

// const doubleIt = function (num) {
// 	return num * 2;
// };

const doubleIt = (num) => num * 2;
const add = (x = 0, y = 0) => x + y;
const thankYouMessage = () => `Thank you so much`;
const bishal = (x, y) => {
	const sum = x + y;
	const diff = x - y;
	const result = sum * diff;
	return result;
};

const result = doubleIt(50);
const sum = add(10, 67);
const message = thankYouMessage();
const hudai = bishal(20, 10);

console.log(result);
console.log(sum);
console.log(message);
console.log(hudai);
