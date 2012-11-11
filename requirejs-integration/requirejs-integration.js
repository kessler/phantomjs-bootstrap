var fs = require('fs');

var fullPath = 'file:///' + fs.workingDirectory + '/';

var config = {
    baseUrl: fullPath + 'src',
    paths: {
        "toolkit": fullPath + "lib/toolkit/", //whole dir
        "Moo": fullPath + "lib/Moo" // Single file
    }
};

console.log('\nrequirejs config: \n\n\t' + JSON.stringify(config) + '\n');

requirejs.config(config);

requirejs(  
    ['Foo', 'Moo'],
    function(Foo, Moo) {        

        var foo = new Foo();

        foo.bar();
        foo.bar('meow');

        Moo();
    }
);
