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

window.addEventListener('keydown', function(udalost) {
    if (udalost.key === "ArrowUp") {  
		posunPanacka(0, -10);
		jePrekryv();
    }
	else if (udalost.key === "ArrowDown") {  
		posunPanacka(0, 10);
		jePrekryv();
    }
	else if (udalost.key === "ArrowLeft") {  
		posunPanacka(-10, 0);
		jePrekryv();
    }
	else if (udalost.key === "ArrowRight") {  
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

function jePrekryv () {
	if (!( panacekLeft + panacekSirka < minceLeft || minceLeft + minceSirka < panacekLeft || panacekTop + panacekVyska < minceTop || minceTop + minceVyska < panacekTop)) {
		posunMinci();
	}
}
posunPanacka (0, 0);
posunMinci ();

