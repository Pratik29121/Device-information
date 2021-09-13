alert('Taking information of Device')
alert('Allowing to take information of battery')
var infor = "⚠️⚠️⚠️ : Your battery need a full charge 100%. Use cable 🔌 for charging your battery. A high bulk-charging rate wilk heat the battery, increase grassing and increase the absorption time needed to fully charge the battery.";
var body = document.getElementById("info");
setInterval(add,100);
var i = 0;

function add(){
if(infor[i] == "Z"){
    info.innerHTML += "\n";
    i++;
}
if(i < infor.length){
info.innerHTML+=infor[i];
i++;
""}
}
