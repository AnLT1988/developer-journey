const stream = require('stream');
const fs = require('fs');

fs.writeFileSync('sample.txt', 'This is a simple file but yet sophisticated', 'utf8')
readable = fs.createReadStream('sample.txt', {encoding: 'utf8', highWaterMark: 4})
readable.pause()
console.log(readable.readableFlowing)
console.log(readable)
console.log(readable.read())

function writeOneMillionTimes(writer, data, encoding, callback) {
	let i = 50;
	write();
	function write() {
		let ok = true;

		do {
			i--;
			if (i === 0) {
				// Last time!
				ok = writer.write(data, encoding, callback);
				console.log(`With i = ${i}, ok = ${ok}, writer buffer = ${writer.writableBuffer}`)
			} else {
				// See if we should continue, or wait.
				// Don't pass the callback, because we're not done yet.
				if (i == 1) {
					data = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
				}
				ok = writer.write(data + i, encoding);
				console.log(`With i = ${i}, ok = ${ok}, writer buffer = ${writer.writableBuffer}`)
				console.log(writer.writableBuffer)
			}
		} while (i > 0 );

		if (i > 0) {
			// Had to stop early!
			// Write some more once it drains.
			console.log('Stop at i = ' + i)
			writer.once('drain', () => {console.log('###########Continue pleasessssssssssssssssssssssssssssssss')})
			writer.once('drain', write);
		}
	}
}


writer = stream.Writable({
	write: (chunk, encoding, callback) => {
			setTimeout(() => {
			console.log('Writing ' + chunk)
			callback()}, 0)
		},
	highWaterMark: 8
})
console.log(writer.writableHighWaterMark)

var data = 'aaaaaaa'
// writeOneMillionTimes(writer, data, 'utf8', () => {console.log('end')});
setTimeout(() => {console.log('Timed out')}, 2000)
console.log('Ending')
