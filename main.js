
let header = document.getElementById('header');
function colorChange(event){
    let { clientX, clientY,screenX, screenY } = event;
    console.log(event);
    console.log('========================')
    let a = Math.random() * 100;
    header.style.backgroundColor = `rgb(${a}, ${clientX}, ${clientY})`;
    
    header.innerHTML =`<b> x : ${clientX} || y: ${clientY}</b>`;
}

header.addEventListener('mousemove', colorChange );

function fixedHeader(){
    if(window.pageYOffset > 120){
        header.classList.add('fixed');
    }else{
        header.classList.remove('fixed');
    }
}
document.body.onscroll = fixedHeader;