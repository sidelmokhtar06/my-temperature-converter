const TextBox=document.getElementById("TextBox")
const toCelsuis=document.getElementById("toCelsuis")
const toFahrenheit=document.getElementById("toFahrenheit")
const result=document.getElementById("result")
let temp;

function convert(){
    
    if(toFahrenheit.checked){
        temp=Number(TextBox.value);
        temp=(temp*9/5) +32;
        result.textContent=temp.toFixed(1) +" F";
    }
    else if(toCelsuis.checked){
        temp=Number(TextBox.value);
        temp=(temp-32)*5/9;
        result.textContent=temp.toFixed(1) +" C";
    }
    else{
        result.textContent="Select a unit";

    }

}