
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const textoDiv = document.getElementById('texto');
const overText = document.querySelector('.overText');
const jump = () =>{
    mario.classList.add('jump');
    setTimeout(()=>{
        mario.classList.remove('jump')
    }, 500)
}
function restart() {
    mario.style.bottom = '0';
    mario.src = './img/mario.gif';
    mario.style.width = '150px';
    mario.style.marginLeft = '0';
    pipe.style.animation = 'pipe-animation 2s infinite linear';
}



const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    
    //gameover
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition <80){ 
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        overText.classList.add('show');
    }
}, 10);


  
document.addEventListener('keydown', () => {
    jump();
    overText.classList.remove('show');
    restart();
});