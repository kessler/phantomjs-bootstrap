phantomjs-bootstrap
===================

A bootstrap script to load PhantomJS with additional dependencies. Simply download bootstrap.js alone (the rest are examples)

Syntax:

	phantomjs bootstrap.js --main=<main script to run> --require=<additional libs separated by;> --inject=<additional libs separated by;>


Additional information
----------------------

* All the loaded resources must be relative to the directory from whence you start phantomjs.
* required libs will be loaded using require() while injected ones will be loaded using phantom.injectJs()
* The main script will be evaludated after the the rest of the libraries are loaded and those will be evaluated in the order they were specified. Required libraries will always be evaluated before injected ones.
* The additional scripts will a `;` separated list of either directories or files. In case of a directory the bootstrap will iterate and evaluate all the .js child files that reside inside it.

About the examples
------------------

* simple-example 
	* requires (`require()`) requirelib/3.js and then requirelib/4.js and then injects all the scripts under scriptlib (in the order the file system returns them)
* requirejs-example: 
	* shows how to initialize requirejs to work inside phantomjs with full access to phantomjs apis (i.e not in a page context)