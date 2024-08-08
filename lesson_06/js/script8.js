// Інвестор вклав  тис. грн на 20 років під 20% річних. Визначити за допомогою циклів суму, яку він одержить (без оподаткування).

let investorMoney = parseFloat(prompt('Введіть суму вкладу'))
let depositYears = 20
let yearPercent = 20/100
let sumEarningsYear = 0
let totalSumYears = 0

for (let num = 1; num <= depositYears; num++){
	sumEarningsYear = investorMoney*yearPercent*num
	totalSumYears = sumEarningsYear+investorMoney
}
document.write(`Дохід за ${depositYears} років складає ${totalSumYears}грн`)