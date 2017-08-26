const expect = chai.expect;

describe('Arrays', function() {
  beforeEach(() => {
    kittens = ['Milo', 'Otis', 'Garfield'];
  })

  describe('kittens', function() {
    it('defines kittens as `var kittens = ["Milo", "Otis", "Garfield"]`', function() {
      expect(kittens).to.have.ordered.members(["Milo", "Otis", "Garfield"])
    })
  })

  describe('destructivelyAppendKitten(name)', function() {
    it('appends a kitten to the end of the kittens array', function() {
      destructivelyAppendKitten('Ralph')
      expect(kittens).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"])
    })
  })

  describe('destructivelyPrependKitten(name)', function() {
    it('prepends a kitten to the beginning of the kittens array', function() {
      destructivelyPrependKitten("Bob")

      expect(kittens).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"])
    })
  })

  describe('destructivelyRemoveLastKitten()', function() {
    it('removes the last kitten from the kittens array', function() {
      destructivelyRemoveLastKitten()

      expect(kittens).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield')
    })
  })

  describe('destructivelyRemoveFirstKitten()', function() {
    it('removes the First kitten from the kittens array', function() {
      destructivelyRemoveFirstKitten()

      expect(kittens).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo')
    })
  })

  describe('appendKitten(name)', function() {
    it('appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(appendKitten("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"])

      expect(kittens).to.have.ordered.members(["Milo", "Otis", "Garfield"])
    })
  })

  describe('prependKitten(name)', function() {
    it('prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(prependKitten("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"])

      expect(kittens).to.have.ordered.members(["Milo", "Otis", "Garfield"])
    })
  })

  describe('removeLastKitten()', function() {
    it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeLastKitten()).to.have.ordered.members(["Milo", "Otis"])

      expect(kittens).to.have.ordered.members(["Milo", "Otis", "Garfield"])
    })
  })

  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeFirstKitten()).to.have.ordered.members(["Otis", "Garfield"])

      expect(kittens).to.have.ordered.members(["Milo", "Otis", "Garfield"])
    })
  })

})
