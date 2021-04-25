const fs = require("fs")

const readStream = fs.createReadStream("./text.txt", "utf8")

readStream.on("data", (chunk) => { console.log("This is the first readable:", chunk)})
readStream.read()

readStream.on("end", (chunk) => { console.log("nothing else to read")})
readStream.on("end", (chunk) => { console.log("nothing else to read")})
readStream.on("end", (chunk) => { console.log("nothing else to read")})
readStream.on("end", (chunk) => { console.log("nothing else to read")})
readStream.on("end", (chunk) => { console.log("nothing else to read")})
readStream.on("end", (chunk) => { console.log("nothing else to read")})
for (let i = 0;i < 99999; i++) {

	for (let y = 0;y < 99999; y++) {
	}
}

readStream.on("data", (chunk) => { console.log("This is the second readable:", chunk)})
readStream.on("data", (chunk) => { console.log("This is the second readable:", chunk)})
readStream.on("data", (chunk) => { console.log("This is the second readable:", chunk)})
readStream.on("data", (chunk) => { console.log("This is the second readable:", chunk)})
readStream.on("data", (chunk) => { console.log("This is the second readable:", chunk)})
readStream.on("data", (chunk) => { console.log("This is the second readable:", chunk)})

const newReadStream = fs.createReadStream("./text.txt")
newReadStream.on("data", (chunk) => { console.log("This is the second readable:", chunk)})
newReadStream.on("data", (chunk) => { console.log("This is the second readable:", chunk)})
