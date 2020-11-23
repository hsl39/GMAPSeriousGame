
var numPlayers;

var jobs = [
	{"name" : "Nurse"},
	{"name" : "Cashier"},
	{"name" : "CEO"}
]

function Player(mentalHealth, money, jobTitle){
	this.mh = mentalHealth;
	this.money = money;
	this.job = jobTitle;
	this.status = false;
}

//I don't want to maintain "objects" in their own file
function setUpPlayers(){
	var players = [];
	numPlayers = document.getElementById("numberOfPlayers").value;

	for(i = 0; i < numPlayers; i++){
		var jobRandom = Math.floor(Math.random() * jobs.length);
		players[i] = new Player(100,100, jobs[jobRandom]["name"]);
	}

	setPlayers(players);
	sessionStorage.setItem("numDays", document.getElementById("numberOfDays").value);

	window.location.href = "prompt.html";
}

function setPlayers(players){
	sessionStorage.setItem("players", JSON.stringify(players));
}

function getPlayers(){
	return JSON.parse(sessionStorage.getItem("players"));
}

function updateStats(){

	if(document.getElementById("playerStats") == null){
		const div = document.createElement('div');
		div.id = "playerStats";
		document.getElementsByTagName("BODY")[0].appendChild(div);
	}

	document.getElementById("playerStats").innerHTML = "";
  
	var players = getPlayers();
	var numPlayers = players.length;
	
	for(i = 0; i < numPlayers; i++){
		document.getElementById("playerStats").innerHTML += `<div>Player ${i + 1}, Mental Health : ${players[i]["mh"]}, Money : ${players[i]["money"]}, Job : ${players[i]["job"]}, Covid Positive : ${players[i]["status"]}</div><br>`;
	}
}




