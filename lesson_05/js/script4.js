// Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем. 
const minNumber = 1, maxNumber = 100
let randomNumberQuantity = parseInt(prompt('Скільки вивести випадкових чисел?'))
	
document.write(`<ul class="list">`)
for (let i = 0; i < randomNumberQuantity; i++){
	let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
	document.write(`<li class="item">${randomNumber}</li>`)
}
document.write(`</ul>`)
