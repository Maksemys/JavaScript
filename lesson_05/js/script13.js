// Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами. 

let oddSum = 0 

let userNumberMin = parseInt(prompt('Загадайте мінімальне число'))
let userNumberMax = parseInt(prompt('Загадайте максимальне число'))

for (let num = userNumberMin; num <= userNumberMax; num++) {
	if (num % 2 !== 0) {
		oddSum += num;
	 } 
}
document.write(`Сума непарних чисел = ${oddSum}`)