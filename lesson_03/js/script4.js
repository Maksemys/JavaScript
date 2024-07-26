// Вводимо необхідні данні
const humanAge = parseFloat(prompt('Введіть Ваш вік', '1'))

// Обчислення
if (humanAge <= 6) 
	alert('Ви є дитиною у садочку')
else if (humanAge > 6 && humanAge <= 17) 
	alert('Ви є школярем')
else if (humanAge > 17 && humanAge <= 24) 
	alert('Ви є студентом')
else if (humanAge > 24 && humanAge <= 59) 
	alert('Ви є працівником')
else
	alert('Ви є пенсіонером')


// Виводимо результат
document.write (`
	<div>Ваш вік ${humanAge}</div>
	`)