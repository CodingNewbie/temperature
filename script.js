let unitSupF = "°F";
let unitSupC = "°C";
let convertBtn = document.getElementById("convert-btn");
let inputTemp = document.getElementById("input-temp");
let inputField = document.getElementById("input-temp");
let output = document.getElementById("output");
let unitSup = document.getElementById("unit-sup");
let convertTo = document.getElementById("convert-to");
let unit = document.getElementById("unit");

convertBtn.addEventListener("click", convertTemp);

inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        convertTemp();
    }
});

function convertTemp(){
    let inputValue = Number(inputTemp.value);

    if(isNaN(inputValue)){
        output.innerHTML = "Please enter a valid number.";
        unitSup.innerHTML = "";
        return;
    }

    else if (unit.value == "celsius"){
        if (convertTo.value == "fahrenheit"){
            let outputTemp = ((inputValue * (9/5) + 32)).toFixed(1);
            output.innerHTML = outputTemp;
            unitSup.innerHTML = unitSupF;
        }
        else{
            let outputTemp = inputValue;
            output.innerHTML = outputTemp;
            unitSup.innerHTML = unitSupC;
        }
    }

    else if (unit.value == "fahrenheit"){
        if (convertTo.value == "celsius"){
            let outputTemp = ((inputValue - 32) * 5/9).toFixed(1);
            output.innerHTML = outputTemp;
            unitSup.innerHTML = unitSupC;
        }
        else{
            let outputTemp = inputValue;
            output.innerHTML = outputTemp;
            unitSup.innerHTML = unitSupF;
        }
    }
}