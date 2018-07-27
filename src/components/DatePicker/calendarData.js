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
export { months, getYears, getMonth, getYear, monthToString }