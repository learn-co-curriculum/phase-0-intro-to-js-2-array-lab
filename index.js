//array lab 

let cats =["Milo", "Otis", "Garfield"]; 

function destructivelyAppendCat(name){//push adds to end of array
    cats.push(name);
}

function destructivelyPrependCat(name){//unshift adds to beginning of array
    cats.unshift(name); 
}

function destructivelyRemoveLastCat(){//pop removes last element of array
    cats.pop(); 
}

function destructivelyRemoveFirstCat(){//shift removes first element of array
    cats.shift(); 
}
 
function appendCat(name){//takes in name and appends to end of cats array and returns a new array
    return [...cats, name]; 
}

function prependCat(name){//takes in name and prepends to beginning of cats array and returns a new array
    return [name, ...cats]; 
}
 
function removeLastCat(){//removes last cat from cats array and returns a new array, leaving cats unchanged
    return cats.slice(0, cats.length - 1); 
}

function removeFirstCat(){//removes first cat from cats array and returns a new array, leaving cats unchanged
    return cats.slice(1); 
}