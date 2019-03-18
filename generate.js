const fs = require('fs');
const { 
	makeFlow: { makeFlow }, 
	mfOpening: { mfOpening }, 
	mfSmalltalk: { mfSmalltalk },
	mffallback: { mfFallback }
} = require('./app/index')

module.exports = {
	makeFlow (name) {
		fs.writeFile(process.cwd() +`\\${name}.yml`, makeFlow, function (err) {
			if (err) throw err;
			console.log(`Flow ${name}.yml telah dibuat`)
		});
	},
	mfOpening () {
		fs.writeFile(process.cwd() +`\\opening.yml`, mfOpening, function (err) {
			if (err) throw err;
			console.log(`Flow opening.yml telah dibuat`)
		});
	},
	mfSmalltalk () {
		fs.writeFile(process.cwd() +`\\smalltalk.yml`, mfSmalltalk, function (err) {
			if (err) throw err;
			console.log(`Flow smalltalk.yml telah dibuat`)
		});
	},
	mfFallback () {
		fs.writeFile(process.cwd() +`\\fallback.yml`, mfFallback, function (err) {
			if (err) throw err;
			console.log(`Flow fallback.yml telah dibuat`)
		});
	}
}