// Задача 12. Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції вибирається як одне з чотирьох зображень. Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн). Використати цикли і switch (для вибору зображення за номером).

const min = 1, max = 4
let imgSrc1, imgSrc2, imgSrc3

for (let num = 1; num <= 3; num++) {
	let randomImageNumber = Math.floor(Math.random() * (max - min + 1)) + min
	switch (num) {
		case 1:
			imgSrc1 = randomImageNumber
			break
		case 2:
			imgSrc2 = randomImageNumber
			break
		case 3:
			imgSrc3 = randomImageNumber
			break
	}
	document.write(`<img src="../img/image${randomImageNumber}.png" alt="Image${num}" width="350" height="380">`)
}

if (imgSrc1 === imgSrc2 && imgSrc2 === imgSrc3) {
	let userPrise = 0
	switch (imgSrc1) {
		case 1: userPrise = 100
			break
		case 2: userPrise = 200
			break
		case 3: userPrise = 500
			break
		case 4: userPrise = 1000
			break
	}
	alert(`Ваш приз дорівнює ${userPrise}грн.`)
} else {
	alert(`Ви нічого не виграли! Спробуйте ще раз!`)
}
