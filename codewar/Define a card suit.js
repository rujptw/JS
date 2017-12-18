function defineSuit(card) {
    var xz = card.substr(-1);
    switch(xz){
        case "♣":return "clubs"; break;
        case "♠":return "spades"; break;
        case "♦":return "diamonds"; break;
        case "♥":return "hearts"; break;   
    }
}