let cardAce= {
    name : 'Ace of Spades'
};

let cardKing = {
    name : 'King of Clubs'
};

let deck = new Map();
deck.set('as', cardAce);
deck.set('kc', cardKing);

for(let entry of deck)
{
    console.log(entry);
}