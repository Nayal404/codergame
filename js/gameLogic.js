score = 0;
cross = true;
audiogo = new Audio('gameover.mp3');
console.log('JavaScript Executed!!!');
document.onkeydown = (e)=>{
    // console.log('Code of Key: ', e.keyCode)
    if (e.keyCode == 38 || e.keyCode == 32){
        player = document.querySelector('.playa');
        player.classList.add('animatePlaya');
        setTimeout(() => {
            player.classList.remove('animatePlaya')
        }, 700);
    }
    if (e.keyCode == 39) {
        player = document.querySelector('.playa');
        coderX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = coderX + 112 + "px";
    }
    if (e.keyCode == 37) {
        player = document.querySelector('.playa');
        coderX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = (coderX - 112) + "px";
    }
}
setInterval(() => {
    player = document.querySelector('.playa');
    gameOver = document.querySelector('#gameOver');
    bugs = document.querySelector('.bugs');

    dx = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(player, null).getPropertyValue('top'));

    bx = parseInt(window.getComputedStyle(bugs, null).getPropertyValue('left'));
    by = parseInt(window.getComputedStyle(bugs, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - bx);
    offsetY = Math.abs(dy - by);
    // console.log(offsetX, offsetY)
    if (offsetX < 73  && offsetY < 52) {
        gameOver.innerHTML = "Game Over *_* Reload the Web To Play Again"
        alert('Game Over *_* Reload The Window To Play Again!!!');
        bugs.classList.remove('playb')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        scoreUpd(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(bugs, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            bugs.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function scoreUpd(score) {
    scoreCount.innerHTML = "Score: " + score
}
