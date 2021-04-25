const http = require('http')
const url = 'http://www.africau.edu/images/default/sample.pdf'

const options = {headers: { 'content-type': 'application/pd'}}
http.get(url, (res) => {
	console.log(res.statusCode)
	res.on("data", (chunk) => console.log(chunk))
})
