// Вивести на екран усі трицифрові числа, у яких перша цифра є більшою або рівною за суму другої і третьої.



	for (let num1 = 1; num1 <= 9; num1++) {
		for (let num2 = 0; num2 <= 9; num2++) {
			for (let num3 = 0; num3 <= 9; num3++) {
				document.write(`<div>`)
				if (num1 >= num2 + num3) {
				document.write(`${num1}`)
				}
				if (num2 <= num1-num3){
					document.write(`${num2}`)
				}
				if (num3 <= num1-num2){
					document.write(`${num3}`)
				}
				document.write(`</div>`)
		}
	}
}