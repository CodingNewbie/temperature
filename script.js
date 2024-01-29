let unitSupF = "°F";
let unitSupC = "°C";
let convertBtn = document.getElementById("convert-btn");
convertBtn.addEventListener("click", convertTemp);

function convertTemp(){
    let inputTemp = Number(document.getElementById("input-temp").value);
    if(isNaN(inputTemp)){
        document.getElementById("output").innerHTML = "Please enter a valid number.";
        document.getElementById("unit-sup").remove();
        return;
    }

    if (document.getElementById("unit").value == "celsius"){
        if (document.getElementById("convert-to").value == "fahrenheit"){
            let inputTemp = Number(document.getElementById("input-temp").value);
            let outputTemp = ((inputTemp * (9/5) + 32)).toFixed(1);
            document.getElementById("output").innerHTML = outputTemp;
            document.getElementById("unit-sup").innerHTML = unitSupF;
        }
        else{
            let inputTemp = Number(document.getElementById("input-temp").value);
            let outputTemp = inputTemp;
            document.getElementById("output").innerHTML = outputTemp;
            document.getElementById("unit-sup").innerHTML = unitSupC;
        }
    }
    else if (document.getElementById("unit").value == "fahrenheit"){
        if (document.getElementById("convert-to").value == "celsius"){
            let inputTemp = Number(document.getElementById("input-temp").value);
            let outputTemp = ((inputTemp - 32) * 5 / 9).toFixed(1);
            document.getElementById("output").innerHTML = outputTemp;
            document.getElementById("unit-sup").innerHTML = unitSupC;
        }
        else{
            let inputTemp = Number(document.getElementById("input-temp").value);
            let outputTemp = inputTemp;
            document.getElementById("output").innerHTML = outputTemp;
            document.getElementById("unit-sup").innerHTML = unitSupF;
        }
    }
}

