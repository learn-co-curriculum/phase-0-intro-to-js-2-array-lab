let cats = [ "Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name)
}


function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function  destructivelyRemoveLastCat(name){
    return cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    return cats.shift(name)
}
function appendCat(name){
    return cats.concat(name)
}

function prependCat(name){
    return [name, ...cats ];
}

console.log(prependCat("Arnold"))

function  removeLastCat(name){
    return cats.slice(0,2)
    
}
 function  removeFirstCat(name){
    return cats.slice(1)
 }
 console.log(removeFirstCat("Arnold"))
