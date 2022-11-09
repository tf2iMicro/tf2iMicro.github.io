let desiredString = 'imicro';
let currentString = '';

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 73) {
        /* i */
        currentString += 'i';
    } else if (event.keyCode == 77) {
        /* m */
        currentString += 'm';
    } else if (event.keyCode == 67) {
        /* c */
        currentString += 'c';
    } else if (event.keyCode == 82) {
        /* r */
        currentString += 'r';
    } else if (event.keyCode == 79) {
        /* o */
        currentString += 'o';
    }
    /* picOne.addEventListener("click",imgBig) */
    function imgBig() {
        picOne.classList.toggle('active');
    }
});
/* minker høyden til navbar ved scroll ned
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("#navbar").style.height = "12vh"
    } 
    else {
        currentString= ""
    }
    
    if (currentString==desiredString){
        document.getElementById("navbarTitle").innerHTML = "Hehe, easteregg"
    }
});
    prevScrollpos = currentScrollPos;
}
*/

const commentContainer = document.querySelector('.otherArea');
const featureComment = document.querySelector('.bulletPoint');

window.onscroll = function () {
    console.log(commentContainer.scrollTop);
    /* if(document.querySelector("body").scrollTop == featureComment.style.padding){
    } */
};
