minifyify-issue
===============

Reference to https://github.com/ben-ng/minifyify/issues/54

### Setup ###

1. Generate minified bundle

        $ npm install
        $ node build.js

2. Run index.html in the web browser (Chrome)
3. Open the debugging console (Command-Alt-I)
![](http://i.imgur.com/goSc37b.png)
4. Notice that the console.log from main.js is sourced from a minified file
![](http://i.imgur.com/wJeR2OL.png)
