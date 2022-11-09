let desiredString = 'imicro';
let currentString = '';

document.addEventListener('keydown', function(event) {
    switch (event.keyCode){
        case 73:currentString+="i"; break;
        case 77:currentString+="m"; break;
        case 67:currentString+="c"; break;
        case 82:currentString+="r"; break;
        case 79:currentString+="o"; break;
        default:currentString=""; break;

    }
    if (currentString==desiredString){document.getElementById("navbarTitle").innerHTML = "Hehe, easteregg"}
});


let darkmodeButton = document.getElementById("darkmode")


let røtter = document.documentElement


let dm_bg_color= "rgba(0, 0, 0, 0.287)"
let dm_theme_color= "#181818"
let dm_theme_color2="#262626"
let dm_txt_color="white"
let dm_gradient_first="rgba(255, 90, 90, 0.675)"
let dm_gradient_second="rgba(255, 144, 53, 0.675)"

let lm_bg_color= "#C6D8D3"
let lm_theme_color2= "#e4e5f1"
let lm_theme_color="#9394a5"
let lm_txt_color="#2B2628"
let lm_gradient_first="rgba(255, 90, 90, 0.675)"
let lm_gradient_second="rgba(255, 144, 53, 0.675)"


function darkmode(){
    
    if (localStorage.getItem("currentMode")==0){
        darkmodeButton.innerHTML= "<i class='fa-solid fa-moon'></i>"
        darkmodeButton.style.backgroundColor="white"
        darkmodeButton.style.color="black"
        localStorage.setItem("currentMode",1)
       

        røtter.style.setProperty('--txt-color', lm_txt_color);
        røtter.style.setProperty('--bg-color', lm_bg_color);
        røtter.style.setProperty('--theme-color', lm_theme_color);
        røtter.style.setProperty('--theme-color2', lm_theme_color2);
        røtter.style.setProperty('--gradient-first', lm_gradient_first);
        røtter.style.setProperty('--gradient-second', lm_gradient_second);
    



    }else{
        darkmodeButton.innerHTML= "<i class='fa-solid fa-sun'></i>"
        darkmodeButton.style.backgroundColor="black"
        darkmodeButton.style.color="white"
        localStorage.setItem("currentMode",0)
       


        røtter.style.setProperty('--txt-color', dm_txt_color);
        røtter.style.setProperty('--bg-color', dm_bg_color);
        røtter.style.setProperty('--theme-color', dm_theme_color);
        røtter.style.setProperty('--theme-color2', dm_theme_color2);
        røtter.style.setProperty('--gradient-first', dm_gradient_first);
        røtter.style.setProperty('--gradient-second', dm_gradient_second);
    }
    
}

const commentContainer = document.querySelector('.otherArea');
const featureComment = document.querySelector('.bulletPoint');

window.onscroll = function () {
    console.log(commentContainer.scrollTop);
    /* if(document.querySelector("body").scrollTop == featureComment.style.padding){
    } */
};
