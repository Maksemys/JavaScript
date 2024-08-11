// Задача 2. Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.

function getWorkingDay() {
	let dayNum = parseInt(prompt('Введіть номер дня від 1 до 7'))
	let workingDay
	switch (dayNum) {
		case 1: 
		case 2: 
		case 3: 
		case 4: 
		case 5: workingDay = `День №${dayNum} є робочім`
			break
		case 6: 
		case 7: workingDay = `День №${dayNum} є вихідним`
			break
	}
	return workingDay
} 

document.write(`${getWorkingDay()}`)
