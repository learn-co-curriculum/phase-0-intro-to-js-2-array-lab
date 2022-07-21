// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
};

function destructivelyPrependCat() {
    cats.unshift("Bob");
};

function destructivelyRemoveLastCat() {
    cats.splice(-1);
};

function destructivelyRemoveFirstCat() {
    cats.splice(0, 1);
};

function appendCat() {
    const copyOfCats = [...cats, "Broom"];

    return copyOfCats;
}

function prependCat() {
    const copyOfCats2 = ["Arnold", ...cats];

    return copyOfCats2;
}

function removeLastCat() {
    let copyOfCats3 = cats.slice(0, cats.length - 1);

    return copyOfCats3
}

function removeFirstCat() {
    let copyOfCats4 = cats.slice(1)

    return copyOfCats4
}