"use strict"
// Задача 4. Розробити клас Baner
// Поля	Масив об’єктів ( графічних зображень та посилань на сайти)

// методи	Метод випадкового вибору об’єкта (графічного зображення та посилання)
// Метод виведення випадкового банера

class Baner {
	constructor(initBaners) {
		this.baners = initBaners
	}
	getRandomBaner(){
		return Math.floor(Math.random() * this.baners.length)
	}
	showBaner(){
		const randomBaner = this.baners[this.getRandomBaner()]
		document.write(`
			<a target="_blank" href="${randomBaner.link}">
				<img src="${randomBaner.image}" alt="Банер" width="600">
			</a>
		`)
	}

}


const baners = [
	{
		image: "../img/baner1.webp",
		link: "https://www.google.com/"
	},
	{
		image: "../img/baner2.webp",
		link: "https://www.ukr.net"
	},
	{
		image: "../img/baner3.webp",
		link: "https://meta.ua/uk/"
	}
]

const newBaners = new Baner(baners)
newBaners.showBaner()
