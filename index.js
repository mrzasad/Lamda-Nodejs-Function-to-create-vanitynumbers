var aws = require("aws-sdk")
var AWS = require("aws-sdk");
var document = new aws.DynamoDB.DocumentClient()
var docClient = new AWS.DynamoDB.DocumentClient();
exports.handler = async(event, context, callback) => {
	console.log("EVENT", event)
	console.log("EVENT.PARAMTER", event.Parameters)
	// TODO implement
	var phoneNumber = event.Details.Parameters.CustomerNumber   // Getting the phone number from the Contact flow
	var vanityNumber = []
	var letter = [                                              // Initializing the Alpahabets for the venity numbers
		['A', 'B', 'C'],
		['D', 'E', 'F'],
		['G', 'H', 'F'],
		['J', 'K', 'L'],
		['M', 'N', 'O'],
		['P', 'Q', 'R', 'S'],
		['T', 'U', 'V'],
		['W', 'X', 'Y', 'Z']
	]

	for (var i = 0; i < 5; i++) {

		//repeat process five times

			console.log("LETTER[0]", letter[0]);
		for (let num in phoneNumber) {
			if (num == '0') {
				vanityNumber[i] += '0'
			}
			else if (num == '1') {
				vanityNumber[i] += '#'
			}
			else if (num == '2') {
				// vanityNumber[i] += letter[0][NODEJSRANDOMIZE]
				vanityNumber[i] += letter[0][Math.floor(Math.random() * Math.floor(3))]
			}
			else if (num == '3') {
				vanityNumber[i] += letter[1][Math.floor(Math.random() * Math.floor(3))]
			}
			else if (num == '4') {
				vanityNumber[i] += letter[2][Math.floor(Math.random() * Math.floor(3))]
			}
			else if (num == '5') {
				vanityNumber[i] += letter[3][Math.floor(Math.random() * Math.floor(3))]
			}
			else if (num == '6') {
				vanityNumber[i] += letter[4][Math.floor(Math.random() * Math.floor(3))]
			}
			else if (num == '7') {
				vanityNumber[i] += letter[5][Math.floor(Math.random() * Math.floor(4))]
			}
			else if (num == '8') {
				vanityNumber[i] += letter[6][Math.floor(Math.random() * Math.floor(3))]
			}
			else if (num == '9') {
				vanityNumber[i] += letter[7][Math.floor(Math.random() * Math.floor(4))]
			}

		}
	}
		console.log("PHONENUMBER", phoneNumber);
		var params = {
			TableName: 'vanityNumbers',
			Item: {
				'phoneNumber': phoneNumber,
				'Vanity-number1': vanityNumber[0].substring(9, 19).split("").join(" "),
				'Vanity-number2': vanityNumber[1].substring(9, 19).split("").join(" "),
				'Vanity-number3': vanityNumber[2].substring(9, 19).split("").join(" "),
				'Vanity-number4': vanityNumber[3].substring(9, 19).split("").join(" "),
				'Vanity-number5': vanityNumber[4].substring(9, 19).split("").join(" "),
			}
		};


	console.log("PARAMS", params);
	docClient.put(params, function(err, results) {
		if (err) {
			console.error(
				"Unable to put new connection data. Error:",
				JSON.stringify(err, null, 2)
			);
		}
		else {
			console.log("Put succeeded.", results);
		}
	});

	console.log(vanityNumber[i])
	let number1 = vanityNumber[0].substring(9, 19).split("").join(" ")
	// number1 = number1;
	console.log("NUMBER ONE", number1);
	const response = {
		statusCode: 200,
		CustomerNumber1: vanityNumber[0].substring(9, 19).split("").join(" "),
		CustomerNumber2: vanityNumber[1].substring(9, 19).split("").join(" "),
		CustomerNumber3: vanityNumber[2].substring(9, 19).split("").join(" "),
		CustomerNumber4: vanityNumber[3].substring(9, 19).split("").join(" "),
		CustomerNumber5: vanityNumber[4].substring(9, 19).split("").join(" "),
	};
	// return response;
	callback(null,response);
};