
let penize = 0;
let susenky = 0;
let silaKliknuti = 1;
let btnSusenka = document.getElementById("btn-susenka");
let textSkore = document.getElementById("skore");


btnSusenka.addEventListener("click", function() {
    susenky += silaKliknuti; // Úprava logiky (stavu)
    textSkore.textContent = susenky; // Aktualizace UI
});

let btnBabicka = document.getElementById("btn-babicka");
let cenaBabicka = 10;

btnBabicka.addEventListener("click", function() {
    // Validační podmínka
    if (susenky >= cenaBabicka) {
        susenky -= cenaBabicka; // Platba
        silaKliknuti++;         // Aplikace vylepšení (silnější klik)
        
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
        
        // Spuštění intervalu pro zakoupenou jednotku
        setInterval(function() {
            susenky++; 
            textSkore.textContent = susenky;
        }, 1000); // Exekuce (přidání sušenky) každých 1000 ms
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
