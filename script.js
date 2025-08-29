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

        const serviceNumber = copyBtn.parentElement.parentElement.children[3].innerText;

        console.log(serviceNumber);

        alert(`Number copied : ${serviceNumber}`);

        navigator.clipboard.writeText(serviceNumber);
    })
}

//call buttons
let callBtns = document.querySelectorAll('.call');
let coinCounter = document.querySelector('.coinCounter');

let availableCoins = 100;

for(const callBtn of callBtns){
    callBtn.addEventListener('click',function(){
        if(availableCoins >= 20){
            availableCoins = availableCoins - 20;
            coinCounter.innerText = availableCoins;

            const serviceName = callBtn.parentElement.parentElement.children[1].innerText;
            const serviceNumber = callBtn.parentElement.parentElement.children[3].innerText;

            // console.log(serviceName, serviceNumber);

            alert(`Calling ${serviceName} ${serviceNumber}...`);

            const callHistory = document.querySelector('.call-history');
            const callHistoryMobile = document.querySelector('.call-history-mobile');
            const div = document.createElement("div");
            const divMobile = document.createElement('div');

            div.innerHTML = `
                    <div class="history-card bg-[#FAFAFA] p-4 flex flex-row items-center justify-between mt-3 rounded-lg">
                        <div>
                            <h1 class="text-xl font-bold">${serviceName}</h1>
                            <p>${serviceNumber}</p>
                        </div>
                        <div>
                            <p>${new Date().toLocaleTimeString()}</p>
                        </div>
                    </div>
            `

            divMobile.innerHTML = `
                    <div class="history-card bg-[#FAFAFA] p-4 flex flex-row items-center justify-between mt-3 rounded-lg">
                        <div>
                            <h1 class="text-lg font-bold">${serviceName}</h1>
                            <p>${serviceNumber}</p>
                        </div>
                        <div>
                            <p>${new Date().toLocaleTimeString()}</p>
                        </div>
                    </div>
            `

            callHistory.appendChild(div);
            callHistoryMobile.appendChild(divMobile);
        }
        else{
            alert("Number of coins is not enough to make a call.");
            return;
        }
    })
}

//clear call history
const clearHistoryBtn = document.querySelectorAll('.clear-history-btn');
const callHistory = document.querySelectorAll('.call-history');

for(const clearBtn of clearHistoryBtn){
    clearBtn.addEventListener("click",function(){
        const historyCard = clearBtn.parentElement.parentElement.children[1];
        historyCard.innerHTML = '';
    })
}



