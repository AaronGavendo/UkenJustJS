var selectedship = "yellow";
var selected = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var sky = new Image();
sky.src = "ships/sky.png";

function check(ship) {
	selectedship = ship;
}

function changeImage(pickedElement) {

	var clickCount = selected[0] + selected[1] + selected[2] + selected[3] + selected[4] + selected[5] + selected[6] + selected[7] + selected[8];
	console.log(clickCount);
	if(clickCount > 4)
	{
		console.log("Inside Greater than 4");

		if((pickedElement === 1) && (selected[0] === 1)){
		    document.getElementById("placeShip1").src = "ships/" +selectedship + "ship.png";
		}
		else if((pickedElement === 2) && (selected[1] === 1)){
		    document.getElementById("placeShip2").src = "ships/" +selectedship + "ship.png";
		}
		else if((pickedElement === 3) && (selected[2] === 1)){
		    document.getElementById("placeShip3").src = "ships/" +selectedship + "ship.png";
		}
		else if((pickedElement === 4) && (selected[3] === 1)){
		    document.getElementById("placeShip4").src = "ships/" +selectedship + "ship.png";
		}
		else if((pickedElement === 5) && (selected[4] === 1)){
		    document.getElementById("placeShip5").src = "ships/" +selectedship + "ship.png";
		}
		else if((pickedElement === 6) && (selected[5] === 1)){
		    document.getElementById("placeShip6").src = "ships/" +selectedship + "ship.png";
		}
		else if((pickedElement === 7) && (selected[6] === 1)){
		    document.getElementById("placeShip7").src = "ships/" +selectedship + "ship.png";		    
		}
		else if((pickedElement === 8) && (selected[7] === 1)){
		    document.getElementById("placeShip8").src = "ships/" +selectedship + "ship.png";
		    selected[7] = 1;		    
		}
		else if((pickedElement === 9) && (selected[8] === 1)){
		    document.getElementById("placeShip9").src = "ships/" +selectedship + "ship.png";	    
		}

	}
	else{
		if(pickedElement === 1){
		    document.getElementById("placeShip1").src = "ships/" +selectedship + "ship.png";
		    selected[0] = 1;
		}
		else if(pickedElement === 2){
		    document.getElementById("placeShip2").src = "ships/" +selectedship + "ship.png";
		    selected[1] = 1;
		}
		else if(pickedElement === 3){
		    document.getElementById("placeShip3").src = "ships/" +selectedship + "ship.png";
		    selected[2] = 1;
		}
		else if(pickedElement === 4){
		    document.getElementById("placeShip4").src = "ships/" +selectedship + "ship.png";
		    selected[3] = 1;
		}
		else if(pickedElement === 5){
		    document.getElementById("placeShip5").src = "ships/" +selectedship + "ship.png";
		    selected[4] = 1;
		}
		else if(pickedElement === 6){
		    document.getElementById("placeShip6").src = "ships/" +selectedship + "ship.png";
		    selected[5] = 1;
		}
		else if(pickedElement === 7){
		    document.getElementById("placeShip7").src = "ships/" +selectedship + "ship.png";
		    selected[6] = 1;		    
		}
		else if(pickedElement === 8){
		    document.getElementById("placeShip8").src = "ships/" +selectedship + "ship.png";
		    selected[7] = 1;		    
		}
		else if(pickedElement === 9){
		    document.getElementById("placeShip9").src = "ships/" +selectedship + "ship.png";
		    selected[8] = 1;		    
		}

	}
}

window.onload = function() {
    var canvas = document.getElementById("previewCanvas");
    var cxt = canvas.getContext("2d");
    cxt.drawImage(sky, 10, 10);
}