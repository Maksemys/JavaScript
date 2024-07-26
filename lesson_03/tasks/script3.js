// Вводимо необхідні данні
alert('Вгадайте число від 1 до 5 за 2 спроби')

const minNumber = 1
const maxNumber = 5
const randomNumber = minNumber + Math.floor(Math.random()*(maxNumber - minNumber + 1))
let userChoice = parseFloat(prompt('Перша спроба! Введіть число від 1 до 5', '0'))

// Обчислюємо

if (userChoice === randomNumber) {
	alert(`Вітаємо! Ви вгадали число з першої спроби! Це число: ${randomNumber}`)
} else {
	alert("Ви ввели не правильно! Спробуйте ще раз!")

	userChoice = parseFloat(prompt('Друга спроба! Введіть число від 1 до 5', '0'));
	if (userChoice === randomNumber) {
		alert(`Вітаємо! Ви вгадали число з другої спроби! Це число: ${randomNumber}`)
	} else {
		alert(`У вас більше не залишилось спроб. Це число ${randomNumber}`)
	}
}

