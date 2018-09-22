
export default class functions {

    static init(){

        window.functions = functions;

        var dictionary = {};
        var builtInfunctions = ["sin", "cos", "pow", "tan", "log", "exp", "abs", "sqrt", "asin", "acos", "min", "max", "ceil", "floor", "PI", "atan", "abs" ];
        builtInfunctions.forEach( function(f){
            window[f] = Math[f];
            dictionary[f] = f + "(?)";
            functions[f] = Math[f];
        });


        // GLSL methods
        // //todo implement GLSL methods & types
        var declarations = {

            smoothstep :    "function(a,b,t) { return mix( a,b, t * t * (3.0 - 2.0 * t)); }",
            mix :           "function(a,b,t) { return a * (1 - t) + b * t; }",
            fract :         "function(x) { return x % 1; }",
            mod :           "function(x,a) { return x % a; }",
            sign :          "function(x) { return x >= 0 ? 1 : -1; }",
            clamp :         "function(x, min, max) {return Math.min( max, Math.max( min, x ) );}",

        };

        for ( const key in declarations ){
            eval(  "window[ key ] = functions[ key ] = " + declarations[key] );
        }


        functions.dictionary = dictionary;
    }

}