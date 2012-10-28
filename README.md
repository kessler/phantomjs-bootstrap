phantomjs-bootstrap
===================

A simple bootstrap script to load PhantomJS with additional dependencies. Clone or download bootstrap.js and run. (lib directory and main.js are just an example)

Syntax:

	phantomjs bootstrap.js <main script> <additional scripts>


Additional information
----------------------

*All the loaded resources must be relative to the directory from whence you start phantomjs.
*The main script will be evaludated after the main script, and the additional scripts will be evaluated in the order they were specified
*The additional scripts will a ***;*** separated list of either directories or files. In case of a directory the bootstrap will iterate and evaluate all the .js child files that reside inside it.