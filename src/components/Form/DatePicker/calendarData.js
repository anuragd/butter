/* This is planned to be the eventual home of all momentjs function calls, thereby enabling the removal of any direct references in the main component file */
import moment from 'moment'

let months = [
	{id:0,value:"January"},
	{id:1,value:"February"},
	{id:2,value:"March"},
	{id:3,value:"April"},
	{id:4,value:"May"},
	{id:5,value:"June"},
	{id:6,value:"July"},
	{id:7,value:"August"},
	{id:8,value:"September"},
	{id:9,value:"October"},
	{id:10,value:"November"},
	{id:11,value:"December"}
]

let getMonth = (date) => {
	if(date instanceof Date)
		return moment(date).format('MMMM')
	else
		return moment().format('MMMM')
}

let getYears = (min,max) => {
	let minYear, maxYear
	if(min instanceof Date && min instanceof Date) {
		minYear = moment(min).year()
		maxYear = moment(max).year()
	}
	else {
		//Generate +/- 20 years for today
		minYear = moment().year() - 20
		maxYear = moment().year() + 20
	}
	if(minYear > maxYear)
		console.error("Min date cannot be greater than max date")
	else {
		let years = []
		for(var i=0; i <= maxYear - minYear; i++) {
			years.push({id:i,value:minYear+i})
		}
		return years
	}
}

let getYear = (date) => {
	if(date instanceof Date)
		return moment(date).format('YYYY')
	else
		return moment().format('YYYY')
}

let monthToString = (month) => {
	return moment().month(month).format('MMMM')
}


// Disable days that are beyond the specified min-max range
let checkEdge = (month, year, min, max) => {
	if(!(min instanceof Date) || !(max instanceof Date) || moment(max).isBefore(moment(min)))
		return false
	let edgeDate = moment().startOf('month').month(month).year(year)
	if(edgeDate.isSameOrBefore(min))
		return -1
	if(edgeDate.isSameOrAfter(max))
		return 1
	return false
}

// Disable months that are beyond the specified min-max range
let processMonthsForEdge = (months, currentYear, min, max) => {
	let mutableDate = moment().startOf('month').year(currentYear)
	return months.map((month) => {
		if((mutableDate.endOf('month').month(month.id)).isBefore(moment(min)) || 
			(mutableDate.startOf('month').month(month.id)).isAfter(moment(max)))
			month.disabled = true
		else
			month.disabled = false
		return month
	})
}

// Disable years that are beyond the specified min-max range
let processYearsForEdge = (years, currentMonth, min, max) => {
	let mutableDate = moment().startOf('month').month(currentMonth)
	return years.map((year) => {
		if((mutableDate.endOf('month').year(year.value)).isBefore(moment(min)) || 
			(mutableDate.startOf('month').year(year.value)).isAfter(moment(max)))
			year.disabled = true
		else
			year.disabled = false
		return year
	})
}

export { months, getYears, getMonth, getYear, monthToString, checkEdge, processMonthsForEdge, processYearsForEdge }