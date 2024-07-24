// Вводимо необхідні данні
let lenthCentimeter = parseInt(prompt('Введіть довжину в сантіметрах', '0'))

// Знаходимо результат
let lenthMeter = lenthCentimeter / 100
let lenthKilometer = lenthCentimeter / 1000

// Виводимо результат
document.write (`
	<div>
		Довжина дорівнює ${lenthCentimeter}см
	</div>
	<div>
		В метрах це дорівнює ${lenthMeter}м
	</div>
	<div>
		В кілометрах це дорівнює ${lenthKilometer}км
	</div>
	`)