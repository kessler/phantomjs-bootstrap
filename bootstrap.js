var fs = require('fs');

if (phantom.args.length === 0) 
 	throw 'usage:\n phantomjs bootstrap.js <main script to run> <additional libs separated by;>';

var main = './' + phantom.args[0];

if (!fs.exists(main)) 
	throw 'cannot find ' + main;
	
loadLibraries();

readAndEvaluateScript(main);

function loadLibraries() {
	if (phantom.args.length > 1) {
		
		var libPath = phantom.args[1].split(';');

		for (var i = 0; i < libPath.length; i++) {
			var currentPath = fs.workingDirectory + fs.separator + libPath[i];

			if (!fs.exists(currentPath)) 
				throw 'cannot find ' + currentPath;

			if (fs.isDirectory(currentPath)) {
				var files = fs.list(currentPath);
				
				for (var x = 0; x < files.length; x++) {
				
					var filename = files[x];
					var extension = filename.substr(-3);

					if (typeof(extension) === 'string') {
						extension = extension.toLowerCase();

						if (extension === '.js')					
							readAndEvaluateScript('./' + libPath + '/' + filename);
					}
				}

			} else {

				readAndEvaluateScript('./' +libPath[i]);
			}
		}	
	}
}

function readAndEvaluateScript(path) {
	console.log('loading ' + path);
	//var script = fs.read(path);
	require(path);
}
