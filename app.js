
var num0 = 0
var num1 = 0
let operation = null
var result = 0
var text = 0
var Element = document.getElementById("title")

function sum(){
        
    if (document.getElementById("title").textContent == "0"){}
    else{
            text = document.getElementById("title")
            num0 = Number(text.textContent)
            text.textContent =  0
            operation = "sum"
        }

}


function minus(){
        
    if (document.getElementById("title").textContent == "0"){}
    else{
            text = document.getElementById("title")
            num0 = Number(text.textContent)
            text.textContent =  0
            operation = "minus"
        }

}

function multiply(){
        
    if (document.getElementById("title").textContent == "0"){}
    else{
            text = document.getElementById("title")
            num0 = Number(text.textContent)
            text.textContent =  0
            operation = "multiply"
        }

}

function division(){
        
    if (document.getElementById("title").textContent == "0"){}
    else{
            text = document.getElementById("title")
            num0 = Number(text.textContent)
            text.textContent =  0
            operation = "division"
        }


}



function equal(){
        
        if (operation == "sum") {
            text = document.getElementById("title")
            num1 = Number(text.textContent)
            result = num0 + num1
            text.textContent = result

    }
        if (operation == "minus") {
            text = document.getElementById("title")
            num1 = Number(text.textContent)
            result = num0 - num1
            text.textContent = result

        }

        if (operation == "multiply") {
            text = document.getElementById("title")
            num1 = Number(text.textContent)
            result = num0 * num1
            text.textContent = result

        }

        if (operation == "division") {
            text = document.getElementById("title")
            num1 = Number(text.textContent)
            result = num0 / num1
            text.textContent = result

        }
}


function one(){
        if ( document.getElementById("title").textContent == "0" || Element.textContent == "Infinity"  || Element.textContent == "NaN") 
        {

            document.getElementById("title").textContent = "1" ;
        }
        
        else {
            document.getElementById("title").textContent += 1
        }
        
       

}

function two(){
    if ( document.getElementById("title").textContent == "0" || Element.textContent == "Infinity"  || Element.textContent == "NaN") 
    {

        document.getElementById("title").textContent = "2" ;
    }
    
    else {
        document.getElementById("title").textContent += "2"
    }

}
function three(){
    if ( document.getElementById("title").textContent == "0" || Element.textContent == "Infinity"  || Element.textContent == "NaN") 
    {

        document.getElementById("title").textContent = "3" ;
    }
    
    else {
        document.getElementById("title").textContent += "3"
    }

}
function four(){
    if ( document.getElementById("title").textContent == "0" || Element.textContent == "Infinity"  || Element.textContent == "NaN") 
    {

        document.getElementById("title").textContent = "4" ;
    }
    
    else {
        document.getElementById("title").textContent += "4"
    }

}function five(){
    if ( document.getElementById("title").textContent == "0" || Element.textContent == "Infinity"  || Element.textContent == "NaN") 
    {

        document.getElementById("title").textContent = "5" ;
    }
    
    else {
        document.getElementById("title").textContent += "5"
    }

}function six(){
    if ( document.getElementById("title").textContent == "0" || Element.textContent == "Infinity"  || Element.textContent == "NaN" ) 
    {

        document.getElementById("title").textContent = "6" ;
    }
    
    else {
        document.getElementById("title").textContent += "6"
    }

}function seven(){
    if ( document.getElementById("title").textContent == "0" || Element.textContent == "Infinity"  || Element.textContent == "NaN" ) 
    {

        document.getElementById("title").textContent = "7" ;
    }
    
    else {
        document.getElementById("title").textContent += "7"
    }

}function eight(){
    if ( document.getElementById("title").textContent == "0" || Element.textContent == "Infinity"  || Element.textContent == "NaN") 
    {

        document.getElementById("title").textContent = "8" ;
    }
    
    else {
        document.getElementById("title").textContent += "8"
    }

}function nine(){
    if ( document.getElementById("title").textContent == "0" || Element.textContent == "Infinity"  || Element.textContent == "NaN") 
    {

        document.getElementById("title").textContent = "9" ;
    }
    
    else {
        document.getElementById("title").textContent += "9"
    }

}function zero(){
    if ( document.getElementById("title").textContent == "0"|| Element.textContent == "Infinity"  || Element.textContent == "NaN" ) 
    {

        document.getElementById("title").textContent = "0" ;
    }
    
    else {
        document.getElementById("title").textContent += "0"
    }

}
function reset(){
    document.getElementById("title").textContent = "0"
    num0 = 0
    num1 = 0


}