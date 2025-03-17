// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    return cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name)
}
function appendCat(name) {
    return cats.concat(name)
}

function prependCat(name) {
    return [name, ...cats];
}

console.log(prependCat("Arnold"))