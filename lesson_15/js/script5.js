"use strict"
// Задача 5. Розробити клас «Керівник танців»
// Поля	Масив імен хлопців
// Масив імен дівчат
// Методи	Метод випадкового вибору імені хлопця
// Метод випадкового вибору імені дівчини
// Метод виведення пари для танців
// Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців

class HeadOfDances {
	constructor(initBoysNamesList, initGirlsNamesList){
		this.boysNamesList = initBoysNamesList
		this.girlsNamesList = initGirlsNamesList
	}
	getRandomBoyName(){
		return Math.floor(Math.random() * this.boysNamesList.length)
	}
	getRandomGirlName(){
		return Math.floor(Math.random() * this.girlsNamesList.length)
	}
	showCouplesForDancing(){
		const randomBoyName = this.boysNamesList[this.getRandomBoyName()]
		const randomGirlName = this.girlsNamesList[this.getRandomGirlName()]
		console.log(`Пара для танців: ${randomBoyName} - ${randomGirlName}`)
	}
	run(){
		setInterval(() => this.showCouplesForDancing(), 5000) 
	}
}

const boysNamesList = [
	"Oleksandr",
	"Dmytro",
	"Maksym",
	"Andrii",
	"Ivan",
	"Mykhailo",
	"Volodymyr"
]

const girlsNamesList = [
	"Anna",
	"Olena",
	"Mariya",
	"Iryna",
	"Kateryna",
	"Viktoriya",
	"Nataliya"
]

if (confirm('Почати тестування?')) {

const newHeadOfDances = new HeadOfDances(boysNamesList, girlsNamesList)
newHeadOfDances.showCouplesForDancing()
newHeadOfDances.run()

}