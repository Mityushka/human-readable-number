module.exports = function toReadable(number) {
	const NUMS_IN_HUMAN = {
		0: "zero",
		1: "one",
		2: "two",
		3: "three",
		4: "four",
		5: "five",
		6: "six",
		7: "seven",
		8: "eight",
		9: "nine",
		10: "ten",
		11: "eleven",
		12: "twelve",
		13: "thirteen",
		14: "fourteen",
		15: "fifteen",
		16: "sixteen",
		17: "seventeen",
		18: "eighteen",
		19: "nineteen",
		20: "twenty",
		30: "thirty",
		40: "forty",
		50: "fifty",
		60: "sixty",
		70: "seventy",
		80: "eighty",
		90: "ninety",
		100: "one hundred",
		200: "two hundred",
		300: "three hundred",
		400: "four hundred",
		500: "five hundred",
		600: "six hundred",
		700: "seven hundred",
		800: "eight hundred",
		900: "nine hundred",
		1000: "thousand",
	};
	let strNum = "";
	const recurssion = (number, rank) => {
		if (NUMS_IN_HUMAN[number] != undefined) {
			return NUMS_IN_HUMAN[number];
		}

		let firstDigit = parseInt(number / rank);

		return strNum + firstDigit != 0
			? NUMS_IN_HUMAN[firstDigit * rank] != undefined
				? NUMS_IN_HUMAN[firstDigit * rank] +
				  " " +
				  recurssion(number % rank, rank / 10)
				: NUMS_IN_HUMAN[firstDigit] +
				  " " +
				  NUMS_IN_HUMAN[rank] +
				  " " +
				  recurssion(number % rank, rank / 10)
			: "" + recurssion(number % rank, rank / 10);
	};

	return recurssion(number, 1000);
};
