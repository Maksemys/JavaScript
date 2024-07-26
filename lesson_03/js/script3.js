// Вводимо необхідні данні
alert('Вгадайте число від 1 до 5 за 2 спроби')

const minNumber = 1
const maxNumber = 5
const randomNumber = minNumber + Math.floor(Math.random()*(maxNumber - minNumber + 1))

const userChoiceFirst = parseFloat(prompt('Перша спроба! Введіть число від 1 до 5', '0'))
const userChoiceSecond = parseFloat(prompt('Друга спроба!Введіть число від 1 до 5', '0'))


// Обчислення
	if (userChoiceFirst === randomNumber || userChoiceSecond === randomNumber)
		alert(`Вітаєм! Ви вгадали ${randomNumber}!`)
	else alert('Ви не вгадали!!!!!!!!')


	document.write (`
		<div>Перший вибір = ${userChoiceFirst}</div>
		<div>Другий вибір = ${userChoiceSecond}</div>
		<div>Випадкове число = ${randomNumber}</div>
		`)


