const unitSupF = "°F";
const unitSupC = "°C";
const convertBtn = document.getElementById("convert-btn");
const inputTemp = document.getElementById("input-temp");
const inputField = document.getElementById("input-temp");
const output = document.getElementById("output");
const unitSup = document.getElementById("unit-sup");
const convertTo = document.getElementById("convert-to");
const unit = document.getElementById("unit");
const indicator = document.getElementById("temp-indicator");
const root = document.documentElement;

convertBtn.addEventListener("click", convertTemp);

inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        convertTemp();
    }
});

function convertTemp(){
    let inputValue = Number(inputTemp.value);
    let outputTemp = 0;

    if(isNaN(inputValue)){
        output.innerHTML = "Please enter a valid number.";
        unitSup.innerHTML = "";
        return;
    }

    else if (unit.value == "celsius"){
        if (convertTo.value == "fahrenheit"){
            outputTemp = celToFar(inputValue);
            output.innerHTML = outputTemp;
            unitSup.innerHTML = unitSupF;
        }
        else{
            outputTemp = inputValue;
            output.innerHTML = outputTemp;
            unitSup.innerHTML = unitSupC;
        }
    }

    else if (unit.value == "fahrenheit"){
        if (convertTo.value == "celsius"){
            outputTemp = farToCel(inputValue);
            output.innerHTML = outputTemp;
            unitSup.innerHTML = unitSupC;
        }
        else{
            outputTemp = inputValue;
            output.innerHTML = outputTemp;
            unitSup.innerHTML = unitSupF;
        }
    }

    indicator.classList.remove("slide-to-temp");
    void indicator.offsetWidth;
    indicator.classList.add("slide-to-temp");
    root.style.setProperty("--temp-end", `${inputValue * 2}%`);
}

function celToFar(cel){
    return ((cel * (9/5) + 32)).toFixed(1);
}

function farToCel(far){
    return ((far - 32) * 5/9).toFixed(1);
}