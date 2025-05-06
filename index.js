const cats = ["Milo", "Otis", "Garfield"]

const destructivelyAppendCat = (catToAppend) => {
    cats.push(catToAppend)
}

const destructivelyPrependCat = (catToPrepend) => {
    cats.unshift(catToPrepend)
}

const destructivelyRemoveLastCat = () => {
    cats.pop();
}

const destructivelyRemoveFirstCat = () => {
    cats.shift();
}

const appendCat = (catToAppend) => {
    return [...cats, catToAppend]
}

const prependCat = (catToPrepend) => {
    return [catToPrepend, ...cats]
}