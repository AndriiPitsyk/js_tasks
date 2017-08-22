function Animal(breed) {
    this.breed = breed;
    this.bark = function() {
      return 'Animal breed is: ' + this.breed;
    }
}

var animal = new Animal('Husky');
animal.bark();
