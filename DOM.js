function DOM(select){
    if(!select){
        console.error("Dom Selector Cannot be empty")
        return
    }
    return new DOMElem(select)
}



class DOMElem{
    #selector
    #elements
    length
    
    constructor(selector){
        this.#selector = selector
        this.#elements = document.querySelectorAll(this.#selector)
        this.length = this.#elements.length
    }
    
    #isValid(){
        if(!this.#elements){
            console.error("Empty Selection")
            return false
        }
        return true
    }

    get dom(){
        return this.#elements
    }

    //(Text, ignore type)
    text(textData = "",ignore = false){
        if(!this.#isValid())
            return
        
        const TYPE_OF_DATA = typeof textData
        
        //Handle Single String Data
        if(TYPE_OF_DATA == "string" || TYPE_OF_DATA == "number"){
            let i = 0;
            for(i = 0; i < this.length; i++){
                this.#elements[i].innerText = textData;
            }
            return this
        }

        //Handle Array Data
        if(Array.isArray(textData)){
            let i = 0
            const ARR_LENGTH = textData.length
            const ELEM_LENGTH = this.length
            
            if(ignore && ARR_LENGTH != ELEM_LENGTH){
                console.error("Length of input Array and DOM elements are not Same")
                return
            }
            
            const FINAL_LENGTH = ARR_LENGTH < ELEM_LENGTH ? ARR_LENGTH : ELEM_LENGTH
            for(i = 0; i < FINAL_LENGTH; i++){
                this.#elements[i].innerText = textData[i]
            }

        }else //Unknown Data Type
            console.error("Unknown Data type in text() method")
        return this
    }


    html(){
        



        return this
    }
}