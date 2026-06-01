
let penize = 0;
let susenky = 0;
let silaKliknuti = 1;
let btnSusenka = document.getElementById("btn-susenka");
let textSkore = document.getElementById("skore");


btnSusenka.addEventListener("click", function() {
    susenky += silaKliknuti; 
    textSkore.textContent = susenky; 
});

let btnBabicka = document.getElementById("btn-babicka");
let cenaBabicka = 10;

btnBabicka.addEventListener("click", function() {
    
    if (susenky >= cenaBabicka) {
        susenky -= cenaBabicka; 
        silaKliknuti++;         
        
        textSkore.textContent = susenky; 
        
        // Růst ceny
        cenaBabicka += 10; 
        btnBabicka.textContent = `Najmout Babičku (Cena: ${cenaBabicka} sušenek)`;
    } else {
        alert("Nedostatek prostředků!");
    }
});

let btnTovarna = document.getElementById("btn-tovarna");
let cenaTovarna = 50;

btnTovarna.addEventListener("click", function() {
    if (susenky >= cenaTovarna) {
        susenky -= cenaTovarna;
        textSkore.textContent = susenky;
        
        cenaTovarna += 50;
        btnTovarna.textContent = `Koupit Továrnu (Cena: ${cenaTovarna})`;
        
        
        setInterval(function() {
            susenky++; 
            textSkore.textContent = susenky;
        }, 1000); 
    }
});

let btnDul = document.getElementById("btn-dul");
let cenaDul = 200;

btnDul.addEventListener("click", function() {
    if (susenky >= cenaDul) {
        susenky -= cenaDul;
        textSkore.textContent = susenky;
        
        cenaDul += 200;
        btnDul.textContent = `Koupit Důl (Cena: ${cenaDul} sušenek)`;
        
        setInterval(function() {
            susenky++; 
            textSkore.textContent = susenky;
        }, 250); 
    }
});

let btnBanka = document.getElementById("btn-banka");
let cenaBanka = 1000;

btnBanka.addEventListener("click", function() {
    if (susenky >= cenaBanka) {
        susenky -= cenaBanka;
        textSkore.textContent = susenky;
        
        cenaBanka += 1000;
        btnBanka.textContent = `Koupit Banku (Cena: ${cenaBanka} sušenek)`;
        
        setInterval(function() {
            susenky++; 
            textSkore.textContent = susenky;
        }, 50); 
    }
});
