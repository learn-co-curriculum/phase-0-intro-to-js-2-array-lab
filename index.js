const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
  return cats.push("Ralph");
}
function destructivelyPrependCat(){
  return cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
  return cats.pop();
}
function destructivelyRemoveFirstCat(){
  return cats.shift();
}
function appendCat(name){
  let newCats;
  return newCats = [...cats, name]
}
function prependCat(name){
  let moreNewCats;
  return moreNewCats = [name, ...cats];
}
function removeLastCat(){
  let evenMoreNewCats;
  return evenMoreNewCats = cats.slice(0,2);
}
function removeFirstCat(){
  let cat
  return cat = cats.slice(1);
}
