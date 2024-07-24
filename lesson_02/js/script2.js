// Вводимо необхідні данні
let birthYear = parseInt(prompt('Введіть рік народження', '0'))
let currentYear = parseInt(prompt('Введіть поточний рік', '0'))

// Знаходимо результат
let result = currentYear - birthYear

// Виводимо результат
document.write (`
	<div>
		Вам ${result} років
	</div>
	`)