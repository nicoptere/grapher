import Grapher from "./src/Grapher";


let dom = document.getElementById("elt");
var grapher = new Grapher( dom );

function raf(){

    requestAnimationFrame(raf);
    grapher.update();

}
raf();