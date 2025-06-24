//  Variables
var lvl = 0;

//  Funtions
document.addEventListener("DOMContentLoaded", () => {
    //  Setup
    console.log("https://github.com/vidit-keshari/clichaos/");
    document.addEventListener("select", e => e.preventDefault());
    if (!window.localStorage.getItem("player")) window.localStorage.setItem("player", "Guest"); 
    if (window.location.pathname.includes("index.html")) document.getElementById("player").textContent = "Yo, " + window.localStorage.getItem("player") + "!";
    //  Function call
    randomQuote();
});


function randomQuote() {
    const quotes = [
        "Keep Gaming!", //0
        "Play. Complete. Conquer!", //1
        "Gaming Improved!", //2
        "Unleash the Gamer Within!", //3
        "Where Fun Never Ends!", //4
        "Victory on the Door!", //5
        "Play beyond limits!", //6
        "-By Vidit Keshari from VGames" //7
    ];
    const element = document.getElementById("quote");
    var idx = Math.floor(Math.random() * quotes.length);
    element.textContent = quotes[idx];
}

function play() {
    window.location.assign("game.html");
}

function home() {
    window.location.assign("index.html");
}

window.nextLvl = function (level) {
    if (level) {
        lvl = level;
    } else {
        lvl++;
    }
    lvl = parseInt(lvl);
    save();
    document.getElementById("lvl").textContent = `Level: ${lvl}`;
    disposePreviousLvl();
    setupLvl(lvl);
}

function setupLvl(l) {
    eval(`level${l}()`);
}

function disposePreviousLvl() {
    document.getElementById("game-area").innerHTML = "";
    document.getElementById("game-area").style.maxHeight = "100%";
    document.getElementById("game-area").style.height = "100%";
    document.getElementById("game-area").style.overflow = "hidden";
    document.getElementById("home").setAttribute("onclick", "home();");
    document.getElementById("header").style.transition = "background-color 0.3s ease-in-out, text-shadow 0.3s ease-in-out, box-shadow 0.3s ease-in-out, transform 0.5s ease-in";
    document.getElementById("header").style.transform = "";
}

window.save = function () {
	game_data = {
		level: lvl,
	}
	window.localStorage.setItem("n.clichaos.game_data", JSON.stringify(game_data));
}

window.load = function () {
	let data = window.localStorage.getItem("n.clichaos.game_data");
	if (data) {
		data = JSON.parse(data);
		if (data.level) {
            if (data.level < 1 || data.level > 10) data.level = 1;
			lvl = data.level;
			nextLvl(lvl);
		} else {
            lvl = 1;
            nextLvl(lvl);
        }
	} else {
		lvl = 1;
		nextLvl(lvl);
	}
}
