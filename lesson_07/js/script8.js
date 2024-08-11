// Задача 7. Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)

function showRandomPicture(img1, img2, img3, img4) {
	let randomPictureNumber = Math.floor(Math.random() * 4) + 1
	let randomPicture
	switch (randomPictureNumber) {
		case 1:
			randomPicture = img1
			break;
		case 2:
			randomPicture = img2
			break;
		case 3:
			randomPicture = img3
			break;
		case 4:
			randomPicture = img4
			break;
	}

	document.write(`<img src=${randomPicture} alt="Image" width="350" height="380">`)
}

const img1 = "../img/image1.png"
const img2 = "../img/image2.png"
const img3 = "../img/image3.png"
const img4 = "../img/image4.png"

showRandomPicture(img1, img2, img3, img4)