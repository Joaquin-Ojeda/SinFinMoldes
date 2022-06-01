function divLogin(num){
    if(document.getElementById("caja"+num).style.visibility=="visible"){
        document.getElementById("caja"+num).style.visibility="hidden";
        document.getElementById("caja"+num).style.display="none";
    }
    else{
        document.getElementById("caja"+num).style.visibility="visible";
        document.getElementById("caja"+num).style.display="block";
    }
}
function desmarcar(){
    document.getElementById("btn-menu").checked=false;
}