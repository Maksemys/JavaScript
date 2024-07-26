// Вводимо необхідні данні
let firstChildName = prompt('Введіть перше ім\'я дитини? ', 'Джон')
let firstChildСandys = parseInt(prompt(`Кількість цукерок у ${firstChildName}`, '1'))
let secondChildName = prompt('Введіть друге ім\'я дитини? ', 'Даймон')
let secondChildСandys = parseInt(prompt(`Кількість цукерок у ${secondChildName}`, '2'))

// Обчислення та вивод результата
if (firstChildСandys > secondChildСandys)
		alert(`Цукерок більше у ${firstChildName}`)
	else if (firstChildСandys < secondChildСandys)
		alert(`Цукерок більше у ${secondChildName}`)
 	else alert("Кількість цукерок однакова")