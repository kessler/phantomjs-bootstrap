var fs = require('fs');

var fullPath = 'file:///' + fs.workingDirectory + '/';

var config = {
    baseUrl: fullPath + 'src',
    paths: {
        "toolkit": fullPath + "lib/toolkit/"
    }
};

console.log('\nrequirejs config: \n\n\t' + JSON.stringify(config) + '\n');

requirejs.config(config);

requirejs(  
    ['Foo'],
    function(Foo) {        
        /*var foo = new Foo();

        foo.bar();
        foo.bat('meow');*/
    }
);
