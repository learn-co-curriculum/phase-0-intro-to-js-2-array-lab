const cats = [
    "Milo", "Otis", "Garfield"
]

function  destructivelyAppendCat(name) { 
cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function  destructivelyRemoveLastCat(name) {
    cats.pop()
}

function destructivelyRemoveFirstCat(name) {
    cats.shift()
}

function  appendCat(name) {
    const copyCat = [...cats, name]
    return copyCat
}

function prependCat(name) {
    const copyCat = [name, ...cats]
    return copyCat
}
function removeLastCat(name) {
    const copyCats = [...cats,]
    copyCats.pop()
    return copyCats
}
function removeFirstCat(name) {
    const copyCat = [...cats]
    copyCat.shift()
    return copyCat
}// Write your solution here!
