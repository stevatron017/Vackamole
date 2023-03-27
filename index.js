const hole = document.getElementById(5); 
hole.src = 'mole2.png'
hole.classList.toggle('selected'); 
console.log(hole.classList)


function blah(){
    const thing = document.getElementsByClassName('mole');
    for (let i = 0; i < thing.length; i++){
        thing[i].addEventListener('click', function(){
            if (thing[i].classList.contains('selected')){
                thing[i].classList.toggle('selected'); 
                console.log('wack'); 
                thing[i].src = 'dirt2.png'; 
                nextMole(); 
                incrementScore();  
                let squeak = new Audio('squeak.wav'); 
                squeak.play();        
            }
        })
    }
}

function randHole(){
    return Math.ceil(Math.random()*9)
};

let score = 0; 

function incrementScore(){
    score++;
    document.getElementById('score').innerHTML='MOLES VHACKED: ' + score; 
    console.log(score); 
}

function nextMole(){
    let newNum = randHole(); 
    const newHole = document.getElementById(newNum); 
    newHole.src = 'mole2.png'; 
    newHole.classList.toggle('selected');
}

blah();