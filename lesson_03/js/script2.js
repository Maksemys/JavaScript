// Вводимо необхідні данні
let productPrice = parseFloat(prompt('Введіть ціну товару у грн.', '0'))
let moneyQuantity = parseFloat(prompt('Введіть кількість грошей у грн.', '0'))

// Обчислення
if(productPrice > moneyQuantity)
	alert("Вибачте, але у вас не достатьньо коштів! У покупці відмовлено!")
else alert("Пропонуємо купити лотерею за 4 грн")
