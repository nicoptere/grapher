
export default class functions {

    static init(){

        window.functions = functions;




        var dictionary = {};
        var builtInfunctions = ["E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2", "abs", "acos", "acosh",
            "asin", "asinh", "atan", "atan2", "atanh", "cbrt", "ceil", "clz32", "cos", "cosh", "exp", "expm1", "floor",
            "fround", "hypot", "imul", "log", "log10", "log1p", "log2", "max", "min", "pow", "random", "round", "sign",
            "sin", "sinh", "sqrt", "tan", "tanh", "trunc"];

        builtInfunctions.forEach( function(f){
            window[f] = Math[f];
            dictionary[f] = f + "(?)";
            functions[f] = Math[f];
        });


        // GLSL methods
        // TODO implement GLSL methods (& types?!)
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