// Вводимо необхідні данні
let userCategory = prompt('Введіть назву категорії водія на латиниці', 'A')
const categoryA = 'A'
const categoryB = 'B'
const categoryC = 'C'

// Обчислення

if (userCategory === categoryA) 
	alert('Ви можете керувати Мотоциклом')
else if (userCategory === categoryB) 
	alert('Ви можете керувати Легковим автомобілем')
else if (userCategory === categoryC) 
	alert('Ви можете керувати Вантажним автомобілем')
else 
	alert('Ви не вмієте керувати автомобілем')


