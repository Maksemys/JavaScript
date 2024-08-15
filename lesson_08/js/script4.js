// Задача 4. Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
//•	починаються на букву «А»;
//•	перша і остання літери співпадають;
//•	складаються з більше ніш 5 символів;


let carNumbers = ["AA2146BC", "BH2247BB", "AX2348BC", "AA2045BA", "BC3046", "BC30"]

document.write(`Номери автомобілів: ${carNumbers}<br><br>`)

function getCarsNumFirstA(carNumbers) {
	let firstA = "A"
	count = 0
	for (let i = 0; i < carNumbers.length; i++) {
		if (carNumbers[i].charAt(0) === firstA)
		count++
	}
	return count
}

document.write(`Кількість номерів, які починаються на букву «А»: ${getCarsNumFirstA(carNumbers)}<br><br>`)

function getCarsNumFirstAndLastLetterMatch(carNumbers) {
	count = 0
	for (let i = 0; i < carNumbers.length; i++) {
		if (carNumbers[i].charAt(0) === carNumbers[i].charAt(carNumbers[i].length - 1))
		count++
	}
	return count
}

document.write(`Кількість номерів, перша і остання літери співпадають: ${getCarsNumFirstAndLastLetterMatch(carNumbers)}<br><br>`)

function getCarsNumMoreFiveLetters(carNumbers) {
	count = 0
	for (let i = 0; i < carNumbers.length; i++) {
		if (carNumbers[i].length > 5)
		count++
	}
	return count
}

document.write(`Кількість номерів, складаються з більше ніш 5 символів: ${getCarsNumMoreFiveLetters(carNumbers)}<br><br>`)