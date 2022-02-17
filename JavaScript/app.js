var pulsar=1;
function divLogin(num){
    if(pulsar==1){
        document.getElementById("caja"+num).style.visibility="visible";
        document.getElementById("caja"+num).style.display="block";
        pulsar=0;
    }
    else{
        document.getElementById("caja"+num).style.visibility="hidden";
        document.getElementById("caja"+num).style.display="none";
        pulsar=1;
    }
}