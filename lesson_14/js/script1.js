"use strict"
// Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
// ----- Властивості ------
// -	назва компанії на час розробки (назву періодично змінюють)
// -	власник компанії
// -	споснсори (масив спонсорів)
//       - прізвище спонсора
//       - ім’я  спонсора
//       - сума вкладень спонсора
// -	рік випуску
// -	вартість сайту
// Знайти:
// 1) загальну вартість усіх сайтів
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
// 5) знайти рік, коли прибуток був найбільшим
// 6) упорядкувати список за спаданням прибутку
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000


const sitesDevelopedByTheCompanies = [
	{
	  companyName: "WebSolutions Ltd", // назва компанії на час розробки
	  owner: {
		 firstName: "John",
		 lastName: "Doe"
	  }, // власник компанії
	  sponsors: [
		 {
			lastName: "Smith",
			firstName: "Anna",
			investment: 50000
		 },
		 {
			lastName: "Johnson",
			firstName: "Michael",
			investment: 75000
		 }
	  ], // спонсори (масив спонсорів)
	  releaseYear: 2020, // рік випуску
	  cost: 120000 // вартість сайту
	},
	{
	  companyName: "Tech Innovators", // назва компанії на час розробки
	  owner: {
		 firstName: "Sara",
		 lastName: "Williams"
	  }, // власник компанії
	  sponsors: [
		 {
			lastName: "Brown",
			firstName: "David",
			investment: 30000
		 },
		 {
			lastName: "Garcia",
			firstName: "Maria",
			investment: 45000
		 }
	  ], // спонсори (масив спонсорів)
	  releaseYear: 2007, // рік випуску
	  cost: 95000 // вартість сайту
	},
	{
	  companyName: "Innovate Studios", // назва компанії на час розробки
	  owner: {
		 firstName: "Mark",
		 lastName: "Thompson"
	  }, // власник компанії
	  sponsors: [
		 {
			lastName: "Miller",
			firstName: "Emily",
			investment: 40000
		 },
		 {
			lastName: "Davis",
			firstName: "James",
			investment: 60000
		 }
	  ], // спонсори (масив спонсорів)
	  releaseYear: 2009, // рік випуску
	  cost: 110000 // вартість сайту
	}
 ]

// 1) загальну вартість усіх сайтів
const totalCost = sitesDevelopedByTheCompanies.reduce(
		(prevTotalCost, site) => prevTotalCost + site.cost,
		0)
console.log("------------загальну вартість усіх сайтів")
console.log(totalCost)

// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
const sitesBetween2000And2009 = sitesDevelopedByTheCompanies.reduce(
	(prevCount, site) => (site.releaseYear >= 2000 && site.releaseYear <= 2009 ? prevCount + 1 : prevCount)
	, 0)
console.log("------------кількість сайтів, що було зроблено між 2000 та 2009 рр.")
console.log(sitesBetween2000And2009)

// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
const amountOfSponsorshipInvestmentsMoreThan100000 = sitesDevelopedByTheCompanies.reduce(
	(prevCount, site) => 
	{
		let sumInvestment = site.sponsors.reduce((sum, sponsor) => sum + sponsor.investment, 0)
		return sumInvestment > 100000 ? prevCount + 1 : prevCount
	}, 0
 )
console.log("------------кількість сайтів, де сума спонсорських вкладень була більшою за 100000")
console.log(amountOfSponsorshipInvestmentsMoreThan100000)

// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
let sponsorNames = []
for (const site of sitesDevelopedByTheCompanies) {
	for (const sponsor of site.sponsors) {
		sponsorNames.push(sponsor.lastName + ' ' + sponsor.firstName)
	}
}
console.log("------------загальний список усіх спонсорів ")
console.log(sponsorNames)

// 5) знайти рік, коли прибуток був найбільшим

let maxCost = 0
let yearMaxPrice = 0
for (const site of sitesDevelopedByTheCompanies) {
  if (site.cost > maxCost) {
	 maxCost = site.cost
	 yearMaxPrice = site.releaseYear
  }
}
console.log("------------рік, коли прибуток був найбільшим")
console.log(yearMaxPrice)

// 6) упорядкувати список за спаданням прибутку

let sortedArr = sitesDevelopedByTheCompanies.sort((firstSite, secondSite) => firstSite.cost - secondSite.cost) 

console.log("------------упорядкувати список за спаданням прибутку")
console.log(sortedArr)

// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 100000 і більше 100000

let sitesMoreThen100000 = sitesDevelopedByTheCompanies.filter(site => site.cost > 100000)
let sitesLeesThen100000 = sitesDevelopedByTheCompanies.filter(site => site.cost < 100000)

console.log("------------сайти з вартість більше 100000")
console.log(sitesMoreThen100000)
console.log("------------сайти з вартість до 100000")
console.log(sitesLeesThen100000)