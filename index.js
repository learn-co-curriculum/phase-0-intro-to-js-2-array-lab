const cats = ["Milo", "Otis", "Garfield"]

const destructivelyAppendCat = (catToAppend) => {
    cats.push(catToAppend)
}

const destructivelyPrependCat = (catToPrepend) => {
    cats.unshift(catToPrepend)
}