
export default class UI{


    constructor( main, container ){

        this.createCSS();

        let domElement = document.createElement('div');
        domElement.setAttribute("name", "UI");
        this.domElement = domElement;

        //add new button:
        let el = document.createElement("button");
        el.innerHTML = "add new";
        el.addEventListener("mousedown", ()=>{ main.addNew("x");}, false );
        domElement.appendChild(el);

        //spaces types
        ["unit", "bi-unit"].forEach( (str,i,a) => {

            let el = document.createElement("input");
            el.type = "radio";
            el.name = "range";
            el.value = i;
            el.setAttribute("id", str);
            el.checked = i === a.length - 1;
            domElement.appendChild(el);

            let la = document.createElement("label");
            la.setAttribute("for", str);
            la.innerHTML = str;
            domElement.appendChild(la);

        });
        main.container.appendChild(domElement);


    }

    get range(){
        return parseFloat( this.domElement.querySelector('input[name=range]:checked').value );
    }

    createCSS(){

        //this creates a CSS file, the hard way.
        var css = document.createElement('style');
        css.type = 'text/css';
        css.appendChild(document.createTextNode(`
        
            .graphHolder{
                overflow:hidden;
                resize: both;
                z-index: 10;
                position.absolute;
                border: 1px solid #EEE;
            }
            .graph-header{
                width : 100%;
                height : 8px;
                background-color : #eeeeee;
                display : block;
                color : #CCCCCC;
                z-index : 10;
            }
            .item{
                width:100%;
                display: flex;
                align-items: center;
            }
            .invalid{" +
                pointer-events: none;
                position:absolute;
                border-style: solid;
                border-width: 0 8px 16px 8px;
                border-color: transparent transparent #CC0000 transparent;
            }
            
            .resize{
                overflow:hidden;
                resize: vertical;
                border: 1px solid #EEE;
            }
            input[type=text]{
                -webkit-transition: all 0.5s;
                transition: all 0.5s;
            }
            input[type=text], input[type=button] {
                padding: 6px 10px;
                width: auto;
                margin: 4px 0;
                box-sizing: border-box;
                // border: 1px solid #EEE;
                outline: none;
            }
            
            input[type=color] {
                padding:2px;
                margin:0 8px 0 8px;
                height:30px;
                width:30px;
                border: 0;
            }
            
            input[type=text]:focus {
                width: 100%;
                border: 1px solid #AAA;
            }
            .highlight-text-idle{
                border: 1px solid #EEE;
            }
            
            .highlight-text-field{
                border: 1px solid #D00;
            }
            
            input[type=button]{
                background-color:#EEEEEE;
            }
            
            input[type=button]:hover {
                background-color:#F6F6F6;
            }`
        ));
        document.getElementsByTagName("head")[0].appendChild(css);
    }

}