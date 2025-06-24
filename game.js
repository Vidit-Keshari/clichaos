document.addEventListener("DOMContentLoaded", () => {
    load();
});

window.level1 = function () {
    const btn = document.createElement("button");
    btn.textContent = "Click me to go to the next level";
    btn.setAttribute("onclick", "nextLvl(); document.getElementById('pop').play();");
    btn.style.position = "absolute";
    let top = `${50}%`
    let left = `${50}%`
    btn.style.top = top;
    btn.style.left = left;
    btn.style.whiteSpace = "nowrap";
    btn.style.transform = "translate(-50%, -50%)";
    btn.addEventListener("mouseover", () => {
        setTimeout(() => {
            let n = Math.floor(Math.random() * 100) + 1;
            top = `${n}%`;
            n = Math.floor(Math.random() * 100) + 1;
            left = `${n}%`;
            btn.style.top = top;
            btn.style.left = left;
        }, 100);
    });
    btn.tabIndex = -1;
    document.getElementById("game-area").appendChild(btn);
};

window.level2 = function () {
    let btns = [];
    for (let i = 0; i < 25; i++) {
        const btn = document.createElement("button");
        btns.push(btn);
    }
    let texts = [
        "Click me",
        "No click me",
        "I am the one",
        "Guess what, it's me",
        "I am the chosen one",
        "I am the correct one",
        "Hail VGames",
        "Bro, just try me for once",
        "IDC, I just see the chaos"
    ];
    const grid = document.createElement("div");
    grid.setAttribute("id", "grid");
    grid.style.setProperty("--ele", "5");
    grid.style.setProperty("--eler", "5");
    document.getElementById("game-area").appendChild(grid);
    btns.forEach(btn => {
        btn.textContent = texts[Math.floor(Math.random() * texts.length)];
        btn.style.width = "fit-contents";
        btn.style.padding = "5%";
        btn.style.boxShadow = "0px 0px 25px 0px blue";
        btn.style.transition = "all 0.1s ease-in-out";
        btn.style.fontSize = "normal";
        btn.style.fontWeight = "normal";
        btn.tabIndex = -1;
        grid.appendChild(btn);
    });
    btns[Math.floor(Math.random() * btns.length)].setAttribute("onclick", "nextLvl(); document.getElementById('pop').play();");
};

window.level3 = function () {
    let btns = [document.createElement("button"), document.createElement("button")];
    btns[Math.floor(Math.random() * 2)].setAttribute("onclick", "nextLvl(); document.getElementById('pop').play();");
    btns[0].style.left = "25%";
    btns[1].style.left = "75%";
    btns[0].textContent = "Click me";
    btns[1].textContent = "No, click me";
    btns.forEach(btn => {
        btn.style.position = "absolute";
        btn.style.top = "50%";
        btn.style.transform = "translate(-50%, -50%)";
        btn.style.whiteSpace = "nowrap";
        btn.tabIndex = -1;
        btn.addEventListener("mouseover", () => {
            setTimeout(() => {
                let n = Math.floor(Math.random() * 90) + 5;
                btn.style.top = `${n}%`;
                n = Math.floor(Math.random() * 70) + 21;
                btn.style.left = `${n}%`;
            }, 100);
        });
        document.getElementById("game-area").appendChild(btn);
    });
};

window.level4 = function () {
    document.getElementById("home").setAttribute("onclick", "nextLvl(); document.getElementById('pop').play();");
    document.getElementById("header").style.transition = "none";
};

window.level5 = function () {
    let btns = [];
    const grid = document.createElement("div");
    grid.setAttribute("id", "grid");
    grid.style.setProperty("--ele", "5");
    grid.style.setProperty("--eler", "2");
    let clicked = {};
    const main = document.createElement("button");
    for (let i = 0; i < 10; i++) {
        const btn = document.createElement("button");
        btn.textContent = "I am the correct one";
        btn.tabIndex = -1;
        btns.push(btn);
        grid.appendChild(btn);
        btn.addEventListener("click", () => {
            clicked[btns.indexOf(btn)] = true;
            for (let j = 0; j < 10; j++) {
                if (clicked[j] !== true) {
                    break;
                }
                if (j == 9) {
                    main.style.display = "block";
                }
            }
        });
    }
    main.setAttribute("onclick", "nextLvl(); document.getElementById('pop').play();");
    main.style.position = "absolute";
    main.textContent = "So, you found me, after 10 mistakes?";
    main.style.display = "none";
    main.style.top = "70%";
    main.style.left = "50%";
    main.style.transform = "translate(-50%, -50%)";
    document.getElementById("game-area").appendChild(grid);
    document.getElementById("game-area").appendChild(main);
};

window.level6 = function () {
    const btn = document.createElement("button");
    btn.textContent = "Here I am (Hint: I can't be clicked easily, try using another input method)";
    btn.setAttribute("onclick", "nextLvl(); document.getElementById('pop').play();");
    btn.style.position = "absolute";
    btn.style.top = 0;
    btn.style.left = "50%";
    btn.style.transform = "translate(-50%, 0%)";
    btn.style.zIndex = -1;
    btn.classList.add("no-outline");
    document.getElementById("game-area").appendChild(btn);
};

window.level7 = function () {
    const gameArea = document.getElementById("game-area");

    let fakeBtns = [];
    let chaos = ["Click me", "No, not me", "I'm not real", "Too slow!", "Missed!", "HAHA", "404: Button not found", "Wrong one!", "I dare you!", "Trust me!"];
    let clicked = 0;

    for (let i = 0; i < 30; i++) {
        const btn = document.createElement("button");
        btn.textContent = chaos[Math.floor(Math.random() * chaos.length)];
        btn.style.position = "absolute";
        btn.style.left = `${Math.random() * 90}%`;
        btn.style.top = `${Math.random() * 90}%`;
        btn.style.transform = "translate(-50%, -50%)";
        btn.tabIndex = -1;
        btn.addEventListener("click", () => {
            btn.textContent = "NOPE";
            btn.disabled = true;
            btn.style.background = "crimson";
            btn.style.color = "white";
            clicked++
            if (clicked == 25) {
                const realBtn = document.createElement("button");
                realBtn.textContent = "Finally, me.";
                realBtn.setAttribute("onclick", "nextLvl(); document.getElementById('pop').play();");
                realBtn.style.position = "absolute";
                realBtn.style.left = "50%";
                realBtn.style.top = "90%";
                realBtn.style.transform = "translate(-50%, -50%) scale(1.3)";
                realBtn.style.boxShadow = "0px 0px 15px 5px lime";
                realBtn.style.color = "lime";
                realBtn.style.fontWeight = "bold";
                realBtn.tabIndex = -1;
                gameArea.appendChild(realBtn);
            }
        });
        gameArea.appendChild(btn);
        fakeBtns.push(btn);
    }
};

window.level8 = function () {
    const game_area = document.getElementById("game-area");
    game_area.style.maxHeight = "unset";
    game_area.style.height = "100vh";
    const div = document.createElement("div");
    div.style.height = "100%";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "flex-end";
    div.style.alignItems = "center";
    game_area.style.overflow = "unset";
    game_area.appendChild(div);
    const btn = document.createElement("button");
    btn.textContent = "Here";
    btn.setAttribute("onclick", "nextLvl(); document.getElementById('pop').play();");
    btn.style.marginBottom = "100px";
    div.appendChild(btn);
};

window.level9 = function () {
    const btn = document.createElement("button");
    let texts = [
        "Click me to go to the next level",
        "Try again",
        "Are you sure you want to click me?",
        "Don't you dare click me",
        "Click me if you can",
        "Click me, I dare you",
        "Can't you even click me?",
        "What do you think, this going to be easy?",
        "Trust me, next level is even chaotic, that's motive of this game",
        "Let me free!",
        "Bro, you are so determined",
        "There is only 2% chance that I will work",
        "I am a broken button, leave me",
        "Ok, you can go, jk",
        "Better luck next time",
        "Bad luck"
    ];
    btn.textContent = texts[0];
    btn.addEventListener("mouseenter", () => {
        const colors = ["white", "yellow", "orangered", "aqua", "lightblue"];
        let bgcolors = [
            `rgb(${Math.floor(Math.random() * 226) + 30}, ${Math.floor(Math.random() * 226) + 30}, ${Math.floor(Math.random() * 226) + 30})`,
            `rgb(${Math.floor(Math.random() * 226) + 30}, ${Math.floor(Math.random() * 226) + 30}, ${Math.floor(Math.random() * 226) + 30})`
        ];
        btn.style.background = `linear-gradient(to right, ${bgcolors[0]}, ${bgcolors[1]})`;
        btn.style.boxShadow = `-5px 0px 20px 5px ${bgcolors[0]}, 5px 0px 20px 5px ${bgcolors[1]}`;
        btn.style.textShadow = `0px 0px 7px ${btn.style.color}`;
        btn.style.color = colors[Math.floor(Math.random() * colors.length)];
    });
    btn.style.transform = "translate(-50%, -50%)";
    btn.style.position = "absolute";
    btn.style.top = "50%";
    btn.style.left = "50%";
    btn.tabIndex = -1;
    btn.addEventListener("click", () => {
        btn.style.top = `${Math.floor(Math.random() * 70) + 21}%`;
        btn.style.left = `${Math.floor(Math.random() * 50) + 21}%`;
        let chances = Math.floor(Math.random() * 50);
        btn.textContent = texts[Math.floor(Math.random() * texts.length)];
        if (chances == 0) {
            btn.textContent = "Fine, you win. Let me take you to the next level, its a boss fight. Click me";
            btn.setAttribute("onclick", "nextLvl(); document.getElementById('pop').play();");
        }
    });
    document.getElementById("game-area").appendChild(btn);
};

window.level10 = function () {
    let texts = [
        "Click me",
        "No click me",
        "I am the one",
        "Guess what, it's me",
        "I am the chosen one",
        "I am the correct one",
        "Hail VGames",
        "Bro, just try me for once",
        "IDC, I just see the chaos",
        "No, not me",
        "I'm not real",
        "Too slow!",
        "Missed!",
        "HAHA",
        "404: Button not found",
        "Wrong one!",
        "I dare you!",
        "Trust me!",
        "Bro, you are so determined"
    ];
    let btns = [];
    const main = document.createElement("button");
    btns.push(main);
    for (let i = 0; i < 29; i++) {
        const btn = document.createElement("button");
        btns.push(btn);
    }
    btns.forEach(btn => {
        btn.style.transform = "translate(-50%, -50%)";
        btn.style.position = "absolute";
        btn.style.left = `${Math.floor(Math.random() * 80) + 11}%`;
        btn.style.top = `${Math.floor(Math.random() * 90) + 6}%`;
        btn.textContent = texts[Math.floor(Math.random() * texts.length)];
        btn.addEventListener("mouseenter", () => {
            const colors = ["white", "yellow", "orangered", "aqua", "lightblue"];
            let bgcolors = [
                `rgb(${Math.floor(Math.random() * 226) + 30}, ${Math.floor(Math.random() * 226) + 30}, ${Math.floor(Math.random() * 226) + 30})`,
                `rgb(${Math.floor(Math.random() * 226) + 30}, ${Math.floor(Math.random() * 226) + 30}, ${Math.floor(Math.random() * 226) + 30})`
            ];
            btn.style.background = `linear-gradient(to right, ${bgcolors[0]}, ${bgcolors[1]})`;
            btn.style.boxShadow = `-5px 0px 20px 5px ${bgcolors[0]}, 5px 0px 20px 5px ${bgcolors[1]}`;
            btn.style.textShadow = `0px 0px 7px ${btn.style.color}`;
            btn.style.color = colors[Math.floor(Math.random() * colors.length)];
        });
        btn.addEventListener("click", () => {
            btn.style.top = `${Math.floor(Math.random() * 70) + 21}%`;
            btn.style.left = `${Math.floor(Math.random() * 50) + 21}%`;
            btn.textContent = texts[Math.floor(Math.random() * texts.length)];
        });
        main.setAttribute("onclick", "nextLvl(); document.getElementById('pop').play();");
        document.getElementById("game-area").appendChild(btn);
        btn.tabIndex = -1;
        setInterval(() => {
            btn.style.top = `${Math.floor(Math.random() * 70) + 21}%`;
            btn.style.left = `${Math.floor(Math.random() * 50) + 21}%`;
        }, Math.floor(Math.random() * 4000) + 1000);
    });
    main.style.animation = "wobble 2s infinite";
};

window.level11 = function () {
    window.location.assign("index.html"); //  Not made
};

function gameLoop() {
    if (window.scrollY !== 0) window.scrollBy(0, -50);
    if (lvl == 4) {
        document.getElementById("header").style.transform = "translateY(0) rotateX(0deg)";
    }
    requestAnimationFrame(gameLoop);
}
gameLoop();
