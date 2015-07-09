var selectedship = "yellow";

function check(ship) {
	selectedship = ship;
    document.getElementById("selectedship").value = ship;
    console.log(selectedship);
}

function changeImage(pickedElement) {
	console.log(pickedElement);

	if(pickedElement === 1){
		    document.getElementById("placeShip1").src = "ships/" +selectedship + "ship.png";
	}
	else if(pickedElement === 2){
		    document.getElementById("placeShip2").src = "ships/" +selectedship + "ship.png";
	}
		else if(pickedElement === 3){
		    document.getElementById("placeShip3").src = "ships/" +selectedship + "ship.png";
	}
	else if(pickedElement === 4){
		    document.getElementById("placeShip4").src = "ships/" +selectedship + "ship.png";
	}
	else if(pickedElement === 5){
		    document.getElementById("placeShip5").src = "ships/" +selectedship + "ship.png";
	}
	else if(pickedElement === 6){
		    document.getElementById("placeShip6").src = "ships/" +selectedship + "ship.png";
	}
	else if(pickedElement === 7){
		    document.getElementById("placeShip7").src = "ships/" +selectedship + "ship.png";
	}
	else if(pickedElement === 8){
		    document.getElementById("placeShip8").src = "ships/" +selectedship + "ship.png";
	}
	else if(pickedElement === 9){
		    document.getElementById("placeShip9").src = "ships/" +selectedship + "ship.png";
	}




}
