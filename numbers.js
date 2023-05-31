
const Numbers = [9, 10, 5, 6, 3, 4, 7];

const sumData = () => {
return Numbers.reduce((sum, currentNumber) => {
	return sum + currentNumber;
})
}

export default sumData;