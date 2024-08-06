fs = require('fs');

function leeDirectorio(err, data) {
	console.log('data:', data);
}

fs.readdir('/', leeDirectorio);

console.log("this comes after");