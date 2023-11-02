var vodivost;
var J;
var prumer;
var output;
var vodivostJednotky;
var prumerJednotky;
var S;
var U;
var I;
window.onload = function() {
    vodivost = document.getElementById("vodivost");
    J = document.getElementById("J");
    prumer = document.getElementById("prumer");
    output = document.getElementById("output");
    vodivostJednotky = document.getElementById("vodivostJednotky");
    prumerJednotky = document.getElementById("prumerJednotky");
    JValue = J.value;
    prumerValue = prumer.value*Math.pow(10,prumerJednotky.value);
    voidivostValue = vodivost.value*Math.pow(10,vodivostJednotky.value);
    S = (3.14*Math.pow(prumerValue,2))/4;
    I = JValue*S;
    U = I/voidivostValue;
    vodivost.addEventListener('input', function() {
        JValue = J.value;
    prumerValue = prumer.value*Math.pow(10,prumerJednotky.value);
    voidivostValue = vodivost.value*Math.pow(10,vodivostJednotky.value);
    S = (3.14*Math.pow(prumerValue,2))/4;
    I = JValue*S;
    U = I/voidivostValue;
    output.innerHTML = 'S = <div class="frac"><span>π*d<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = <div class="frac"><span>3.14*'+prumerValue+'<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = '+S+'mm<sup>2</sup><br><br>I = J*S = '+JValue+'*'+S+' = ' +I+'A <br><br> U = <div class="frac"><span>I</span><span class="symbol">/</span><span class="bottom">G</span></div> = <div class="frac"><span>'+I+'</span><span class="symbol">/</span><span class="bottom">'+voidivostValue+'</span></div> = '+U+'V'
    });
    prumer.addEventListener('input', function() {JValue = J.value;
        prumerValue = prumer.value*Math.pow(10,prumerJednotky.value);
        voidivostValue = vodivost.value*Math.pow(10,vodivostJednotky.value);
        S = (3.14*Math.pow(prumerValue,2))/4;
        I = JValue*S;
        U = I/voidivostValue;
        output.innerHTML = 'S = <div class="frac"><span>π*d<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = <div class="frac"><span>3.14*'+prumerValue+'<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = '+S+'mm<sup>2</sup><br><br>I = J*S = '+JValue+'*'+S+' = ' +I+'A <br><br> U = <div class="frac"><span>I</span><span class="symbol">/</span><span class="bottom">G</span></div> = <div class="frac"><span>'+I+'</span><span class="symbol">/</span><span class="bottom">'+voidivostValue+'</span></div> = '+U+'V'});
    J.addEventListener('input', function() {JValue = J.value;
        prumerValue = prumer.value*Math.pow(10,prumerJednotky.value);
        voidivostValue = vodivost.value*Math.pow(10,vodivostJednotky.value);
        S = (3.14*Math.pow(prumerValue,2))/4;
        I = JValue*S;
        U = I/voidivostValue;
        output.innerHTML = 'S = <div class="frac"><span>π*d<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = <div class="frac"><span>3.14*'+prumerValue+'<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = '+S+'mm<sup>2</sup><br><br>I = J*S = '+JValue+'*'+S+' = ' +I+'A <br><br> U = <div class="frac"><span>I</span><span class="symbol">/</span><span class="bottom">G</span></div> = <div class="frac"><span>'+I+'</span><span class="symbol">/</span><span class="bottom">'+voidivostValue+'</span></div> = '+U+'V'});
    vodivostJednotky.addEventListener('input', function() {JValue = J.value;
        prumerValue = prumer.value*Math.pow(10,prumerJednotky.value);
        voidivostValue = vodivost.value*Math.pow(10,vodivostJednotky.value);
        S = (3.14*Math.pow(prumerValue,2))/4;
        I = JValue*S;
        U = I/voidivostValue;
        output.innerHTML = 'S = <div class="frac"><span>π*d<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = <div class="frac"><span>3.14*'+prumerValue+'<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = '+S+'mm<sup>2</sup><br><br>I = J*S = '+JValue+'*'+S+' = ' +I+'A <br><br> U = <div class="frac"><span>I</span><span class="symbol">/</span><span class="bottom">G</span></div> = <div class="frac"><span>'+I+'</span><span class="symbol">/</span><span class="bottom">'+voidivostValue+'</span></div> = '+U+'V'});
    prumerJednotky.addEventListener('input', function() {JValue = J.value;
        prumerValue = prumer.value*Math.pow(10,prumerJednotky.value);
        voidivostValue = vodivost.value*Math.pow(10,vodivostJednotky.value);
        S = (3.14*Math.pow(prumerValue,2))/4;
        I = JValue*S;
        U = I/voidivostValue;
        output.innerHTML = 'S = <div class="frac"><span>π*d<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = <div class="frac"><span>3.14*'+prumerValue+'<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = '+S+'mm<sup>2</sup><br><br>I = J*S = '+JValue+'*'+S+' = ' +I+'A <br><br> U = <div class="frac"><span>I</span><span class="symbol">/</span><span class="bottom">G</span></div> = <div class="frac"><span>'+I+'</span><span class="symbol">/</span><span class="bottom">'+voidivostValue+'</span></div> = '+U+'V'});
    }
