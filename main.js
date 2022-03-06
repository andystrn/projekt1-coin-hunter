// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let panacekTop = 80;
let panacekLeft = 80;
let panacek = document.getElementById("panacek");

function posunPanacka (left, top) {

	if ((panacekTop + top) <= window.innerHeight && (panacekTop + top) >= 0){
		panacekTop = panacekTop + top;
		panacek.style.top = panacekTop + "px";
	}

	if ((panacekLeft + left) <= window.innerWidth && (panacekLeft + left) >= 0){
	panacekLeft = panacekLeft + left;
	panacek.style.left = panacekLeft + "px";
	}
}

posunPanacka (panacekLeft, panacekTop);

window.addEventListener('keydown', function(udalost) {
    if (udalost.key === "ArrowUp") {  
		posunPanacka(0, -10);
    }
	else if (udalost.key === "ArrowDown") {  
		posunPanacka(0, 10);
    }
	else if (udalost.key === "ArrowLeft") {  
		posunPanacka(-10, 0);
    }
	else if (udalost.key === "ArrowRight") {  
		posunPanacka(10, 0);
    }
});

