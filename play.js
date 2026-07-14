// ==========================
// SPACE SHOOTER - PART 1
// ==========================

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 700;

// --------------------------
// Game Variables
// --------------------------

let score = 0;
let gameOver = false;

// --------------------------
// Player
// --------------------------

const player = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 90,
    width: 50,
    height: 70,
    speed: 6,
    health: 3
};

// --------------------------
// Arrays
// --------------------------

const bullets = [];
const enemies = [];
const stars = [];

const keys = {};

// --------------------------
// Stars
// --------------------------

for(let i = 0; i < 120; i++){

    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 1
    });

}

// --------------------------
// Keyboard
// --------------------------

window.addEventListener("keydown",function(e){

    keys[e.key]=true;

    if(e.code==="Space" && !gameOver){

        bullets.push({

            x:player.x+player.width/2-3,
            y:player.y,
            width:6,
            height:20,
            speed:9

        });

    }

});

window.addEventListener("keyup",function(e){

    keys[e.key]=false;

});

// --------------------------
// Spawn Enemy
// --------------------------

function spawnEnemy(){

    if(gameOver) return;

    enemies.push({

        x:Math.random()*(canvas.width-50),
        y:-60,
        width:45,
        height:45,
        speed:2+Math.random()*2

    });

}

setInterval(spawnEnemy,1000);

// --------------------------
// Update
// --------------------------

function update(){

    // Player Movement

    if(keys["ArrowLeft"]){

        player.x-=player.speed;

    }

    if(keys["ArrowRight"]){

        player.x+=player.speed;

    }

    if(keys["ArrowUp"]){

        player.y-=player.speed;

    }

    if(keys["ArrowDown"]){

        player.y+=player.speed;

    }

    // Borders

    if(player.x<0)
        player.x=0;

    if(player.x+player.width>canvas.width)
        player.x=canvas.width-player.width;

    if(player.y<0)
        player.y=0;

    if(player.y+player.height>canvas.height)
        player.y=canvas.height-player.height;

    // Stars

    for(let star of stars){

        star.y+=star.speed;

        if(star.y>canvas.height){

            star.y=0;
            star.x=Math.random()*canvas.width;

        }

    }

    // Bullets

    for(let i=bullets.length-1;i>=0;i--){

        bullets[i].y-=bullets[i].speed;

        if(bullets[i].y<-20){

            bullets.splice(i,1);

        }

    }

    // Enemies

    for(let i=enemies.length-1;i>=0;i--){

        enemies[i].y+=enemies[i].speed;

        if(enemies[i].y>canvas.height){

            enemies.splice(i,1);

            player.health--;

            if(player.health<=0){

                gameOver=true;

            }

        }

    }

}


// ==========================
// SPACE SHOOTER - PART 2
// ==========================

// --------------------------
// Collision
// --------------------------

function checkCollisions(){

    // Bullet vs Enemy

    for(let i=enemies.length-1;i>=0;i--){

        for(let j=bullets.length-1;j>=0;j--){

            if(

                bullets[j].x < enemies[i].x + enemies[i].width &&
                bullets[j].x + bullets[j].width > enemies[i].x &&
                bullets[j].y < enemies[i].y + enemies[i].height &&
                bullets[j].y + bullets[j].height > enemies[i].y

            ){

                enemies.splice(i,1);
                bullets.splice(j,1);

                score++;

                break;

            }

        }

    }

    // Player vs Enemy

    for(let i=enemies.length-1;i>=0;i--){

        if(

            player.x < enemies[i].x + enemies[i].width &&
            player.x + player.width > enemies[i].x &&
            player.y < enemies[i].y + enemies[i].height &&
            player.y + player.height > enemies[i].y

        ){

            enemies.splice(i,1);

            player.health--;

            if(player.health<=0){

                gameOver=true;

            }

        }

    }

}

// --------------------------
// Draw
// --------------------------

function draw(){

    // Background

    ctx.fillStyle="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    // Stars

    ctx.fillStyle="white";

    for(let star of stars){

        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.size,
            0,
            Math.PI*2
        );

        ctx.fill();

    }

    // Player

    ctx.fillStyle="cyan";

    ctx.fillRect(

        player.x,
        player.y,
        player.width,
        player.height

    );

    // Player Head

    ctx.fillStyle="white";

    ctx.fillRect(

        player.x+18,
        player.y+8,
        14,
        18

    );

    // Bullets

    ctx.fillStyle="yellow";

    for(let bullet of bullets){

        ctx.fillRect(

            bullet.x,
            bullet.y,
            bullet.width,
            bullet.height

        );

    }

    // Enemies

    ctx.fillStyle="red";

    for(let enemy of enemies){

        ctx.fillRect(

            enemy.x,
            enemy.y,
            enemy.width,
            enemy.height

        );

    }

    // Score

    ctx.fillStyle="white";
    ctx.font="24px Arial";

    ctx.fillText(
        "Score: " + score,
        20,
        50
    );

    // Health

    ctx.fillText(
        "Health: " + player.health,
        20,
        90
    );

    // Game Over

    if(gameOver){

        ctx.fillStyle="red";

        ctx.font="50px Arial";

        ctx.fillText(
            "GAME OVER",
            95,
            320
        );

        ctx.font="24px Arial";

        ctx.fillStyle="white";

        ctx.fillText(
            "Press R to Restart",
            125,
            365
        );

    }

}


// ==========================
// SPACE SHOOTER - PART 3
// ==========================

// زيادة الصعوبة مع الوقت
function increaseDifficulty(){

    for(let enemy of enemies){

        enemy.speed = 2 + score * 0.05;

    }

}

// إعادة اللعبة

function restartGame(){

    score = 0;

    player.health = 3;

    player.x = canvas.width / 2 - 25;
    player.y = canvas.height - 90;

    bullets.length = 0;
    enemies.length = 0;

    gameOver = false;

}

// Game Loop

function gameLoop(){

    if(!gameOver){

        update();

        checkCollisions();

        increaseDifficulty();

    }

    draw();

    requestAnimationFrame(gameLoop);

}

gameLoop();

// إعادة اللعبة

window.addEventListener("keydown",function(e){

    if(gameOver && (e.key==="r" || e.key==="R")){

        restartGame();

    }

});

// Mouse Shoot

canvas.addEventListener("click",function(){

    if(gameOver) return;

    bullets.push({

        x:player.x+player.width/2-3,
        y:player.y,
        width:6,
        height:20,
        speed:9

    });

});

console.log("🚀 Space Shooter Started");