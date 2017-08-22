const expect = chai.expect;

describe('Arrays', function() {
  describe('kittens', function() {
    it('defines kittens as `var kittens = ["Milo", "Otis", "Garfield"]`', function() {
      expect(kittens).to.include("Milo", "Otis", "Garfield")
    })
  })

  describe('destructivelyAppendKitten(name)', function() {
    it('appends a kitten to the end of the kittens array', function() {
      destructivelyAppendKitten('Ralph')
      expect(kittens).to.include("Milo", "Otis", "Garfield", "Ralph")
    })
  })

  describe('destructivelyPrependKitten(name)', function() {
    it('prepends a kitten to the beginning of the kittens array', function() {
      destructivelyPrependKitten("Bob")

      expect(kittens).to.include("Bob", "Milo", "Otis", "Garfield")
    })
  })

  describe('destructivelyRemoveLastKitten()', function() {
    it('removes the last kitten from the kittens array', function() {
      destructivelyRemoveLastKitten()

      expect(kittens).to.include("Milo", "Otis")
    })
  })

  describe('destructivelyRemoveFirstKitten()', function() {
    it('removes the First kitten from the kittens array', function() {
      destructivelyRemoveFirstKitten()

      expect(kittens).to.include("Otis", "Garfield")
    })
  })

  describe('appendKitten(name)', function() {
    it('appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(appendKitten("Broom")).to.include("Milo", "Otis", "Garfield", "Broom")

      expect(kittens).to.include("Milo", "Otis", "Garfield")
    })
  })

  describe('prependKitten(name)', function() {
    it('prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(prependKitten("Arnold")).to.include("Arnold", "Milo", "Otis", "Garfield")

      expect(kittens).to.include("Milo", "Otis", "Garfield")
    })
  })

  describe('removeLastKitten()', function() {
    it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeLastKitten()).to.include("Milo", "Otis")

      expect(kittens).to.include("Milo", "Otis", "Garfield")
    })
  })

  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeFirstKitten()).to.include("Otis", "Garfield")

      expect(kittens).to.include("Milo", "Otis", "Garfield")
    })
  })

})
