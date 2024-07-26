// Вводимо необхідні данні
let monthNumber = parseInt(prompt('Введіть номер місяця', '1'))


// Обчислюємо
if (monthNumber == 12 || monthNumber <= 2)
	alert('Зима')
else if (monthNumber == 3 || monthNumber <= 5)
	alert('Весна')
else if (monthNumber == 6 || monthNumber <= 8)
	alert('Літо')
else if (monthNumber == 9 || monthNumber <= 11)
	alert('Осінь')
else alert('Ви некоректно ввели номер місяця')

