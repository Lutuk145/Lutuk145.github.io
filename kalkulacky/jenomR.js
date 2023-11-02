var napeti;
var proud;
var output;
var napetiJednotky;
var proudJednotky;
var R;
window.onload = function() {
    napeti = document.getElementById("napjeti");
    proud = document.getElementById("proud");
    output = document.getElementById("output");
    napetiJednotky = document.getElementById("napjetiJednotky");
    proudJednotky = document.getElementById("proudJednotky");
    prumerJednotky = document.getElementById("prumerJednotky");
    napetiValue = napeti.value*Math.pow(10,napetiJednotky.value);
    proudValue = proud.value*Math.pow(10,proudJednotky.value);

    
    R = napetiValue/proudValue
    
    
    

    napeti.addEventListener('input', function() {
        napetiValue = napeti.value*Math.pow(10,napetiJednotky.value);
        proudValue = proud.value*Math.pow(10,proudJednotky.value);
        R = napetiValue/proudValue
        
        
        output.innerHTML = 'R = <div class="frac"><span>U</span><span class="symbol">/</span><span class="bottom">I</span></div> =  <div class="frac"><span>'+napetiValue+'</span><span class="symbol">/</span><span class="bottom">'+proudValue+'</span></div> = '+R+'Ω '
    });
    proud.addEventListener('input', function() {napetiValue = napeti.value*Math.pow(10,napetiJednotky.value);
        proudValue = proud.value*Math.pow(10,proudJednotky.value);
R = napetiValue/proudValue
        output.innerHTML = 'R = <div class="frac"><span>U</span><span class="symbol">/</span><span class="bottom">I</span></div> =  <div class="frac"><span>'+napetiValue+'</span><span class="symbol">/</span><span class="bottom">'+proudValue+'</span></div> = '+R+'Ω '
    });
    napetiJednotky.addEventListener('input', function() {napetiValue = napeti.value*Math.pow(10,napetiJednotky.value);
        proudValue = proud.value*Math.pow(10,proudJednotky.value);
        
R = napetiValue/proudValue
        output.innerHTML = 'R = <div class="frac"><span>U</span><span class="symbol">/</span><span class="bottom">I</span></div> =  <div class="frac"><span>'+napetiValue+'</span><span class="symbol">/</span><span class="bottom">'+proudValue+'</span></div> = '+R+'Ω '});
    proudJednotky.addEventListener('input', function() {napetiValue = napeti.value*Math.pow(10,napetiJednotky.value);
        proudValue = proud.value*Math.pow(10,proudJednotky.value);
        
        
R = napetiValue/proudValue
        output.innerHTML = 'R = <div class="frac"><span>U</span><span class="symbol">/</span><span class="bottom">I</span></div> =  <div class="frac"><span>'+napetiValue+'</span><span class="symbol">/</span><span class="bottom">'+proudValue+'</span></div> = '+R+'Ω '});

    }