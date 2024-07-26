// Вводимо необхідні данні
let dayNumber = parseInt(prompt('Введіть номер дня тиждня', '1'))
const mondey = 1
const tuesday = 2
const wednesday = 3
const thursday = 4
const friday = 5
const saturday = 6
const sunday = 7

// Обчислюємо

if (dayNumber == mondey)
	alert('Понеділок')
else if (dayNumber == tuesday)
	alert('Вівторок')
else if (dayNumber == wednesday)
	alert('Середа')
else if (dayNumber == thursday)
	alert('Четвер')
else if (dayNumber == friday)
	alert('П\'ятниця')
else if (dayNumber == saturday)
	alert('Субота')
else if (dayNumber == sunday)
	alert('Неділя')
else alert('Ви некоректно ввели номер дня тиждня')

