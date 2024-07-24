// Вводимо необхідні данні
let secondsQuantity = parseInt(prompt('Введіть кількість секунд, що пройшла від початку доби', '0'))

// Знаходимо результат
let minutesQuantity = secondsQuantity / 60
let hoursQuantity = secondsQuantity / 3600

// Виводимо результат
document.write (`
	<div>
		Кількість секунд, що пройшла від початку доби дорівнює ${secondsQuantity}сек.
	</div>
	<div>
		В хвилинах це дорівнює ${minutesQuantity.toFixed(2)}хв.
	</div>
	<div>
		В годинах це дорівнює ${hoursQuantity.toFixed(2)}год.
	</div>
	`)
