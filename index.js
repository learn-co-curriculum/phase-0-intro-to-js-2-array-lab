// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
  cats.push(name);
  return cats
}

function destructivelyPrependCat(name){
  cats.unshift(name);
  return cats
}

function destructivelyRemoveLastCat(){
  cats.pop();
  return cats
}

function destructivelyRemoveFirstCat(name){
  cats.shift();
  return cats
}

function appendCat(name){
  return [...cats, name]
}

function prependCat(name){
  return [name, ...cats]
}

function removeLastCat(name){
  var newArray = cats.slice(0, cats.length - 1);
  return newArray
}

function removeFirstCat(name){
  var newArray = cats.slice(1);
  return newArray
}