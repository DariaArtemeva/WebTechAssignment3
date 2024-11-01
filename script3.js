let stylesheetText = `

#slider {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 15px;
    background-color:  gray ;
    z-index: 99 ;
}

#slider::-webkit-slider-thumb {
    border-radius: 10px ;
    background-color: #fff ;
    cursor: pointer ;
    z-index: 9999 ;
    border: 2px solid black ;
    -webkit-appearance: none;
    appearance: none;
    width : 50px ;
    height: 20px ;
}
` ;

class customSlider extends HTMLElement {
    constructor(){
        super();
        this.value = parseFloat(this.getAttribute("value")) || 0;
        this.minimum   = parseFloat(this.getAttribute("minimum"))   || 1;
        this.max   = parseFloat(this.getAttribute("max"))   || 5;
        this.step  = parseFloat(this.getAttribute("step"))  || 1;

        this.root = this.attachShadow({mode:"open"}) ;
        this.dragging = false ;

        this.create();
        this.update();
    }

    attributeChangedCallback(name, oldValue, newValue){
        this.value = newValue;
        this.root.getElementById("slider").value = newValue; 
        this.update();
    }
    
    static get observedAttributes(){
        return ["value"];
    } 

    create(){
        let slider   = document.createElement("input") ;
        let sliderContainer = document.createElement("div");
        let sliderTrack = document.createElement("div");
        let value = document.createElement("div");

        let style = document.createElement("style") ;
        style.innerHTML = stylesheetText ;

        slider.type = "range" ;
        slider.id = "slider" ;
        slider.minimum = this.minimum ;
        slider.max = this.max ;
        slider.step = this.step ;
        slider.value = this.value ;
        sliderContainer.style.width = "100px";
        
        sliderContainer.id = "slider-container" ;
        sliderTrack.id = "slider-track" ;
        value.id = "value" ;

        slider.addEventListener("input",this.update.bind(this));
        sliderContainer.appendChild(slider);
        sliderContainer.appendChild(value);
        sliderContainer.appendChild(sliderTrack);
        this.root.appendChild(style);
        this.root.appendChild(sliderContainer);
    }

    update(){
        let track  = this.root.getElementById("slider-container");
        let slider = this.root.getElementById("slider");
        let value = this.root.getElementById("value");
        let valuePercentage = slider.value / (this.max-this.minimum) ;
        value.innerText = slider.value ;
        var sliderVal = slider.value;
     
        document.getElementById("inputchange").setAttribute("value", slider.value);
        sessionStorage.setItem("sliderValue", sliderVal);
        track.style.setProperty("--value",valuePercentage);
    }
}

customElements.define('custom-slider', customSlider );

class CustomInput extends HTMLElement{
    constructor(){
        super();
        this.value = parseFloat(this.getAttribute("value")) || 0;
        this.minimum   = parseFloat(this.getAttribute("minimum"))   || 1;
        this.max   = parseFloat(this.getAttribute("max"))   || 5;
        this.root = this.attachShadow({mode:"open"}) ;
        this.createInput();
    }

attributeChangedCallback(name, oldValue, newValue){
    this.value = newValue;
    this.root.getElementById("inputNumber").value = newValue; 
}

static get observedAttributes(){
    return ["value"];
} 
createInput(){
    
    let inputNumber   = document.createElement("input") ;
    let inputContainer = document.createElement("div");

    inputNumber.style.width = "100px";
    
    inputNumber.type = "number" ;
    inputNumber.id = "inputNumber" ;
    inputNumber.minimum = this.minimum ;
    inputNumber.max = this.max ;
    inputNumber.value = this.value ;

    inputNumber.addEventListener("input",this.update.bind(this));
    inputContainer.appendChild(inputNumber);
    this.root.appendChild(inputContainer);
}
update(){
    document.getElementById("sliderchange").setAttribute("value", this.root.getElementById("inputNumber").value);
    console.log(this.root.getElementById("inputNumber").value);

}
}

window.customElements.define('custom-input', CustomInput);