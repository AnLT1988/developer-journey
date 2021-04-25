const _ = require('lodash')
let myMap = new Map()
const myObj = {'a': 1}
myMap.set(JSON.stringify(myObj), 'a1')
console.log(myMap.get(JSON.stringify(myObj)))
console.log(myMap.get(JSON.stringify({'a': 1})))

const myObj2 = [1, 2]
myMap.set(myObj2, 'a2')
console.log(myMap.get(myObj2))
console.log(myMap.get([1, 2]))

// SAF/RQPStatus:
// 0: not taken
// 1: taken and valid
// 2: taken and expired
const navigation = {
	entry: {
		SAFStatus0: 'gotoSAFIntro',
		SAFStatus2: 'gotoSAFForm',
		SAFStatus1: {
			RPQStatus0: 'gotoRPQIntro',
			RPQStatus1: 'gotoSAFResult',
			RPQStatus2: 'gotoRPQForm'
		}
	},
	gotoSAFForm: 'gotoSAFForm',
	gotoRPQForm: 'gotoRPQForm',
	gotoSAFResult: 'gotoSAFResult',
	gotoRPQResult: 'gotoRPQResult',
	gotoSAF: {
		SAFStatus0: 'gotoSAFIntro',
		SAFStatus2: 'gotoSAFIntro',
		SAFStatus1: 'gotoSAFResult',
	},
	gotoRPQ: {
		RPQStatus0: 'gotoRPQIntro',
		RPQStatus2: 'gotoRPQIntro',
		RPQStatus1: 'gotoRPQResult',
	}
}

action = 'gotoRPQ'
safstatus = 'SAFStatus0'
rpqstatus = 'RPQStatus2'
input = [action, safstatus, rpqstatus]

let destination = navigation
while (input) {
	destination = destination[input.shift()] || destination
	console.log('destination is', destination)
	if (typeof(destination) == "string") {
		console.log('break with destination', destination)
		break;
	}
}

console.log(destination)
