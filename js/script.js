document.addEventListener("DOMContentLoaded", () => {

//card options

const cardArray = [
    {
    name: "blue",
    img: "./img/blue-flower.png"

},
    {
    name: "blue",
    img: "./img/blue-flower.png"

},

    {
    name: "pink",
    img: "./img/pink-flower.png"

},

    {
    name: "pink",
    img: "./img/pink-flower.png"

},

    {
    name: "purple",
    img: "./img/purple-flower.png"

},

    {
    name: "purple",
    img: "./img/purple-flower.png"

},

    {
    name: "orange",
    img: "./img/orange-flower.png"

},
    {
    name: "orange",
    img: "./img/orange-flower.png"

},
    {
    name: "green",
    img: "./img/green-flower.png"

},
    {
    name: "green",
    img: "./img/green-flower.png"

},
    {
    name: "yellow",
    img: "./img/yellow-flower.png"

},
    {
    name: "yellow",
    img: "./img/yellow-flower.png"

}
]

cardArray.sort(() => 0.5 - Math.random())


const grid = document.querySelector(".grid")
const resultDisplay = document.querySelector("#result")
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []


//Creating board

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img")

        card.setAttribute("src", "./img/question-mark.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)

        grid.appendChild(card)
    }
}

//check for match
function checkForMatch() {
    let cards = document.querySelectorAll("img")
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (cardsChosen[0] === cardsChosen[1]) {

        alert("You found a match!!!")

        cards[optionOneId].setAttribute("src", "./img/multi-question.png")
        cards[optionTwoId].setAttribute("src", "./img/multi-question.png")
        cardsWon.push(cardsChosen) 

    } else {

        cards[optionOneId].setAttribute("src", "./img/question-mark.png")
        cards[optionTwoId].setAttribute("src", "./img/question-mark.png") 
        alert("No match there! Keep trying!")
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = "Congratulations! You did it!"
    }
}

//flipping card

function flipCard() {
    let cardId = this.getAttribute("data-id")

    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute("src", cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard ()
});
