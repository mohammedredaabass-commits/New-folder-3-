const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 600;

const bird = {
    x: 80,
    y: 250,
    radius: 18,
    velocity: 0
};

const gravity = 0.5;
const jump = -8;

const pipeWidth = 60;
const gap = 170;
const speed = 2;

let pipes = [];
let score = 0;
let gameOver = false;

function createPipe() {
    const topHeight = Math.random() * 250 + 50;

    pipes.push({
        x: canvas.width,
        topHeight: topHeight,
        passed: false
    });
}

setInterval(() => {
    if (!gameOver) createPipe();
}, 1800);

function update() {

    bird.velocity += gravity;
    bird.y += bird.velocity;

    for (let pipe of pipes) {

        pipe.x -= speed;

        if (
            bird.x + bird.radius > pipe.x &&
            bird.x - bird.radius < pipe.x + pipeWidth
        ) {

            if (
                bird.y - bird.radius < pipe.topHeight ||
                bird.y + bird.radius > pipe.topHeight + gap
            ) {
                gameOver = true;
            }
        }

        if (!pipe.passed && pipe.x + pipeWidth < bird.x) {
            pipe.passed = true;
            score++;
        }
    }

    pipes = pipes.filter(pipe => pipe.x + pipeWidth > 0);

    if (
        bird.y + bird.radius >= canvas.height ||
        bird.y - bird.radius <= 0
    ) {
        gameOver = true;
    }
}

function draw() {

    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "green";

    for (let pipe of pipes) {

        ctx.fillRect(pipe.x,0,pipeWidth,pipe.topHeight);

        ctx.fillRect(
            pipe.x,
            pipe.topHeight+gap,
            pipeWidth,
            canvas.height
        );
    }

    ctx.beginPath();
    ctx.arc(bird.x,bird.y,bird.radius,0,Math.PI*2);
    ctx.fillStyle="yellow";
    ctx.fill();

    ctx.fillStyle="black";
    ctx.font="30px Arial";
    ctx.fillText("Score: "+score,20,40);

    if(gameOver){

        ctx.fillStyle="red";
        ctx.font="45px Arial";
        ctx.fillText("Game Over",65,280);

        ctx.font="20px Arial";
        ctx.fillText("Press R to Restart",95,330);
    }
}

function loop(){

    if(!gameOver){
        update();
    }

    draw();

    requestAnimationFrame(loop);
}

loop();

window.addEventListener("keydown",e=>{

    if(e.code==="Space" && !gameOver){

        bird.velocity=jump;
    }

    if(e.key==="r" || e.key==="R"){

        bird.y=250;
        bird.velocity=0;
        pipes=[];
        score=0;
        gameOver=false;
    }

});

canvas.addEventListener("click",()=>{

    if(!gameOver){
        bird.velocity=jump;
    }

});