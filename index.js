const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat() {
  cats.push('Ralph')
} 

function destructivelyPrependCat() {
  cats.unshift('Bob')
}

function destructivelyRemoveLastCat() {
  cats.pop()
}

function destructivelyRemoveFirstCat() {
  cats.shift()
}

function appendCat(name) {
  const newCatList = [...cats, name]
  return newCatList
}

function prependCat(name) {
  const anotherNewCatList = [name, ...cats]
  return anotherNewCatList
}

function removeLastCat() {
  const thirdNewCatList = cats.slice (0, cats.length - 1)
  return thirdNewCatList
}

function removeFirstCat() {
  const fourthNewCatList = cats.slice (1, cats.length)
  return fourthNewCatList
}
