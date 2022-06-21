let homeScore = 0
let guestScore = 0
let homeScoreCount = document.getElementById("home-score")
let guestScoreCount = document.getElementById("guest-score")
let homeHeader = document.getElementById("home-header")
let guestHeader = document.getElementById("guest-header")
let qtText = document.getElementById("qt-text")
console.log(qtText.textContent)

//Functions about home team
function freeThrowHome() {
    homeScore += 1
    homeScoreCount.innerText = homeScore
    leadingTeam()
}

function layUpHome() {
    homeScore += 2
    homeScoreCount.innerText = homeScore
    leadingTeam()
}

function CurryFromHome() {
    homeScore += 3
    homeScoreCount.innerText = homeScore
    leadingTeam()
}


//Functions about guest team 
function freeThrowGuest() {
    guestScore += 1
    guestScoreCount.textContent = guestScore
    leadingTeam()
}

function layUpGuest() {
    guestScore += 2
    guestScoreCount.textContent = guestScore
    leadingTeam()
}

function CurryFromGuest() {
    guestScore += 3
    guestScoreCount.textContent = guestScore
    leadingTeam()
}

//To reset the game (button New Game)
function reset() {
    homeScore = 0
    guestScore = 0
    guestScoreCount.textContent = guestScore
    homeScoreCount.textContent = homeScore
    guestHeader.classList.remove("highlight")
    homeHeader.classList.remove("highlight")
    qtText.textContent = "1st Quarter"
}

// To Highlight the team winning
function leadingTeam() {
    if (homeScore > guestScore) {
        homeHeader.classList.add("highlight")
        guestHeader.classList.remove("highlight")
    } else if (guestScore > homeScore) {
        guestHeader.classList.add("highlight")
        homeHeader.classList.remove("highlight")
    } else {
        guestHeader.classList.remove("highlight")
        homeHeader.classList.remove("highlight")
    }
}

// To change the Quarter Time
function changeQT() {
    switch (qtText.textContent) {
        case "1st Quarter":
            qtText.textContent = "2nd Quarter"
            break;
        case "2nd Quarter":
            qtText.textContent = "3rd Quarter"
            break;
        case "3rd Quarter":
            qtText.textContent = "4th Quarter"
            break;
        default:
            break;
    }
}