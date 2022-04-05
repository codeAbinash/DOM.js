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
        let fn = {
            "append" : false,
            "ignore" : false,
        }
        this.#editTextElem(textData, fn)
    }

    set textA(textData){//textAppend
        let fn = {
            "append" : true,
            "ignore" : false,
        }
        this.#editTextElem(textData, fn)
    }

    get text(){
        if(this.length == 1)
            return this.#elements[0].innerText
        return this.textArr
    }

    get textArr(){
        let text = []
        for(let i = 0;i<this.length;i++)
            text.push(this.#elements[i].innerText)
        return text
    }

    #editTextElem(textData,fn){
        const DATA_TYPE = typeof textData
        const ignore = fn.ignore
        const append = fn.append

        if(DATA_TYPE == "string" || DATA_TYPE == "number"){
            //Handle Single String Data
            if(append)
                for(let i = 0; i < this.length; i++)
                    this.#elements[i].innerText += textData
            else
                for(let i = 0; i < this.length; i++)
                    this.#elements[i].innerText = textData

            return
        }

        if(Array.isArray(textData)){
            //Handle Array Data
            let i = 0
            const ARR_LENGTH = textData.length
            const ELEM_LENGTH = this.length

            if(!ignore && ARR_LENGTH != ELEM_LENGTH){
                console.error("Length of input Array and selected DOM elements are not Same")
                return
            }
            
            const FINAL_LENGTH = ARR_LENGTH < ELEM_LENGTH ? ARR_LENGTH : ELEM_LENGTH
            if(append)
                for(i = 0; i < FINAL_LENGTH; i++)
                    this.#elements[i].innerText += textData[i]
            else
                for(i = 0; i < FINAL_LENGTH; i++)
                    this.#elements[i].innerText = textData[i]
        }else //Unknown Data Type
            console.error("Unknown Data type in text() method")
        return
    }
}