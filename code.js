let desiredString = "imicro"
let currentString = ""

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 73) {
        /* i */
        currentString+="i"
    }
    else if(event.keyCode == 77) {
        /* m */
        currentString+="m"
    }
    else if(event.keyCode == 67) {
        /* c */
        currentString+="c"
    }
    else if(event.keyCode == 82) {
        /* r */
        currentString+="r"
    }
    else if(event.keyCode == 79) {
        /* o */
        currentString+="o"
    }
    else {
        currentString= ""
    }
    
    if (currentString==desiredString){
        document.getElementById("navbarTitle").innerHTML = "Hehe, easteregg"
    }
    
    
    

});

