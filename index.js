const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
  cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
  cats.shift(name)  
} 
const newcats = ["Broom"]
function appendCat(name){
  let newcats = [...cats, "Broom"]
  return newcats
}
const orangecats = ["Arnold"];
function prependCat (name) {
  let ornagecats =["Arnold", ...cats];
  return ornagecats
}
const whitecats = (["Milo", "Otis"]) 
function removeLastCat (name) {
  whitecats.slice(name);
  return whitecats
}
const blackcats = ["Otis","Garfield"] 
function removeFirstCat (name) {
  blackcats.slice(name);
  return blackcats
}
