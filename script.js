let showData = document.querySelector(".show-calculate");
let showResult = document.querySelector(".show-result");
let valuesPermit = "0.123456789/*-+()";
function BackSpace() {
    if(showData.innerHTML.length != 0) showData.innerHTML = showData.innerHTML.substr(0, showData.innerHTML.length - 1);
}
function ShowResult() {
    let calculate = showData.innerHTML;
    calculate = calculate.replace("x","*").trim();
    try {
        if(calculate[0] == "0") {
            calculate = calculate.substr(1, calculate.length);
        }
        let result = eval(calculate).toString();
        result = result.toString();
        if(result == "Infinity" || result == "NaN" || result == "undefined") {
            showResult.innerHTML = "Error";
        } else
        showResult.innerHTML = result;
    } catch {
        showResult.innerHTML = "Error";
    }
}
function Reset() {
    showData.innerHTML = "";
    showResult.innerHTML = "0";
}
document.querySelectorAll(".items").forEach(item => {
    item.addEventListener('click',(e) =>{
        if(e.target.classList.contains("arrow")) {
            BackSpace();
        } else if(e.target.innerHTML == "C") {
            Reset();
        } else if(e.target.innerHTML == "=") {
            ShowResult()
        } else
        showData.innerHTML += e.target.innerHTML;
    });
});
document.body.addEventListener("keydown", (e)=> {
    if(valuesPermit.includes(e.key))
        showData.innerHTML += e.key;
    else if(e.key == "Enter") {
        ShowResult();
    } else if(e.key == "Backspace"){
        BackSpace();
    } else if (e.key == "Escape"){
        Reset();
    }
})