let showData = document.querySelector(".show-calculate");
let showResult = document.querySelector(".show-result");
document.querySelectorAll(".items").forEach(item => {
    item.addEventListener('click',(e) =>{
        if(e.target.innerHTML == "C") {
            showData.innerHTML = "";
            showResult.innerHTML = "0";
        } else if(e.target.innerHTML == "=") {
            let calculate = showData.innerHTML;
            calculate = calculate.replace("x","*").trim();
            try {
                let result = eval(calculate);
                showResult.innerHTML = result;
            } catch {
                showResult.innerHTML = "Error";
            }
        } else
        showData.innerHTML += e.target.innerHTML;
    });
});