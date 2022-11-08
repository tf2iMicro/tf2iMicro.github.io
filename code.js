let picOne = document.getElementById("discPicOne")

picOne.addEventListener("click",imgBig)
function imgBig(){picOne.classList.toggle("active")}
/* minker høyden til navbar ved scroll ned
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("#navbar").style.height = "12vh"
    } 
    else {
        document.querySelector("#navbar").style.height = "8vh"
    }
    prevScrollpos = currentScrollPos;
}
*/