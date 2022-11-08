let bigImg=false
function imgBig(){
    let picOne = document.getElementById("discPicOne")

    if(!bigImg){
        bigImg=true
        picOne.classList.add("active")
    }else{
        bigImg=false
        picOne.classList.remove("active")
    }

}