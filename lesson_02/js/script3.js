// Вводимо необхідні данні
let productPrice = parseInt(prompt('Введіть вартість товару', '0'))
let pruductQuantity = parseInt(prompt('Введіть кількість товару', '0'))

// Знаходимо результат
let result = productPrice * pruductQuantity
let pdv = result * 0.05

// Виводимо результат
document.write (`
	<div>
		Загальна вартість товару дорінює ${result}грн.
	</div>
	<div>
		ПДВ (5% від загальної вартості) складає ${pdv}грн.
	</div>
	`)