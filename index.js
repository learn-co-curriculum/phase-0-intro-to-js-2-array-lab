let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    // function to append a cat destructively
}

// function to remove the last cat destructively 
function destructivelyRemoveLastCat() {
    cats.pop();  
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    // adds at cat to the beginning
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    // removes the first cat
}

function appendCat(name) {
    return [...cats, name];
    // creates a new array with the new cat added at the end
}

function prependCat(name) {
    return [name, ...cats,];
    // creates a new array with 'name' at the beginning
}

function removeLastCat() {
    return cats.slice(0, -1);
    // returns a new array without the last element
}

function removeFirstCat() {
    return cats.slice(1);
    // returns a new array without modifying the original
}