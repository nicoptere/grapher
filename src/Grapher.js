import Renderer from "./Renderer";
import Item from "./Item";
import functions from "./functions";
import storage from "./storage";
import Draggable from "./Draggable";

let startTime;
export default class Grapher {

    constructor( domElement, width = -1, height = -1 ){

        if( domElement === undefined ){
            domElement = document.body;
            width = 512;
            height = 512;
        }
        this.container = domElement;
        this.container.classList.add("graphHolder");

        if( width === -1 && height === -1 ){

            let rect = domElement.getBoundingClientRect();
            var size = Math.min( rect.width, rect.height );
            width = size;
            height = size;

        }

        this.renderer = new Renderer(this, Math.max( 256, width ), Math.max( 256, height ) );

        new Draggable(this.renderer.header, domElement);

        this.items = [];

        functions.init();

        storage.init(this);

        this.startTime = Date.now();

    }

    addNew( x ){

        let item = new Item( x );

        this.container.appendChild(item.domeElement);

        item.deleteBtn.addEventListener("mousedown", ()=>{this.dispose(item);} );

        this.items.push( item );

        return item;

    }

    dispose( toDelete ){

        var i = this.items.indexOf(toDelete);
        if( i === -1 )return;

        //new re-indexed list
        let id = 0;
        var newItems = this.items.filter( (it)=>{

            it.textField.classList.remove("highlight-text-field");

            if( it.id !== toDelete.id ){

                //name is dynamically computed from the id
                let tmpId = it.id;

                //this performs a temporary change of id
                it.id = id++;

                //gets the new name
                it.newName = it.name;

                //stores the new id
                it.newId = it.id;

                //and resets the previous id
                it.id = tmpId;

                return it;
            }
        });

        //checks if the method to delete is used by other methods
        var reg = new RegExp( "\\b(" + toDelete.name + ")\\b\\s*\\(", "gi" );
        var usage = [];
        this.items.forEach((s)=>{

            if( s.name === toDelete.name ) return;
            if( reg.test( s.method ) === true ){
                usage.push( s );
            }
        });

        //if so, highlights the fields where it is used
        if( usage.length > 0 ){
            console.warn( "item in use, you should fix the usage of "+ toDelete.name +" before deleting");
            usage.forEach((it)=>{
                console.log(  'in ', it.name, ">", it.method );
                it.textField.classList.add("highlight-text-field");
                setTimeout(()=>{
                    it.textField.classList.remove("highlight-text-field");
                }, 750);
            });
            this.items.forEach((s)=>{
                delete s.newId;
                delete s.newName;
            });
            return;
        }

        //replace custom functions usage with new names
        newItems.forEach((s)=>{

            var reg = new RegExp( "\\b(" + s.name + ")\\b\\s*\\(", "gi" );
            newItems.forEach((o)=> {

                if( s === o )return;
                o.method = o.method.replace( reg, s.newName + "(");

            });
            s.id = s.newId;
            delete s.newId;
            delete s.newName;

        });
        this.items = newItems;

        storage.update(this.items);

        this.container.removeChild( toDelete.domeElement );

    }




    update(){

        window.time = ( Date.now() - this.startTime ) * .001;

        this.items.forEach( ( item )=>{

            item.update( time );

        } );

        storage.update(this.items);

        this.renderer.render( this.items );

    }

}