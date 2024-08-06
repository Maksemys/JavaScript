// Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.

let oddNumber = 0
let oddSum = 0 

let userNumberMin = parseInt(prompt('Загадайте мінімальне число'))
let userNumberMax = parseInt(prompt('Загадайте максимальне число'))

for (let num = userNumberMin; num <= userNumberMax; num++) {
	if (num % 2 !== 0) {
		oddNumber++
		oddSum += num
	}
	if (oddNumber === 5)
		break
}
document.write(`Сума непарних чисел = ${oddSum}`)