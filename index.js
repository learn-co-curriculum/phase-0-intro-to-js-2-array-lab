// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    let newCats = cats.slice()
    newCats.push(name)
    return newCats
}

function prependCat(name) {
    let newCats = cats.slice()
    newCats.unshift(name)
    return newCats
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function removeLastCat() {
    let newCats = cats.slice()
    newCats.pop()
    return newCats
}

function removeFirstCat() {
    let newCats = cats.slice()
    newCats.shift()
    return newCats
}