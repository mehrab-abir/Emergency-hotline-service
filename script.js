// heart counter 
let heartCounter = document.querySelector('.heartCounter');
let heartIcons = document.querySelectorAll('.fa-heart');

let countHeart = 0;

for(const heart of heartIcons){
    heart.addEventListener('click',function(){
        countHeart++;
        heartCounter.innerText = countHeart;
    })
}

//copy counter
let copyCounter = document.querySelector('.copyCounter');
let copyBtns = document.querySelectorAll('.copyNumber')

let countCopy = 0;

for(const copyBtn of copyBtns){
    copyBtn.addEventListener('click',function(){
        countCopy++;
        copyCounter.innerText = countCopy;
    })
}

