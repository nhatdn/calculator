let showData = document.querySelector(".show-calculate");
let showResult = document.querySelector(".show-result");
document.querySelectorAll(".items").forEach(item => {
    item.addEventListener('click',(e) =>{
        if(e.target.classList.contains("arrow") && showData.innerHTML.length != 0) {
            showData.innerHTML = showData.innerHTML.substr(0, showData.innerHTML.length - 1);
        } else if(e.target.innerHTML == "C") {
            showData.innerHTML = "";
            showResult.innerHTML = "0";
        } else if(e.target.innerHTML == "=") {
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
        } else
        showData.innerHTML += e.target.innerHTML;
    });
});