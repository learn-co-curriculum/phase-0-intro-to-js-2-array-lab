const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph");
};

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
};

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

function appendCat(name) {
    const newcatarray = [...cats, "Broom"]
    return newcatarray;
}

function prependCat(name) {
    const anothercatarray = ["Arnold", ...cats]
    return anothercatarray;
}

function removeLastCat(name) {
    const moreCats = cats.slice(0,-1)
    return moreCats;
}

function removeFirstCat(name) {
    const catsAgain = cats.slice(1);
    return catsAgain;
}