//Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.

const minNumber = 1, maxNumber = 1000
let evenNumber = 0, oddNumber = 0

for (let num = 1; num <= 100; num++) {
	let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
	// document.write(`Випадкове число №${num} = ${randomNumber}<br>`)
	if (randomNumber % 2 === 0) {
		evenNumber++
	} else
	oddNumber++
}
document.write(`Парних чисел = ${evenNumber}<br><br>`)
document.write(`Непарних чисел = ${oddNumber}<br><br>`)

if (oddNumber < evenNumber) {
	document.write(`Парних числе більше на ${evenNumber - oddNumber}`)
 } else if (oddNumber > evenNumber) {
	document.write(`Непарних числе більше на ${oddNumber - evenNumber}`)
 } else {
	document.write(`Парних та непарних чисел однакова кількість`)
 }