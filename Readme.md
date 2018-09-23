# grapher

a small utility to plot a 2D function in a unit or bi-unit square.

it is meant to quickly test 2D functions in a visual way.


### features
* Math functions & constants (sin, pow, PI etc. )
* allows function nesting ( a = b(x)*c(x) )
* prevents deletion while a nested function in use
* uses local storage
* self contained, no dependencies
* small-ish (could be smaller)
* draggable / resizable window
* implement GLSL methods from [shaderific](http://www.shaderific.com/glsl-functions/)
* parse and inline methods

[demo](https://rawgit.com/nicoptere/grapher/master/build/index.html)

####notes
parsing and inlining come from [this insightful article](https://medium.freecodecamp.org/parsing-math-expressions-with-javascript-7e8f5572276e) by [Shalvah A.](https://twitter.com/theshalvah)