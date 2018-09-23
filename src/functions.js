
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
        //from http://www.shaderific.com/glsl-functions/
        var declarations = {

            radians :       "function(x) { return x * ( Math.PI / 180. ); }",
            degrees :       "function(x) { return x * ( 180. / Math.PI ); }",
            smoothstep :    "function(a,b,x) { return mix( a,b, x * x * (3.0 - 2.0 * x)); }",
            exp2 :          "function(x) { return pow( x, 2. ); }",
            log2 :          "function(x) { return log( x ); }",
            inversesqrt :   "function(x) { return 1 / sqrt( x ); }",
            mix :           "function(a,b,x) { return a * ( 1. - x) + b * x; }",
            fract :         "function(x) { return x % 1.; }",
            mod :           "function(x,a) { return x % a; }",
            sign :          "function(x) { return x >= 0. ? 1. : -1.; }",
            step :          "function(x, a) { return x < a ? 0. : 1.; }",
            clamp :         "function(x, a, b){ return min( b, max( a, x ) );}",
            // length :        "function(x){ return abs( x );}",
            dot :           "function(a,b){ return ( a*b );}",
            distance :      "function(a,b){ return abs( a-b );}",
            normalize :     "function(x){ return 1.;}"

        };

        for ( const key in declarations ){
            eval(  "window[ key ] = functions[ key ] = " + declarations[key] );
        }


        functions.dictionary = dictionary;
    }

}