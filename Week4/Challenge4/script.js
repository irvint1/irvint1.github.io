
function generate_board() {

    //============================================================================
    // Task 1
    // Retrieve the friend name(s) from the 'friends' multi-select dropdown menu
    //============================================================================

    // Array to contain the names of user-selected friend(s)
    // For example, if the user selected 'Darryl' and 'Yin Kit',
    //   this array's value will be:
    //      [ 'darryl', 'yinkit' ]
    //
    let friends = []; // Initialize to empty

    // YOUR CODE GOES HERE
    let selected = document.getElementById('friends').selectedOptions;
    for (option of selected) {
        friends.push(option.value)
    }

    // Display user's selection in Developer Tools --> Console.
    console.log(friends);


    //============================================================================
    // Task 2
    // Given one or more selected friends and given 4 fruit names,
    //   generate a 'randomized' Array of finalized card names.
    // 
    // Card names are as follows:
    //    apple_brandon.png
    //    banana_brandon.png
    //    kiwi_brandon.png
    //    orange_brandon.png
    //
    // where 'brandon' can be replaced with another friend's name,
    // e.g.
    //    apple_nick.png
    // (and so on)
    //
    // Display all 4 fruit cards of one or more selected friends.
    //
    // NOTE: Each card must be displayed TWO and ONLY TWO times (thus, a "pair")
    //       (such that the user can attempt to 'match').
    //
    // Check out this utility function (declared at the bottom of this file)
    //   for randomizing the order of Array elements.
    //        shuffleArray()
    //============================================================================
    const fruits = ['apple', 'banana', 'kiwi', 'orange'];

    // YOUR CODE GOES HERE

    for (friend of friends) {
        for (fruit of fruits) {
            cards.push(`${fruit}_${friend}.png`);
            cards.push(`${fruit}_${friend}.png`);
        }
    }

    cards = shuffleArray(cards)



    //============================================================================
    // Task 3
    // Display the cards in <div id="game-board">
    //
    // For this, we will make use of Template Literal (using backticks).
    //
    // NOTE: The game board will always have 4 columns and N rows, where N denotes
    //       (number of selected friends) x 2.
    //
    //       For example, if I chose 'Brandon', 'Darryl', and 'Nick' (3 friends),
    //         then the newly generated game board will be
    //         6 (rows) by 4 (columns).
    //============================================================================
    const num_cols = fruits.length;
    const num_rows = friends.length * 2;

    console.log("# of columns: " + num_cols)
    console.log("# of rows: " + num_rows);


    // YOUR CODE GOES HERE

    // You will need to rewrite the value of this result_str (String).

    let result_str = "";

    for (let i = 0; i < num_rows; i++) {
        result_str += "<div class='row'>"

        for (let j = 0; j < num_cols; j++) {
            let cardIdx = i * 4 + j;
            result_str += `<div class='column'> <img id = 'card_${cardIdx}' src = 'cards/hidden.png'> </div>`;
            console.log(cards[cardIdx])
        }
        result_str += "</div>"
    }


    // DO NOT MODIFY THE FOLLOWING
    // Replace the innerHTML of <div id="game-board">
    //   with a newly prepared HTML string (result_str).
    document.getElementById('game-board').innerHTML = result_str;
    let imgElems = document.getElementsByTagName('img');
    for (img of imgElems) {
        img.addEventListener('click', cardClick);
    }
    document.getElementById('score').innerText = 'Total Score: 0';
}

let cards = [];
let chosenCards = [];


function cardClick(event) {
    if (chosenCards.length === 2) { return }

    let cardIdx = event.target.id;
    cardIdx = cardIdx.substring(5);

    if (event.target.attributes.src.nodeValue !== 'cards/hidden.png') { return }

    chosenCards.push(event.target)
    flipCard(event, cardIdx);

    if (chosenCards.length === 2) {
        checkCard();
    }

}


function flipCard(event, cardIdx) {
    event.target.setAttribute('src', `cards/${cards[cardIdx]}`)
}

function checkCard() {
    if (chosenCards[0].getAttribute('src') === chosenCards[1].getAttribute('src')) {
        addPoints();
    } else {
        setTimeout(flipback, 2000)
    }

}

function flipback() {
    for (card of chosenCards) {
        card.setAttribute('src', 'cards/hidden.png');
    }
    chosenCards = []
}

function addPoints() {
    let scoreArray = document.getElementById('score').innerText.split(' ');

    if (Number(scoreArray[scoreArray.length - 1]) + 1 == cards.length / 2) {
        document.getElementById('score').innerText = "All Matched, Congratualations!";
    } else {
        scoreArray[scoreArray.length - 1] = String(Number(scoreArray[scoreArray.length - 1]) + 1);
        document.getElementById('score').innerText = scoreArray.join(' ');
    }

    for (card of chosenCards) {
        card.style.opacity = '50%';
    }
    chosenCards = []

}



// Utility Function
// DO NOT MODIFY
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}