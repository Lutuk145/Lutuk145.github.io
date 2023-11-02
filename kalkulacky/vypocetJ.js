var napeti;
var delka;
var prumer;
var hustota;
var output;
var napetiJednotky;
var delkaJednotky;
var prumerJednotky;
var R;
var S;
var I;
window.onload = function() {
    napeti = document.getElementById("napjeti");
    delka = document.getElementById("delka");
    prumer = document.getElementById("prumer");
    hustota = document.getElementById("hustota");
    output = document.getElementById("output");
    napetiJednotky = document.getElementById("napjetiJednotky");
    delkaJednotky = document.getElementById("delkaJednotky");
    prumerJednotky = document.getElementById("prumerJednotky");
    proudJednotky = document.getElementById("proudJednotky");
    napetiValue = napeti.value*Math.pow(10,napetiJednotky.value);
    delkaValue = delka.value*Math.pow(10,delkaJednotky.value);
    prumerValue =prumer.value*Math.pow(10,prumerJednotky.value);
    hustotaValue = hustota.value;
    S = ((3.14*Math.pow(prumerValue,2))/4);
    R = (hustotaValue*delkaValue/S);
    I= napetiValue/R;
    
    

    napeti.addEventListener('input', function() {
        napetiValue = napeti.value*Math.pow(10,napetiJednotky.value);
        delkaValue = delka.value*Math.pow(10,delkaJednotky.value);
        prumerValue =prumer.value*Math.pow(10,prumerJednotky.value);
        hustotaValue = hustota.value;
        S = ((3.14*Math.pow(prumerValue,2))/4);
    R = (hustotaValue*delkaValue/S);
    I= napetiValue/R;
        output.innerHTML = 'S = <div class="frac"><span>π*d<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = <div class="frac"><span>3.14*'+prumerValue+'<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = '+S+'mm<sup>2</sup><br><br>R = ϱ <div class="frac"><span>l</span><span class="symbol">/</span><span class="bottom">S</span></div> = '+hustotaValue+' <div class="frac"><span>'+delkaValue+'</span><span class="symbol">/</span><span class="bottom">'+S+'</span></div> = '+R+'Ω <br><br>I = <div class="frac"><span>U</span><span class="symbol">/</span><span class="bottom">R</span></div> = <div class="frac"><span>'+napetiValue+'</span><span class="symbol">/</span><span class="bottom">'+R+'</span></div> = '+I+'A<br><br> J = <div class="frac"><span>I</span><span class="symbol">/</span><span class="bottom">S</span></div> = <div class="frac"><span>'+I+'</span><span class="symbol">/</span><span class="bottom">'+S+'</span></div> = '+I/S+'<div class="frac"><span>A</span><span class="symbol">/</span><span class="bottom">mm<sup>2</sup></span></div>'
    });
    delka.addEventListener('input', function() {napetiValue = napeti.value*Math.pow(10,napetiJednotky.value);
        delkaValue = delka.value*Math.pow(10,delkaJednotky.value);
        prumerValue =prumer.value*Math.pow(10,prumerJednotky.value);
        hustotaValue = hustota.value;
        S = ((3.14*Math.pow(prumerValue,2))/4);
S = ((3.14*Math.pow(prumerValue,2))/4);
R = (hustotaValue*delkaValue/S);
    I= napetiValue/R;
        output.innerHTML = 'S = <div class="frac"><span>π*d<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = <div class="frac"><span>3.14*'+prumerValue+'<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = '+S+'mm<sup>2</sup><br><br>R = ϱ <div class="frac"><span>l</span><span class="symbol">/</span><span class="bottom">S</span></div> = '+hustotaValue+' <div class="frac"><span>'+delkaValue+'</span><span class="symbol">/</span><span class="bottom">'+S+'</span></div> = '+R+'Ω <br><br>I = <div class="frac"><span>U</span><span class="symbol">/</span><span class="bottom">R</span></div> = <div class="frac"><span>'+napetiValue+'</span><span class="symbol">/</span><span class="bottom">'+R+'</span></div> = '+I+'A<br><br> J = <div class="frac"><span>I</span><span class="symbol">/</span><span class="bottom">S</span></div> = <div class="frac"><span>'+I+'</span><span class="symbol">/</span><span class="bottom">'+S+'</span></div> = '+I/S+'<div class="frac"><span>A</span><span class="symbol">/</span><span class="bottom">mm<sup>2</sup></span></div>'
    });
    prumer.addEventListener('input', function() {napetiValue = napeti.value*Math.pow(10,napetiJednotky.value);
        delkaValue = delka.value*Math.pow(10,delkaJednotky.value);
        prumerValue =prumer.value*Math.pow(10,prumerJednotky.value);
        hustotaValue = hustota.value;
        S = ((3.14*Math.pow(prumerValue,2))/4);
S = ((3.14*Math.pow(prumerValue,2))/4);
R = (hustotaValue*delkaValue/S);
    I= napetiValue/R;
        output.innerHTML = 'S = <div class="frac"><span>π*d<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = <div class="frac"><span>3.14*'+prumerValue+'<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = '+S+'mm<sup>2</sup><br><br>R = ϱ <div class="frac"><span>l</span><span class="symbol">/</span><span class="bottom">S</span></div> = '+hustotaValue+' <div class="frac"><span>'+delkaValue+'</span><span class="symbol">/</span><span class="bottom">'+S+'</span></div> = '+R+'Ω <br><br>I = <div class="frac"><span>U</span><span class="symbol">/</span><span class="bottom">R</span></div> = <div class="frac"><span>'+napetiValue+'</span><span class="symbol">/</span><span class="bottom">'+R+'</span></div> = '+I+'A<br><br> J = <div class="frac"><span>I</span><span class="symbol">/</span><span class="bottom">S</span></div> = <div class="frac"><span>'+I+'</span><span class="symbol">/</span><span class="bottom">'+S+'</span></div> = '+I/S+'<div class="frac"><span>A</span><span class="symbol">/</span><span class="bottom">mm<sup>2</sup></span></div>'});
   hustota.addEventListener('input', function() {napetiValue = napeti.value*Math.pow(10,napetiJednotky.value);
        delkaValue = delka.value*Math.pow(10,delkaJednotky.value);
        prumerValue =prumer.value*Math.pow(10,prumerJednotky.value);
        hustotaValue = hustota.value;
        S = ((3.14*Math.pow(prumerValue,2))/4);
S = ((3.14*Math.pow(prumerValue,2))/4);
R = (hustotaValue*delkaValue/S);
    I= napetiValue/R;
        output.innerHTML = 'S = <div class="frac"><span>π*d<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = <div class="frac"><span>3.14*'+prumerValue+'<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = '+S+'mm<sup>2</sup><br><br>R = ϱ <div class="frac"><span>l</span><span class="symbol">/</span><span class="bottom">S</span></div> = '+hustotaValue+' <div class="frac"><span>'+delkaValue+'</span><span class="symbol">/</span><span class="bottom">'+S+'</span></div> = '+R+'Ω <br><br>I = <div class="frac"><span>U</span><span class="symbol">/</span><span class="bottom">R</span></div> = <div class="frac"><span>'+napetiValue+'</span><span class="symbol">/</span><span class="bottom">'+R+'</span></div> = '+I+'A<br><br> J = <div class="frac"><span>I</span><span class="symbol">/</span><span class="bottom">S</span></div> = <div class="frac"><span>'+I+'</span><span class="symbol">/</span><span class="bottom">'+S+'</span></div> = '+I/S+'<div class="frac"><span>A</span><span class="symbol">/</span><span class="bottom">mm<sup>2</sup></span></div>'});
    napetiJednotky.addEventListener('input', function() {napetiValue = napeti.value*Math.pow(10,napetiJednotky.value);
        delkaValue = delka.value*Math.pow(10,delkaJednotky.value);
        prumerValue =prumer.value*Math.pow(10,prumerJednotky.value);
        hustotaValue = hustota.value;
        S = ((3.14*Math.pow(prumerValue,2))/4);
S = ((3.14*Math.pow(prumerValue,2))/4);
R = (hustotaValue*delkaValue/S);
    I= napetiValue/R;
        output.innerHTML = 'S = <div class="frac"><span>π*d<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = <div class="frac"><span>3.14*'+prumerValue+'<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = '+S+'mm<sup>2</sup><br><br>R = ϱ <div class="frac"><span>l</span><span class="symbol">/</span><span class="bottom">S</span></div> = '+hustotaValue+' <div class="frac"><span>'+delkaValue+'</span><span class="symbol">/</span><span class="bottom">'+S+'</span></div> = '+R+'Ω <br><br>I = <div class="frac"><span>U</span><span class="symbol">/</span><span class="bottom">R</span></div> = <div class="frac"><span>'+napetiValue+'</span><span class="symbol">/</span><span class="bottom">'+R+'</span></div> = '+I+'A<br><br> J = <div class="frac"><span>I</span><span class="symbol">/</span><span class="bottom">S</span></div> = <div class="frac"><span>'+I+'</span><span class="symbol">/</span><span class="bottom">'+S+'</span></div> = '+I/S+'<div class="frac"><span>A</span><span class="symbol">/</span><span class="bottom">mm<sup>2</sup></span></div>'});
    delkaJednotky.addEventListener('input', function() {napetiValue = napeti.value*Math.pow(10,napetiJednotky.value);
        delkaValue = delka.value*Math.pow(10,delkaJednotky.value);
        prumerValue =prumer.value*Math.pow(10,prumerJednotky.value);
        hustotaValue = hustota.value;
        S = ((3.14*Math.pow(prumerValue,2))/4);
S = ((3.14*Math.pow(prumerValue,2))/4);
R = (hustotaValue*delkaValue/S);
    I= napetiValue/R;
        output.innerHTML = 'S = <div class="frac"><span>π*d<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = <div class="frac"><span>3.14*'+prumerValue+'<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = '+S+'mm<sup>2</sup><br><br>R = ϱ <div class="frac"><span>l</span><span class="symbol">/</span><span class="bottom">S</span></div> = '+hustotaValue+' <div class="frac"><span>'+delkaValue+'</span><span class="symbol">/</span><span class="bottom">'+S+'</span></div> = '+R+'Ω <br><br>I = <div class="frac"><span>U</span><span class="symbol">/</span><span class="bottom">R</span></div> = <div class="frac"><span>'+napetiValue+'</span><span class="symbol">/</span><span class="bottom">'+R+'</span></div> = '+I+'A<br><br> J = <div class="frac"><span>I</span><span class="symbol">/</span><span class="bottom">S</span></div> = <div class="frac"><span>'+I+'</span><span class="symbol">/</span><span class="bottom">'+S+'</span></div> = '+I/S+'<div class="frac"><span>A</span><span class="symbol">/</span><span class="bottom">mm<sup>2</sup></span></div>'});
    prumerJednotky.addEventListener('input', function() {napetiValue = napeti.value*Math.pow(10,napetiJednotky.value);
        delkaValue = delka.value*Math.pow(10,delkaJednotky.value);
        prumerValue =prumer.value*Math.pow(10,prumerJednotky.value);
        hustotaValue = hustota.value;
        S = ((3.14*Math.pow(prumerValue,2))/4);
S = ((3.14*Math.pow(prumerValue,2))/4);
R = (hustotaValue*delkaValue/S);
    I= napetiValue/R;
        output.innerHTML = 'S = <div class="frac"><span>π*d<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = <div class="frac"><span>3.14*'+prumerValue+'<sup>2</sup></span><span class="symbol">/</span><span class="bottom">4</span></div> = '+S+'mm<sup>2</sup><br><br>R = ϱ <div class="frac"><span>l</span><span class="symbol">/</span><span class="bottom">S</span></div> = '+hustotaValue+' <div class="frac"><span>'+delkaValue+'</span><span class="symbol">/</span><span class="bottom">'+S+'</span></div> = '+R+'Ω <br><br>I = <div class="frac"><span>U</span><span class="symbol">/</span><span class="bottom">R</span></div> = <div class="frac"><span>'+napetiValue+'</span><span class="symbol">/</span><span class="bottom">'+R+'</span></div> = '+I+'A<br><br> J = <div class="frac"><span>I</span><span class="symbol">/</span><span class="bottom">S</span></div> = <div class="frac"><span>'+I+'</span><span class="symbol">/</span><span class="bottom">'+S+'</span></div> = '+I/S+'<div class="frac"><span>A</span><span class="symbol">/</span><span class="bottom">mm<sup>2</sup></span></div>'});

    }