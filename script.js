const unitSupF = "°F";
const unitSupC = "°C";
const unitSupK = "°K";
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
        else if (convertTo.value == "kelvin"){
            outputTemp = celToKel(inputValue);
            output.innerHTML = outputTemp;
            unitSup.innerHTML = unitSupK;
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
        else if (convertTo.value == "kelvin"){
            outputTemp = farToKel(inputValue);
            output.innerHTML = outputTemp;
            unitSup.innerHTML = unitSupK;
        }
        else{
            outputTemp = inputValue;
            output.innerHTML = outputTemp;
            unitSup.innerHTML = unitSupF;
        }
    }

    else if (unit.value == "kelvin"){
        if (convertTo.value == "celsius"){
            outputTemp = kelToCel(inputValue);
            output.innerHTML = outputTemp;
            unitSup.innerHTML = unitSupC;
        }
        else if (convertTo.value == "fahrenheit"){
            outputTemp = kelToFar(inputValue);
            output.innerHTML = outputTemp;
            unitSup.innerHTML = unitSupF;
        }
        else{
            outputTemp = inputValue;
            output.innerHTML = outputTemp;
            unitSup.innerHTML = unitSupK;
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

function celToKel(cel){
    return (cel + 273.15).toFixed(1);
}

function farToCel(far){
    return ((far - 32) * 5/9).toFixed(1);
}

function farToKel(far){
    return ((far - 32) * (5/9) + 273.15).toFixed(1);
}

function kelToCel(kel){
    return (kel - 273.15).toFixed(1);
}

function kelToFar(kel){
    return ((kel - 273.15) * 1.8 + 32).toFixed(1);
}