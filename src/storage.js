
export default class storage {

    static init( main ){

        //rebuilds formulas if they were stored locally
        var customMethods = JSON.parse( localStorage.getItem('customMethods') );
        //customMethods   = [ "tan( sin( fract( x * PI+time ) ) )*cos( x * PI * 2 - time)", "clamp( a( x-time ) * a ( x ),0,1)", "cos( x )", "x*c(x)*sin( x )" ]

        console.log( customMethods)
        if( customMethods !== null && customMethods.length > 0 ){

            customMethods.forEach( function(s){
                main.addNew(s);
            });

        }else{
            ["mix( b(x), c(x ), d(x )) ", "smoothstep( .25,.75,abs(sin(x+time)))", "fract(abs(x)*20)>.5", "sin(x*PI+time*2)*.25"]
            .forEach((x,i)=>{
                var item = main.addNew(x);
                item.active = i === 0;
            });
        }

    }

    static update(items){

        //saves the customMethods locally to display something on load
        localStorage.setItem('customMethods', JSON.stringify( items.map( (item) => { return item.method; } ) ) );


    }

}