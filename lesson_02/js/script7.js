// Вводимо необхідні данні
let dayNumberMin = 0
let dayNumberMax = 6
let monthNumberMin = 1
let monthNumberMax = 12

// Знаходимо результат
let randomDay = Math.floor(Math.random()*(dayNumberMax - dayNumberMin + 1)) + dayNumberMin
let randomMonth = Math.floor(Math.random()*(monthNumberMax - monthNumberMin + 1 )) + monthNumberMin 
let randomSum = randomDay + randomMonth 

// Виводимо результат
document.write (`
	<div>Випадковий день: ${randomDay}</div>
	<div>Випадковий місяц: ${randomMonth}</div>
	<div>Сума: ${randomSum}</div>
	`)