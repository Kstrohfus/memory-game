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
    img: "./img/blue-flower.png"

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

const grid = document.querySelector(".grid")
var cardsChosen = []
var cardsChosenId = []


//Creating board

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement("img")

        card.setAttribute("src", "./img/question-mark.png")
        card.setAttribute("data-id", i)

        //card.addEventListener("click", flipCard)

        grid.appendChild(card)
    }
}

createBoard()

//check for match
function checkForMatch() {
    var vards = document.querySelectorAll
}

//flipping card
function flipCard() {
    var cardId = this.getAttribute("data-id")


    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute("src", cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}





});
