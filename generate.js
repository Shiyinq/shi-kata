const fs = require('fs');
const { 
	makeFlow: { makeFlow }, 
	mfOpening: { mfOpening }, 
	mfSmalltalk: { mfSmalltalk },
	mffallback: { mfFallback }
} = require('./app/index')

module.exports = {
	makeFlow (name) {
		fs.writeFile(__dirname +`\\${name}.yml`, makeFlow, function (err) {
			if (err) throw err;
			console.log(`Flow ${name}.yml telah dibuat`)
		});
	},
	mfOpening () {
		fs.writeFile(__dirname +`\\opening.yml`, mfOpening, function (err) {
			if (err) throw err;
			console.log(`Flow opening.yml telah dibuat`)
		});
	},
	mfSmalltalk () {
		fs.writeFile(__dirname +`\\smalltalk.yml`, mfSmalltalk, function (err) {
			if (err) throw err;
			console.log(`Flow smalltalk.yml telah dibuat`)
		});
	},
	mfFallback () {
		fs.writeFile(__dirname +`\\fallback.yml`, mfFallback, function (err) {
			if (err) throw err;
			console.log(`Flow fallback.yml telah dibuat`)
		});
	}
}