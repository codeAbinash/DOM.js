export default function DOM(select){
    'use strict'
    if(select == undefined){
        console.error("DOM element not found");
        return
    }
    return new DOMElem(select)
}


class DOMElem{
    'use strict'
    #selector = ""
    #elements = []
    constructor(selector){
        this.#selector = selector
        
        if(typeof selector == "string"){
            this.#elements = document.querySelectorAll(this.#selector)
            this.length = this.#elements.length
            if(this.length == 0)
                console.warn(`No such element as ${selector}`);
            return
        }

        if(selector instanceof Element){
            this.#elements = [selector]
            this.length = 1
            return
        }

        if(Array.isArray(selector)){
            //check if every element is DOM object
            const LENGTH = selector.length
            for(let i = 0; i < LENGTH; i++){
                if(!(selector[i] instanceof Element)){
                    console.error("Data Type is not valid")
                    return
                }
            }
            this.#elements = [...selector]
            this.length = LENGTH
            return
        }
        
        if(typeof selector == "object" && selector.constructor.name == this.constructor.name){
            // console.log("DOM ELEMENT");
            this.#elements = selector.domArr
            this.length = this.#elements.length
            return
        }
        console.error("Data type is not valid in selector")
    }

    get dom(){
        if(this.length == 1)
            return this.#elements[0]
        return this.domArr
    }
    get domArr(){
        return [...this.#elements]
    }
    n(nTh=0){
        if(nTh>=this.length){
            console.error(`DOM element not available, max : ${this.length - 1}`);
            return
        }
        return new DOM(this.#elements[nTh]) 
    }
    select(selector){
        if(!selector){
            console.error("Selector Cannot Be Empty");
            return
        }
        const elements = []
        for(let i = 0;i<this.length;i++){
            const elem = this.#elements[i].querySelectorAll(selector)
            elements.push(...elem)
        }
        return new DOM(elements)
    }

    set text(textData){
        const ARG_DATA_TYPE = typeof textData
        const ARG_IS_ARRAY = Array.isArray(textData)
        const DOM_LENGTH = this.length

        if(ARG_DATA_TYPE == "string" || ARG_DATA_TYPE == "number"){
            //Number or String (Single value)
            for(let i = 0; i < DOM_LENGTH; i++)
                this.#elements[i].innerText = textData

            return
        }

        if(ARG_IS_ARRAY){
            //Array Type data []
            const ARR_LENGTH = textData.length
            const LENGTH = DOM_LENGTH > ARR_LENGTH ? ARR_LENGTH : DOM_LENGTH;

            for(let i = 0; i < LENGTH; i++)
                new DOM(this.#elements[i]).text = textData[i]
            return
        }

        if(ARG_DATA_TYPE == "object" && !ARG_IS_ARRAY){
            //Handel Object Type {}
            let text = textData.text || textData.data
            const appendType = (textData.appendType || "modify").toLowerCase()
            const ignore = textData.ignore || false

            if(typeof text == "string" || typeof text == "number")
                text = [text]

            const ARR_LENGTH = text.length
            const LENGTH = ARR_LENGTH > DOM_LENGTH ? DOM_LENGTH : ARR_LENGTH;

            if(ARR_LENGTH != DOM_LENGTH && !ignore){
                console.error("Length of input Array and selected DOM elements are not Same")
                return
            }

            if(appendType == "modify"){
                if(LENGTH == 1)
                    for(let i = 0; i < DOM_LENGTH; i++)
                        this.#elements[i].innerText = text[0]
                else
                    for(let i = 0; i < LENGTH; i++)
                        this.#elements[i].innerText = text[i]
                return
            }

            if(appendType == "append"){
                if(LENGTH == 1)
                    for(let i = 0; i < DOM_LENGTH; i++)
                        this.#elements[i].innerText += text[0]
                else
                    for(let i = 0; i < LENGTH; i++)
                        this.#elements[i].innerText += text[i]
                return
            }

            if(appendType == "prepend"){
                if(LENGTH == 1)
                    for(let i = 0; i < DOM_LENGTH; i++)
                        this.#elements[i].innerText = text[0] + this.#elements[i].innerText
                else
                    for(let i = 0; i < LENGTH; i++)
                        this.#elements[i].innerText = text[i] + this.#elements[i].innerText
                return
            }
            return
        }
    }

    get text(){ 
        if(this.length == 1)
            return this.#elements[0].innerText
        return this.textArr
    }

    get textArr(){
        const LENGTH = this.length; let text = []
        for(let i = 0;i<LENGTH;i++)
            text.push(this.#elements[i].innerText)
        return text
    }

    //HTML Methods
    get html(){
        if(this.length == 1)
            return this.#elements[0].innerHTML
        return this.htmlArr
    }
    get htmlArr(){
        const LENGTH = this.length; let HTML = []
        for(let i = 0; i<LENGTH;i++)
            HTML.push(this.#elements[i].innerHTML)
        return HTML
    }

}