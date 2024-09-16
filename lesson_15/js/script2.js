"use strict"
// Задача 2. Створити об’єкт «Авто». 
// Авто		
// Поля(властивості)	Марка
// Розмір бака
// Кількість наявних літрів
// Кількість місць
// Кількість пасажирів
// Методи (дії)	Заправка на вказану кількість літрів
// Виведення кількості пасажирів
// Додавання пасажирів
// Висадка пасажирів

const car = {
	// Поля(властивості)
	brand: 'Nissan',
	tankSize: 60,
	availableLiters: 40,
	seatsNumber: 5,
	passengersNumber: 4,

	// Методи (дії)
	refuelingCar: function (liters) {
		const refuelingAvailableLiters = this.tankSize - this.availableLiters
		if (liters > refuelingAvailableLiters) 
			alert('Кількість літрів перевищують доступний об\'єм для заправки')
		else {
			this.availableLiters += liters
			alert(`Авто заправлено, доступно ${this.availableLiters} літрів`)
		}
	},
	passengersDisplaying: function () {
		console.log('Кількість пассажирів у авто')
		console.log(this.passengersNumber)
	},
	passengersAdding: function (numberPassengersAdding) {
		if (this.seatsNumber - this.passengersNumber < numberPassengersAdding) {
			alert('Кількість пассажирів перевищують доступні місця')
		}
		else{
			this.passengersNumber += numberPassengersAdding
			alert(`Пассажирів додано, у авто зараз ${this.passengersNumber} пассажирів`)
		}
	},
	passengersOutput: function (numberPassengersOutput) {
		if (this.passengersNumber - numberPassengersOutput < 0) 
			alert('Стільки немає')
		else{
			this.passengersNumber -= numberPassengersOutput
			alert(`Пассажирів висажено, у авто зараз ${this.passengersNumber} пассажирів`)
		}
	}
} 

if (confirm('Почати тестування?')) {
car.refuelingCar(10)
car.passengersDisplaying()
car.passengersAdding(1)
car.passengersOutput(4)
}