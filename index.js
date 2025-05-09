const cats = ["Milo", "Otis", "Garfield"];

destructivelyAppendCat = (name) => cats.push(name);

destructivelyPrependCat = (name) => cats.unshift(name);

destructivelyRemoveLastCat = (name) => cats.pop(name);

destructivelyRemoveFirstCat = (name) => cats.shift(name);

function appendCat(name) {
  let copyOfAppendCat;
  return (copyOfAppendCat = [...cats, name]);
}

function prependCat(name) {
  let copyOfPrependCat;
  return (copyOfPrependCat = [name, ...cats]);
}

function removeLastCat() {
  let copyOfRemoveLastCat;
  return (copyOfRemoveLastCat = cats.slice(0, cats.length - 1));
}

function removeFirstCat() {
  let copyOfRemoveFirstCat;
  return (copyOfRemoveFirstCat = cats.slice(1));
}
