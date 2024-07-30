// Вводимо необхідні данні
let productPrice = parseFloat(prompt('Введіть ціну товару у грн.', '0'))
let moneyQuantity = parseFloat(prompt('Введіть кількість грошей у грн.', '0'))
const balanceMoney = moneyQuantity - productPrice
const lotteryTicket = 4

// Обчислення
if(productPrice > moneyQuantity)
	alert("Вибачте, але у вас не достатьньо коштів! У покупці відмовлено!")
else {
	if (balanceMoney >= lotteryTicket)
		alert("Пропонуємо купити лотерею за 4 грн")
	else 
		alert ('Дякуємо за покупку!')
} 
