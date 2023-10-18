var input;
var inputValue;
window.onload = function() {
    input = document.getElementById('cFinal');
    inputValue = input.value;
    c1.innerHTML = "c<sub>1</sub> = "+2*inputValue+" pF";
    input.addEventListener('input', function() {
        c1.innerHTML = "c<sub>1</sub> = "+2*input.value+" pF";
    });
    c2.innerHTML = "c<sub>2</sub> = "+inputValue+" pF";
    input.addEventListener('input', function() {
        c2.innerHTML = "c<sub>2</sub> = "+input.value+" pF";
    });
    c3.innerHTML = "c<sub>3</sub> = "+inputValue+" pF";
    input.addEventListener('input', function() {
        c3.innerHTML = "c<sub>3</sub> = "+input.value+" pF";
    });
}

