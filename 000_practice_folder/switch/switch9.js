
function animalSounds(animal) {
  switch (animal) {
    case 'dog':
      return 'Woof';
    case 'cat':
      return 'Meow';
    case 'cow':
        return 'Moo';
    case 'duck':
      return 'Quack';
    default:
      return 'Unknown animal';
  }
}

console.log(animalSounds('dog')); // "Woof"
console.log(animalSounds('cat'));
console.log(animalSounds('duck'));
console.log(animalSounds('cow')); // "Unknown animal"
console.log(animalSounds('lion')); // "Unknown animal"