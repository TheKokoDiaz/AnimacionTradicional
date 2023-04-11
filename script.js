var frameX = 0;
var frameY = 0;
var animation_limit = 4;

const dropdown = document.getElementById('sel');
dropdown.addEventListener('change', function(e){
    A = (e.target.value)-1;
    frameY = A;
    console.log(A);

    switch((A+1))
    {
        case 1:
            animation_limit = 4;
        break;
        
        case 2:
            animation_limit = 5;
        break;
        
        case 3:
            animation_limit = 6;
        break;
        
        case 4:
            animation_limit = 3;
        break;
        
        case 5:
            animation_limit = 12;
        break;
        
        case 6:
            animation_limit = 7;
        break;
        
        case 7:
            animation_limit = 4;
        break;
        
        case 8:
            animation_limit = 1;
        break;
    }
})

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const canvas_width =  canvas.width = 32*6;
const canvas_height =  canvas.height = 32*6;

const playerImage = new Image();
playerImage.src = 'Player_Sprites.png';
const spriteWidth = 32*6;
const spriteHeight = 32*6;

let gameFrame = 0;
var straggerFrames = 10;

function animate(){
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, canvas_width, canvas_height);
    
    if(gameFrame % straggerFrames == 0)
    {
        if(frameX < (animation_limit-1))
        {
            frameX++;
        }
        else
        {
            frameX = 0;
        }
    }

    gameFrame++;
    requestAnimationFrame(animate);
}
animate();