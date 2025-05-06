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

const removeLastCat = () => {
    return cats.slice(0, -1)
}

const removeFirstCat = () => {
    return cats.slice(1)
}