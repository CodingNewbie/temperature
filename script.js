let unitSupF = "°F";
let unitSupC = "°C";
let convertBtn = document.getElementById("convert-btn");
let inputField = document.getElementById("input-temp")

convertBtn.addEventListener("click", convertTemp);

inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        convertTemp();
    }
});

function convertTemp(){
    let inputTemp = Number(document.getElementById("input-temp").value);

    if(isNaN(inputTemp)){
        document.getElementById("output").innerHTML = "Please enter a valid number.";
        document.getElementById("unit-sup").remove();
        return;
    }

    else if (document.getElementById("unit").value == "celsius"){
        if (document.getElementById("convert-to").value == "fahrenheit"){
            let outputTemp = ((inputTemp * (9/5) + 32)).toFixed(1);
            document.getElementById("output").innerHTML = outputTemp;
            document.getElementById("unit-sup").innerHTML = unitSupF;
        }
        else{
            let outputTemp = inputTemp;
            document.getElementById("output").innerHTML = outputTemp;
            document.getElementById("unit-sup").innerHTML = unitSupC;
        }
    }
    else if (document.getElementById("unit").value == "fahrenheit"){
        if (document.getElementById("convert-to").value == "celsius"){
            let outputTemp = ((inputTemp - 32) * 5/9).toFixed(1);
            document.getElementById("output").innerHTML = outputTemp;
            document.getElementById("unit-sup").innerHTML = unitSupC;
        }
        else{
            let outputTemp = inputTemp;
            document.getElementById("output").innerHTML = outputTemp;
            document.getElementById("unit-sup").innerHTML = unitSupF;
        }
    }
}

