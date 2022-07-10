let result = document.getElementById("result");

function insert(num) {
    let numero = result.innerHTML;
    if (numero == "ERROR!") {
        clean()
        result.innerHTML = num; 
    } else {
        result.innerHTML = numero + num;    
    }  
}

function clean() {
    result.innerHTML = "";
}

function calc() {
    if (result) {
        result.innerHTML = eval(result);
    } else {
        result.innerHTML = "ERROR!";
    }
}

function back() {
    result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length -1);
}
