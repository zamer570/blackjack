let cards = [];
let firstCard, secondCard;
let sum;
let blackJack = false ,outGame = false;
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");

function startGame(){
    cardsEl.textContent = "";
    sumEl.textContent = "";
    outGame = false;
    blackJack = false;
    firstCard = randomCard();
    secondCard = randomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function newCard(){
    let card = randomCard();
    cards.push(card);
    sum += card;
    renderGame();
}

function renderGame(){
    if(blackJack || outGame) return;
    cardsEl.textContent = "Cards: ";
    cards.forEach(card =>{
        console.log(card);
        cardsEl.textContent += card + " ";
    })
    sumEl.textContent = "Sum: " + sum;
    if(sum>21){
        outGame = true;
        messageEl.textContent = "You're out of Game, Try Again!";
    }
    else if(sum == 21){
        blackJack = true;
        messageEl.textContent = "Wohoo! You have got a BlackJack!";
    }
    else{
        messageEl.textContent = "You're doing great, Pick a new card!";
    }
}

function randomCard(){
    let card = Math.ceil(Math.random()*14);
    if(card>=10){
        return 10;
    }
    else if(card==1){
        return 11;
    }
    return card;
}