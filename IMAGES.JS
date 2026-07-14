const homeBtn = document.getElementById("homeBtn");

homeBtn.addEventListener("click", function(){

    window.location.href = "HOME.html";

});


const audio = document.getElementById("welcomeAudio");

if (audio) {
    audio.volume = 0.5; // مستوى الصوت 50%

    audio.play().catch(function(error) {
        console.log("Autoplay was blocked:", error);
    });
}


const images = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const closeBtn = document.getElementById("closeBtn");

images.forEach(function(img){

    img.onclick = function(){

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;

    };

});

closeBtn.onclick = function(){

    lightbox.style.display = "none";

};

lightbox.onclick = function(e){

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

};