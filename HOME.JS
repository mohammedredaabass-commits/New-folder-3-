// ================= Welcome =================

const welcomeText = document.getElementById("welcomeText");
const userName = localStorage.getItem("userName");

if (welcomeText) {

    welcomeText.innerHTML = `Welcome ${userName} 👋`;

}

// ================= Greeting =================

const greeting = document.getElementById("greeting");

function updateGreeting() {

    const now = new Date();
    const hour = now.getHours();

    if (hour < 12) {

        greeting.innerHTML = "🌞 Good Morning";

    }

    else if (hour < 18) {

        greeting.innerHTML = "🌤 Good Afternoon";

    }

    else {

        greeting.innerHTML = "🌙 Good Evening";

    }

}

// ================= Clock =================

const clock = document.getElementById("clock");

function updateClock() {

    const now = new Date();

    clock.innerHTML = "🕒 " + now.toLocaleTimeString();

}

// ================= Date =================

const date = document.getElementById("date");

function updateDate() {

    const now = new Date();

    date.innerHTML = "📅 " + now.toDateString();

}

// تشغيلهم

updateGreeting();
updateClock();
updateDate();

setInterval(updateClock,1000);

// ================= Buttons =================

document.getElementById("imagesBtn").onclick = function(){

    window.location.href = "IMAGES.HTML";

};

document.getElementById("videosBtn").onclick = function(){

    window.location.href = "VIDEOS.HTML";

};

document.getElementById("linksBtn").onclick = function(){

    window.location.href = "LINKS.HTML";

};

document.getElementById("projectsBtn").onclick = function(){

    window.location.href = "PROJECTS.HTML";

};

document.getElementById("gamesBtn").onclick = function(){

    window.location.href = "GAMES.HTML";

};

document.getElementById("aboutBtn").onclick = function(){

    window.location.href = "ABOUT.HTML";

};

document.getElementById("contactBtn").onclick = function(){

    window.location.href = "CONTACT.HTML";

};

// ================= Audio =================

const audio = document.getElementById("welcomeAudio");

if(audio){

    audio.volume = 0.5;

    audio.play().catch(()=>{});

}


// ================= LOADING =================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        loader.style.opacity = "0";

        setTimeout(function () {

            loader.style.display = "none";

        }, 800);

    }, 1800);

});


// ================= DARK MODE =================

const themeBtn = document.getElementById("themeBtn");

// استرجاع آخر وضع
if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    themeBtn.innerHTML = "☀️";

}

// تغيير الوضع
themeBtn.onclick = function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML = "☀️";

    } else {

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML = "🌙";

    }

};


// ================= BACK TO TOP =================

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 10){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};