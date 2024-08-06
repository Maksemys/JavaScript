// Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести). 

const userPaySum = parseFloat(prompt(`Користувачу треба сплатити суму в грн.`))
let userInputMoney = 0

do {
	let inputMoney = parseInt(prompt(`Внесіть грощі. Треба ще ${userPaySum - userInputMoney}грн.`))
		userInputMoney += inputMoney
} while (userInputMoney < userPaySum)
	alert('Вітаємо з покупкою !!!')