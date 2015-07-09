var selectedship = "yellow";

function check(ship) {
	selectedship = ship;
    document.getElementById("selectedship").value = ship;
    console.log(selectedship);
}

function changeImage() {

	//for(i=1; i<10; i++)
	//{
		//console.log(i);
    	if (document.getElementById("placeShip1").src == "ships/holder.png") 
    	{
        	document.getElementById("placeShip1").src = "ships/blueship.png";
    	}
    	else 
    	{
        	document.getElementById("placeShip1").src = "ships/" +selectedship + "ship.png";
    	}
	//}
}