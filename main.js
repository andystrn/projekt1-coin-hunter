// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/

// sem začni psát svůj program

let panacek = document.getElementById("panacek");
let panacekTop = Math.round (window.innerHeight/2);
let panacekLeft = Math.round (window.innerWidth/2);
let panacekSirka = panacek.width;
let panacekVyska = panacek.height;

let mince = document.getElementById("mince");
let minceSirka = mince.width;
let minceVyska = mince.height;
let minceTop = Math.floor (Math.random() * (innerHeight-minceVyska));
let minceLeft = Math.floor (Math.random() * (innerWidth-minceSirka));
let audioPozadi = document.getElementById("hudba");
let aktualniSkore = 0;
let skore = document.getElementById("score");
let audioMince = document.getElementById("zvukmince");
let audioFanfara = document.getElementById("zvukfanfara");

function posunPanacka (left, top) {
	if ((panacekTop + top) <= (window.innerHeight-panacekVyska) && (panacekTop + top) >= 0){
		panacekTop = panacekTop + top;
		panacek.style.top = panacekTop + "px";
	}

	if ((panacekLeft + left) <= (window.innerWidth-panacekSirka) && (panacekLeft + left) >= 0){
	panacekLeft = panacekLeft + left;
	panacek.style.left = panacekLeft + "px";
	}
}

function zmenObrazek (obrazek) {
	panacek.src = obrazek;
}
window.addEventListener('keydown', function(udalost) {
prehrejHudbuNaPozadi();
    if (udalost.key === "ArrowUp") { 
		zmenObrazek("obrazky/panacek-nahoru.png"); 
		posunPanacka(0, -10);
		jePrekryv();
		
    }
	else if (udalost.key === "ArrowDown") {  
		zmenObrazek("obrazky/panacek.png"); 
		posunPanacka(0, 10);
		jePrekryv();
    }
	else if (udalost.key === "ArrowLeft") {  
		zmenObrazek("obrazky/panacek-vlevo.png"); 
		posunPanacka(-10, 0);
		jePrekryv();
    }
	else if (udalost.key === "ArrowRight") {
		zmenObrazek("obrazky/panacek-vpravo.png");   
		posunPanacka(10, 0);
		jePrekryv();
    }
});

function posunMinci () {
	minceTop = Math.floor (Math.random() * (innerHeight-minceVyska));
	minceLeft = Math.floor (Math.random() * (innerWidth-minceSirka));

	mince.style.top = minceTop + "px";
	mince.style.left = minceLeft + "px";
}

function prehrejHudbuNaPozadi() {
	audioPozadi.play();
}

function prehrejZvukMince() {
	audioMince.play();
}

function prehrejZvukFanfary() {
	audioFanfara.play();
}

function zvysSkore() {
	aktualniSkore++;
	skore.innerHTML = aktualniSkore;

	if (aktualniSkore == 5) {
		prehrejZvukFanfary();
		alert ("Paráda, gratulujeme. Zvládneš nasbírat víc mincí?");
	}
}

function jePrekryv () {
	if (!( panacekLeft + panacekSirka < minceLeft || minceLeft + minceSirka < panacekLeft || panacekTop + panacekVyska < minceTop || minceTop + minceVyska < panacekTop)) {
		posunMinci();
		prehrejZvukMince();
		zvysSkore();
		}
	}

posunPanacka (0, 0);
posunMinci ();

