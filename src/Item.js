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

        let inlineBtn = document.createElement( 'input' );
        inlineBtn.type = "button";
        inlineBtn.value = "inline";
        domElement.appendChild(inlineBtn);

        this.label = label;
        this.checkbox = checkbox;
        this.colorField = colorField;
        this.flag = flag;
        this.textField = textField;
        this.deleteBtn = deleteBtn;
        this.inlineBtn = inlineBtn;
        this.domElement = domElement;

        this.method = str;
        this.update();
        Item.id++;

    }

    update( time = 0 ){

        let name = this.name;
        this.label.innerText = "\t" + name + "\t";

        this.active = this.checkbox.checked;

        this.selected = document.activeElement === this.textField;

        this.method = this.textField.value.replace( /\s\s+/g, ' ' );//remove duplicate spaces

        //prevent stack overflow (recursive call to self )
        var reg = new RegExp( "\\b(" + name + ")\\b\\s*\\(", "gi" );
        if( reg.test( this.method ) ){
            this.valid = false;
            return;
        }

        try{
            eval("window[name] = functions[name] = function(x){ return "+ this.method +"; }; " );
            functions[name]( 1 );
            this.valid = true;
        }catch(e){
            this.valid = false;
            return;
        }
        functions.dictionary[name] = this.method;

        this.canInline;
    }


    removeInlineButton(){

        // this.domElement.removeChild(this.inlineBtn);

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
    set method( value ){
        this._method = value;
        this.textField.value = value;
    }

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

    get canInline(){

        let reg = /\b[a-z]([0-9].*)?\b\s?\(/gi;
        if( reg.test( this.method ) === true ){
            this.inlineBtn.style.visibility = 'visible';
            return true;
        }
        this.inlineBtn.style.visibility = 'hidden';
        return false;
    }
}