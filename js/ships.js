var selectedship = "yellow";

function check(ship) {
	selectedship = ship;
    document.getElementById("selectedship").value = ship;
    console.log(selectedship);
}