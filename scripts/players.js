
var numPlayers;

function Player(name, mentalHealth, money, jobTitle, houseHold){
	this.name = name;
	this.mh = mentalHealth;
	this.money = money;
	this.salary = money;
	this.job = jobTitle;
	this.status = false;
	this.hh = houseHold;
	this.infected = 0;
}

function setPlayers(players){
	sessionStorage.setItem("players", JSON.stringify(players));
}

function getPlayers(){
	return JSON.parse(sessionStorage.getItem("players"));
}

function getPlayersFromHouse(houseNum){
	var toReturn = [];
	var players = getPlayers();
	var numPlayers = players.length;
	
	for(i = 0; i < numPlayers; i++){
		if(players[i].hh == houseNum ){
			toReturn.push(players[i]);
		}
	}

	return toReturn;

}


function getRandomFromHouse(houseNum){
	var valid = false;
	var players = getPlayers();
	while(!valid){
		var randomPick = Math.floor(Math.random() * players.length);
		if(players[randomPick].hh == houseNum){
			return randomPick;
		}
	}
	
}

//Generates a div, can be used on any page
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
		document.getElementById("playerStats").innerHTML += `<h3>${players[i]["name"]}</h3>`
														+ `<div>Mental Health : ${players[i]["mh"]}</div>`
														+ `<div>Money : ${players[i]["money"]}</div>`
														+ `<div>Job : ${players[i]["job"]}</div>`
														+ `<div>Household : ${players[i]["hh"]}</div>`;
	}
}




