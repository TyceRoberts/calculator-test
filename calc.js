const readline = require('readline');

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});



reader.question("What would you like to calculate?", function (input) {
	const tokens = input.split(' ');

	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);

	console.log(mathSymbol);
	console.log(num1);
	console.log(num2);

	if (mathSymbol === '+') {
		let sum = num1 + num2;
		console.log(sum);
	} else if (mathSymbol === '-') {
		let sum = num1 - num2;
		console.log(sum);
	} else if (mathSymbol === '*') {
		let sum = num1 * num2;
		console.log(sum);
	} else if (mathSymbol === '/') {
		let sum = num1 / num2;
		console.log(sum);
	}


	// This line closes the connection to the command line interface.
	reader.close()

});