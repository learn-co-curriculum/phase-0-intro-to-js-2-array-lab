// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function arrayCats() {
  return cats;
}
function arrayFunctions() {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
}

function destructivelyAppendCat() {
  cats.push("Ralph");
}

function destructivelyPrependCat() {
  cats.unshift("Bob");
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function appendCat(name) {
  cats.splice(3, 0, "Broom");
}
function appendCat(name) {
  const appendedcats = [...cats, name];
  return appendedcats;
}

function prependCat(name) {
  cats.splice(0, 0, "Arnold");
}
function prependCat(name) {
  const prependedcats = [name, ...cats];
  return prependedcats;
}

function removeLastCat() {
  const removedLastcat = cats.slice(0, -1);
  return removedLastcat;
}

function removeFirstCat() {
  const removedfirstcat = cats.slice(1);
  return removedfirstcat;
}
