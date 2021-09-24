const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
  cats.push("Ralph");
  return cats
}

function destructivelyPrependCat(name){
  cats.unshift("Bob");
  return cats
}


function destructivelyRemoveLastCat(name){
  cats.pop();
  return cats
}

function destructivelyRemoveFirstCat(name){
    cats.shift();
    return cats
}


function appendCat(name){
    return[...cats, name];
    
}

function prependCat(name){
    return[name , ...cats];
}

function removeLastCat(name){
  const newArray = cats.slice(0, cats.length - 1);
  return newArray
}

function removeFirstCat(name){
  const newArray = cats.slice(1);
  return newArray
}