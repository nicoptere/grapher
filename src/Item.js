import functions from "./functions";
import Grapher from "./Grapher";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const COLORS = ["#FFCC00", "#00CC99", "#ff0080", "#6600CC", "#0066CC" ];

let _id = 0;
export default class Item {

    static set id(value){ _id = value; };
    static get id(){ return _id; };

    constructor( str ){

        this.id = Item.id;
        this.method = str;

        let name = this.name;

        let domElement = document.createElement('div');
        domElement.setAttribute("name", name);
        domElement.classList.add("item");
        this.domeElement = domElement;

        let label = document.createElement( 'label' );
        label.setAttribute("for", name );
        label.innerText = "\t" + name + "\t";
        domElement.appendChild(label);

        let flag = document.createElement( 'label' );
        domElement.appendChild(flag);

        let checkbox = document.createElement( 'input' );
        checkbox.setAttribute( "id", name );
        checkbox.type = "checkbox";
        checkbox.checked = true;
        domElement.appendChild(checkbox);

        let colorField = document.createElement( 'input' );
        colorField.type = "color";
        colorField.value = this.color;
        domElement.appendChild( colorField );

        let textField = document.createElement( 'input' );
        textField.type = "text";
        textField.tabIndex = this.id + 1;
        textField.value = str;
        textField.classList.add("highlight-text-idle");
        domElement.appendChild(textField);

        let deleteBtn = document.createElement( 'input' );
        deleteBtn.type = "button";
        deleteBtn.value = "delete";
        domElement.appendChild(deleteBtn);

        this.label = label;
        this.checkbox = checkbox;
        this.colorField = colorField;
        this.deleteBtn = deleteBtn;
        this.flag = flag;
        this.textField = textField;

        this.update();
        Item.id++;

    }

    update( time = 0 ){

        this.active = this.checkbox.checked;

        if( document.activeElement === this.textField ){
            this.selected = true;
        }

        let name = this.name;

        this.label.innerText = "\t" + name + "\t";

        var str = this.textField.value.replace( /\s\s+/g, ' ' );//remove duplicate spaces

        //prevent stack overflow (recursive call to self )
        var reg = new RegExp( "\\b(" + name + ")\\b\\s*\\(", "gi" );
        if( reg.test( str ) ){
            this.valid = false;
            return;
        }

        try{
            eval("window[name] = functions[name] = function(x){ return "+str+"; }; " );
            functions[name]( 1 );
            this.valid = true;
        }catch(e){
            this.valid = false;
            return;
        }
        functions.dictionary[name] = "(" + str.replace( /x\b/gi, "?" ) + ")";
        this.method = str;

    }

    //accessors

    get name(){
        let num = ( this.id < ALPHABET.length ? '' : ~~( this.id/ALPHABET.length ) - 1  );
        return ALPHABET.charAt( this.id % ALPHABET.length ) + num;
    }
    get color(){ return COLORS[ this.id % COLORS.length]; }

    get active(){ return this._active; }
    set active( value ){
        this.checkbox.checked = value;
        this._active = value;
    }

    get method(){ return this._method; }
    set method( value ){ this._method = value; }

    get selected(){ return this._selected; }
    set selected( value ){ this._selected = value; }

    get valid(){ return this._valid; }
    set valid( value ){
        this._valid = value;
        if( value ) {
            this.flag.classList.remove("invalid");
        }else{
            this.flag.classList.add("invalid");
        }
    }

}