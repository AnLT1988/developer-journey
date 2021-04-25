const _ = require('lodash')

const application = {
	riders: [
		{
			premium: [],
			id: '',
			type: 'R_ADD',
			code: "ADD10",
			name: "R_ADD",
			faceAmount: 10000,
			classImpatient: null,
			classOutpatient: null,
			classDental: null,
			insuredId: "e3343",
			insuredName: 'name'
		}
	]
}

function getData(riderCode, schemas) {
	const riders = application.riders
	let rider = riders.find(rider => rider.code = riderCode)

	var data = []
	for (schema of schemas) {
		let tempResult = {}
		tempResult.label = schema.label
		let value = rider[schema.path]
		if (schema.formatter) {
			value = schema.formatter(value)
		}
		tempResult.value = value
		data.push(tempResult);

	}

	return data
}

const riderCode = "ADD10"
const schemas = [
	{
		"applicableRiders": ["ADD10"],
		"schemas": [
			{
				"label": "premium",
				"path": "faceAmount",
				"formatter": (value) => { return String(value).toUpperCase() },
			},
			{
				"label": "classImpatient",
				"path": "classImpatient"
			}
		],
	}
]

selectedSchemas = schemas.find((schema) => schema.applicableRiders.includes(riderCode))
console.log(selectedSchemas)
console.log(getData(riderCode, selectedSchemas.schemas))
console.log(String(100).toUpperCase())
