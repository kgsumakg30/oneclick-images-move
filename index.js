let count=0
const oneClick = () =>{
    if (count==0){
        document.getElementById("img1").style.display="none"
        document.getElementById("img2").style.display="block"
        document.getElementById("img3").style.display="none"
        count++}

else if(count==1){
    document.getElementById("img1").style.display="none"
    document.getElementById("img2").style.display="none"
    document.getElementById("img3").style.display="block"
    count++
}
else if(count==2){
    document.getElementById("img1").style.display="block"
    document.getElementById("img2").style.display="none"
    document.getElementById("img3").style.display="none"
    count=0
}
}
    
