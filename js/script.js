function appoint(){
    document.getElementById("number").innerHTML=Math.floor(Math.random()*11)+10;
    document.getElementById("Enterbtn").style.display = "none";
}
function finalsubmit() {
    var num = document.getElementById("dtailapp").value;
    if(num>=10&&num<=20){
        document.getElementById("output").style.display = "block";
        document.getElementById("correct").style.display = "block";
        document.getElementById("submitvalue").style.display = "none";
    }
    else if(num<10||num>20) {
        document.getElementById("output").style.display = "block";
        document.getElementById("incorrect").style.display = "block";
        document.getElementById("submitvalue").style.display = "none";
    }
}