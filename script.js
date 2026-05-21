let hrac = {
    jmeno: "Rytíř",
    zivoty: 100,
    sila: 15,
    zautocNa: function(cil) {
        cil.zivoty -= this.sila;
        console.log(this.jmeno + " útočí! " + cil.jmeno + " má teď " + cil.zivoty + " HP.");
    },
    pouzijlektvar: function() {
        this.zivoty += 20;
        console.log(this.jmeno + " vypil lektvar a má teď " + this.zivoty + " HP.");
    }
};

let skret = {
    jmeno: "Skřet",
    zivoty: 50,
    sila: 20,
    zautocNa: function(cil) {
        cil.zivoty -= this.sila;
        console.log(this.jmeno + " útočí! " + cil.jmeno + " má teď " + cil.zivoty + " HP.");
    }
};
document.addEventListener("keydown", function(event) {
    if (event.key === "h") {
        hrac.pouzijlektvar();
    }
});