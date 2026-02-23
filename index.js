const cats = ["Milo", "Otis", "Garfield"]
global.cats = cats
function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}
function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
  return cats.slice(1);
}

global.cats = cats;

global.destructivelyAppendCat = destructivelyAppendCat;
global.destructivelyPrependCat = destructivelyPrependCat;
global.destructivelyRemoveLastCat = destructivelyRemoveLastCat;
global.destructivelyRemoveFirstCat = destructivelyRemoveFirstCat;

global.appendCat = appendCat;
global.prependCat = prependCat;
global.removeLastCat = removeLastCat;
global.removeFirstCat = removeFirstCat;

