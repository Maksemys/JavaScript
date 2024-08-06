// Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm).
const minNumber = 1
const maxNumber = 10
let computerNumber
let userNumber = parseInt(prompt('Загадайте число від 1 до 10'))

for (let attempts = 2; attempts >= 0; attempts--) {
	computerNumber = minNumber + Math.floor(Math.random()*(maxNumber - minNumber + 1))
	let answer = confirm(`Загадане число це ${computerNumber}?`);
	if (answer === true) {
		alert("Компьютер вгадав число!")
		break
	}else if (attempts > 0)
		alert(`Компьютер не вгадав число, спроб лишилось ${attempts}`)
		else 
		alert(`У компьютера закінчилися спроби`)
}
