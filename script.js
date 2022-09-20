//Accès au DOM
var aHeure = document.getElementById('a_heure');
var aMinute = document.getElementById('a_minute');
var aSeconde = document.getElementById('a_seconde');
 time();
function time() {
    // Recuiel de l'heure local
    var date = new Date();
    var heure = ((date.getHours() + 11) % 12 + 1);
    var minutes = date.getMinutes();
    var secondes = date.getSeconds();


    //Reccueil des angles correspondants des heures / minutes / secondes
    var h = heure * 30;
    var m = minutes * 6;
    var s = secondes * 6;


    //Calibrage des aguilles 
    aHeure.style.transform = `rotate(${h}deg)`;
    aMinute.style.transform = `rotate(${m}deg)`;
    aSeconde.style.transform = `rotate(${s}deg)`;
}

//Actuallisation de la fonction time
setInterval(time, 1000);