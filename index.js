// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}

cats = ["Milo", "Otis", "Garfield"];

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

cats = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveLastCat(name){
    return cats.pop(name);
}

cats = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
}

cats = ["Milo", "Otis", "Garfield"];

function appendCat(name){
    return [...cats,name];
}

function prependCat(name){
    return [name,...cats];
}

function removeLastCat(name){
    return cats.slice(0,-1);
}

function removeFirstCat(name){
    return cats.slice(1);
}