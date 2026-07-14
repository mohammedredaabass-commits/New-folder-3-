console.log("Videos Page Loaded");


const audio = document.getElementById("welcomeAudio");

if (audio) {
    audio.volume = 0.5; // مستوى الصوت 50%

    audio.play().catch(function(error) {
        console.log("Autoplay was blocked:", error);
    });
}