// Задача 2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
//●	номери днів, протягом яких кількість відвідувачів була меншою за 20;
//●	номери днів, коли кількість відвідувачів була мінімальною;
//●	номери днів, коли кількість відвідувачів була максимальною;
//●	загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.

if(confirm('Почати тестування?')) { 
	const weekDays = 7

// функція для вводу відвідувачів протягом тиждня
function pushVisitorsPerWeek(weekDays) {
	let arr = []
	for (let i = 0; i < weekDays; i++) {
		let visitorsNum = parseInt(prompt(`Введіть кількість відвідувачів у день №${i+1}`))
		arr.push(visitorsNum)
	}
	return arr
}
let visitorsPerWeek = pushVisitorsPerWeek(weekDays)
document.write(`кількість відвідувачів магазину протягом тижня: ${visitorsPerWeek}<br><br>`)


//функція для номери днів, протягом яких кількість відвідувачів була меншою за 20
function LessThanTwentyVisitors(visitorsPerWeek) {
	let arrLessThanTwentyVisitorsDays = []
	for (let index = 0; index < visitorsPerWeek.length; index++) {
		if (visitorsPerWeek[index] < 20)
			arrLessThanTwentyVisitorsDays.push(index+1)
	}
	return arrLessThanTwentyVisitorsDays
}
document.write(`номери днів, протягом яких кількість відвідувачів була меншою за 20: ${LessThanTwentyVisitors(visitorsPerWeek)}<br><br>`)


//функція для номери днів, коли кількість відвідувачів була мінімальною;
function getMinVisitorsNumDays(visitorsPerWeek) {
	const minVisitors = Math.min(...visitorsPerWeek)
	let minVisitorsNumDays = []
	for (let index = 0; index < visitorsPerWeek.length; index++) {
		const visitorCount = visitorsPerWeek[index]
		if (visitorCount === minVisitors)
			minVisitorsNumDays.push(index+1)
	}
	return minVisitorsNumDays
}
document.write(`номери днів, протягом яких кількість відвідувачів була мінімальною: ${getMinVisitorsNumDays(visitorsPerWeek)}<br><br>`)


//функція для номери днів, коли кількість відвідувачів була максимальною;
function getMaxVisitorsNumDays(visitorsPerWeek) {
	const maxVisitors = Math.max(...visitorsPerWeek)
	let maxVisitorsNumDays = []
	for (let index = 0; index < visitorsPerWeek.length; index++) {
		const visitorCount = visitorsPerWeek[index]
		if (visitorCount === maxVisitors)
			maxVisitorsNumDays.push(index+1)
	}
	return maxVisitorsNumDays
}
document.write(`номери днів, протягом яких кількість відвідувачів була максимальною: ${getMaxVisitorsNumDays(visitorsPerWeek)}<br><br>`)


//функція для загальну кількість клієнтів у робочі дні
function getSumVisitorsWorkDays(visitorsPerWeek) {
	let sumWorkDays = 0
	for (let day = 0; day < visitorsPerWeek.length - 2; day++) {
			sumWorkDays += visitorsPerWeek[day]
	}
	return sumWorkDays
}
document.write(`загальну кількість клієнтів у робочі дні: ${getSumVisitorsWorkDays(visitorsPerWeek)}<br><br>`)


//функція для загальну кількість клієнтів на вихідних
function getSumVisitorsWeekendDays(visitorsPerWeek) {
	let sumWeekendDays = 0
	for (let day = 5; day < visitorsPerWeek.length; day++) {
		sumWeekendDays += visitorsPerWeek[day]
	}
	return sumWeekendDays
}
document.write(`загальну кількість клієнтів у вихідні дні: ${getSumVisitorsWeekendDays(visitorsPerWeek)}<br><br>`)
}