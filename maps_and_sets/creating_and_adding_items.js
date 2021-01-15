let cardAce = {
    name : 'Ace of Spades'
};

let cardKing = {
    name: 'King of Clubs'
};

let deck = new Map();
deck.set('as', cardAce);
deck.set('kc', cardKing);

console.log(deck);
console.log(deck.size);
deck.set('as', cardAce);
console.log(deck.size);
console.log(deck.get('as'));
deck.delete('as');
console.log(deck.get('as'));
deck.set('as', cardAce);
console.log(deck.keys());

for(key of deck.keys()){
    console.log(key);
}

for(value of deck.values()){
    console.log(value);
}

for(entry of deck.entries()){
    console.log(entry);
}
