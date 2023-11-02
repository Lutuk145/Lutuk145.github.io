var napeti;
var delka;
var prumer;
var eleProud;
var output;
var napetiJednotky;
var delkaJednotky;
var prumerJednotky;
var proudJednotky;
var R;
var S;
window.onload = function() {
    napeti = document.getElementById("napjeti");
    delka = document.getElementById("delka");
    prumer = document.getElementById("prumer");
    eleProud = document.getElementById("proud");
    output = document.getElementById("output");
    napetiJednotky = document.getElementById("napjetiJednotky");
    delkaJednotky = document.getElementById("delkaJednotky");
    prumerJednotky = document.getElementById("prumerJednotky");
    proudJednotky = document.getElementById("proudJednotky");
    napetiValue = napeti.value*Math.pow(10,napetiJednotky.value);
    delkaValue = delka.value*Math.pow(10,delkaJednotky.value);
    prumerValue =prumer.value*Math.pow(10,prumerJednotky.value);
    proudValue = eleProud.value*Math.pow(10,proudJednotky.value);
    R = (napetiValue/proudValue);
    S = ((3.14*Math.pow(prumerValue,2))/4);
    output.innerHTML = ' R = <div class="frac"><span>U</span><span class="symbol">/</span><span class="bottom">I</span></div> = <div class="frac"><span>'+napetiValue+'</span><span class="symbol">/</span><span class="bottom">'+proudValue+'</span></div> = '+R+'Ω <br><br>S = <div class="frac"><span>π*d<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = <div class="frac"><span>3.14*'+prumerValue+'<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = '+S+'mm<sup>2</sup><br><br>ϱ = <div class="frac"><span>R*S</span><span class="symbol">/</span><span class="bottom">l</span></div> = <div class="frac"><span>'+R+'*'+S+'</span><span class="symbol">/</span><span class="bottom">'+delkaValue+'</span></div> = '+(R*S)/delkaValue+'Ω <div class="frac"><span>mm<sup>2</sup></span><span class="symbol">/</span><span class="bottom">m</span></div> '

    napeti.addEventListener('input', function() {
        napetiValue = napeti.value*Math.pow(10,napetiJednotky.value);
        delkaValue = delka.value*Math.pow(10,delkaJednotky.value);
        prumerValue =prumer.value*Math.pow(10,prumerJednotky.value);
        proudValue = eleProud.value*Math.pow(10,proudJednotky.value);
        R = (napetiValue/proudValue);
        S = ((3.14*Math.pow(prumerValue,2))/4);
        output.innerHTML = ' R = <div class="frac"><span>U</span><span class="symbol">/</span><span class="bottom">I</span></div> = <div class="frac"><span>'+napetiValue+'</span><span class="symbol">/</span><span class="bottom">'+proudValue+'</span></div> = '+R+'Ω <br><br>S = <div class="frac"><span>π*d<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = <div class="frac"><span>3.14*'+prumerValue+'<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = '+S+'mm<sup>2</sup><br><br>ϱ = <div class="frac"><span>R*S</span><span class="symbol">/</span><span class="bottom">l</span></div> = <div class="frac"><span>'+R+'*'+S+'</span><span class="symbol">/</span><span class="bottom">'+delkaValue+'</span></div> = '+(R*S)/delkaValue+'Ω <div class="frac"><span>mm<sup>2</sup></span><span class="symbol">/</span><span class="bottom">m</span></div> '
    });
    delka.addEventListener('input', function() {napetiValue = napeti.value*Math.pow(10,napetiJednotky.value);
        delkaValue = delka.value*Math.pow(10,delkaJednotky.value);
        prumerValue =prumer.value*Math.pow(10,prumerJednotky.value);
        proudValue = eleProud.value*Math.pow(10,proudJednotky.value);
        R = (napetiValue/proudValue);
        S = ((3.14*Math.pow(prumerValue,2))/4);
        output.innerHTML = ' R = <div class="frac"><span>U</span><span class="symbol">/</span><span class="bottom">I</span></div> = <div class="frac"><span>'+napetiValue+'</span><span class="symbol">/</span><span class="bottom">'+proudValue+'</span></div> = '+R+'Ω <br><br>S = <div class="frac"><span>π*d<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = <div class="frac"><span>3.14*'+prumerValue+'<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = '+S+'mm<sup>2</sup><br><br>ϱ = <div class="frac"><span>R*S</span><span class="symbol">/</span><span class="bottom">l</span></div> = <div class="frac"><span>'+R+'*'+S+'</span><span class="symbol">/</span><span class="bottom">'+delkaValue+'</span></div> = '+(R*S)/delkaValue+'Ω <div class="frac"><span>mm<sup>2</sup></span><span class="symbol">/</span><span class="bottom">m</span></div> '
    });
    prumer.addEventListener('input', function() {napetiValue = napeti.value*Math.pow(10,napetiJednotky.value);
        delkaValue = delka.value*Math.pow(10,delkaJednotky.value);
        prumerValue =prumer.value*Math.pow(10,prumerJednotky.value);
        proudValue = eleProud.value*Math.pow(10,proudJednotky.value);
        R = (napetiValue/proudValue);
        S = ((3.14*Math.pow(prumerValue,2))/4);
        output.innerHTML = ' R = <div class="frac"><span>U</span><span class="symbol">/</span><span class="bottom">I</span></div> = <div class="frac"><span>'+napetiValue+'</span><span class="symbol">/</span><span class="bottom">'+proudValue+'</span></div> = '+R+'Ω <br><br>S = <div class="frac"><span>π*d<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = <div class="frac"><span>3.14*'+prumerValue+'<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = '+S+'mm<sup>2</sup><br><br>ϱ = <div class="frac"><span>R*S</span><span class="symbol">/</span><span class="bottom">l</span></div> = <div class="frac"><span>'+R+'*'+S+'</span><span class="symbol">/</span><span class="bottom">'+delkaValue+'</span></div> = '+(R*S)/delkaValue+'Ω <div class="frac"><span>mm<sup>2</sup></span><span class="symbol">/</span><span class="bottom">m</span></div> '});
    eleProud.addEventListener('input', function() {napetiValue = napeti.value*Math.pow(10,napetiJednotky.value);
        delkaValue = delka.value*Math.pow(10,delkaJednotky.value);
        prumerValue =prumer.value*Math.pow(10,prumerJednotky.value);
        proudValue = eleProud.value*Math.pow(10,proudJednotky.value);
        R = (napetiValue/proudValue);
        S = ((3.14*Math.pow(prumerValue,2))/4);
        output.innerHTML = ' R = <div class="frac"><span>U</span><span class="symbol">/</span><span class="bottom">I</span></div> = <div class="frac"><span>'+napetiValue+'</span><span class="symbol">/</span><span class="bottom">'+proudValue+'</span></div> = '+R+'Ω <br><br>S = <div class="frac"><span>π*d<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = <div class="frac"><span>3.14*'+prumerValue+'<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = '+S+'mm<sup>2</sup><br><br>ϱ = <div class="frac"><span>R*S</span><span class="symbol">/</span><span class="bottom">l</span></div> = <div class="frac"><span>'+R+'*'+S+'</span><span class="symbol">/</span><span class="bottom">'+delkaValue+'</span></div> = '+(R*S)/delkaValue+'Ω <div class="frac"><span>mm<sup>2</sup></span><span class="symbol">/</span><span class="bottom">m</span></div> '});
    napetiJednotky.addEventListener('input', function() {napetiValue = napeti.value*Math.pow(10,napetiJednotky.value);
        delkaValue = delka.value*Math.pow(10,delkaJednotky.value);
        prumerValue =prumer.value*Math.pow(10,prumerJednotky.value);
        proudValue = eleProud.value*Math.pow(10,proudJednotky.value);
        R = (napetiValue/proudValue);
        S = ((3.14*Math.pow(prumerValue,2))/4);
        output.innerHTML = ' R = <div class="frac"><span>U</span><span class="symbol">/</span><span class="bottom">I</span></div> = <div class="frac"><span>'+napetiValue+'</span><span class="symbol">/</span><span class="bottom">'+proudValue+'</span></div> = '+R+'Ω <br><br>S = <div class="frac"><span>π*d<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = <div class="frac"><span>3.14*'+prumerValue+'<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = '+S+'mm<sup>2</sup><br><br>ϱ = <div class="frac"><span>R*S</span><span class="symbol">/</span><span class="bottom">l</span></div> = <div class="frac"><span>'+R+'*'+S+'</span><span class="symbol">/</span><span class="bottom">'+delkaValue+'</span></div> = '+(R*S)/delkaValue+'Ω <div class="frac"><span>mm<sup>2</sup></span><span class="symbol">/</span><span class="bottom">m</span></div> '});
    delkaJednotky.addEventListener('input', function() {napetiValue = napeti.value*Math.pow(10,napetiJednotky.value);
        delkaValue = delka.value*Math.pow(10,delkaJednotky.value);
        prumerValue =prumer.value*Math.pow(10,prumerJednotky.value);
        proudValue = eleProud.value*Math.pow(10,proudJednotky.value);
        R = (napetiValue/proudValue);
        S = ((3.14*Math.pow(prumerValue,2))/4);
        output.innerHTML = ' R = <div class="frac"><span>U</span><span class="symbol">/</span><span class="bottom">I</span></div> = <div class="frac"><span>'+napetiValue+'</span><span class="symbol">/</span><span class="bottom">'+proudValue+'</span></div> = '+R+'Ω <br><br>S = <div class="frac"><span>π*d<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = <div class="frac"><span>3.14*'+prumerValue+'<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = '+S+'mm<sup>2</sup><br><br>ϱ = <div class="frac"><span>R*S</span><span class="symbol">/</span><span class="bottom">l</span></div> = <div class="frac"><span>'+R+'*'+S+'</span><span class="symbol">/</span><span class="bottom">'+delkaValue+'</span></div> = '+(R*S)/delkaValue+'Ω <div class="frac"><span>mm<sup>2</sup></span><span class="symbol">/</span><span class="bottom">m</span></div> '});
    prumerJednotky.addEventListener('input', function() {napetiValue = napeti.value*Math.pow(10,napetiJednotky.value);
        delkaValue = delka.value*Math.pow(10,delkaJednotky.value);
        prumerValue =prumer.value*Math.pow(10,prumerJednotky.value);
        proudValue = eleProud.value*Math.pow(10,proudJednotky.value);
        R = (napetiValue/proudValue);
        S = ((3.14*Math.pow(prumerValue,2))/4);
        output.innerHTML = ' R = <div class="frac"><span>U</span><span class="symbol">/</span><span class="bottom">I</span></div> = <div class="frac"><span>'+napetiValue+'</span><span class="symbol">/</span><span class="bottom">'+proudValue+'</span></div> = '+R+'Ω <br><br>S = <div class="frac"><span>π*d<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = <div class="frac"><span>3.14*'+prumerValue+'<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = '+S+'mm<sup>2</sup><br><br>ϱ = <div class="frac"><span>R*S</span><span class="symbol">/</span><span class="bottom">l</span></div> = <div class="frac"><span>'+R+'*'+S+'</span><span class="symbol">/</span><span class="bottom">'+delkaValue+'</span></div> = '+(R*S)/delkaValue+'Ω <div class="frac"><span>mm<sup>2</sup></span><span class="symbol">/</span><span class="bottom">m</span></div> '});
    proudJednotky.addEventListener('input', function() {napetiValue = napeti.value*Math.pow(10,napetiJednotky.value);
        delkaValue = delka.value*Math.pow(10,delkaJednotky.value);
        prumerValue =prumer.value*Math.pow(10,prumerJednotky.value);
        proudValue = eleProud.value*Math.pow(10,proudJednotky.value);
        R = (napetiValue/proudValue);
        S = ((3.14*Math.pow(prumerValue,2))/4);
        output.innerHTML = ' R = <div class="frac"><span>U</span><span class="symbol">/</span><span class="bottom">I</span></div> = <div class="frac"><span>'+napetiValue+'</span><span class="symbol">/</span><span class="bottom">'+proudValue+'</span></div> = '+R+'Ω <br><br>S = <div class="frac"><span>π*d<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = <div class="frac"><span>3.14*'+prumerValue+'<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = '+S+'mm<sup>2</sup><br><br>ϱ = <div class="frac"><span>R*S</span><span class="symbol">/</span><span class="bottom">l</span></div> = <div class="frac"><span>'+R+'*'+S+'</span><span class="symbol">/</span><span class="bottom">'+delkaValue+'</span></div> = '+(R*S)/delkaValue+'Ω <div class="frac"><span>mm<sup>2</sup></span><span class="symbol">/</span><span class="bottom">m</span></div> '});


    }
    
