// const messagesWithDets = [
//   { author: 'Austin', text: 'Yo peeps!' },
//   // { 'Austin': 'Yo peeps!' },
//   { author: 'Lucy', text: 'Yo gal!' },
//   { author: 'Hafiz', text: 'Yo nofn!' },

// ]

// CREATE, LOOKUP, ADD, UPDATE
// const emptyObj = { password: 'true pass' }
// emptyObj['password']
// emptyObj.password = 'password123';
// emptyObj['password'] = 'securePassword'

// // this CANNOT exist; keys are unique in objects
// { password: 'jkhsdkj', password: 'jasjbsd'}

// const msg1 = messagesWithDets[1]

// console.log('msg1.author', msg1.author)
// console.log('msg1[text]', msg1['text'])

// const keys = ['text', 'author']

// for (let key of keys) {
//   console.log('msg1[key]', msg1[key])
//   console.log('msg1[key]', msg1.key)
// }

// METHODS
const animal = {
  name: 'Bobby',
  type: 'Cat',
  speak: function() {
    return this.name
    // return animal['name']
  }
}


// console.log(animal.speak());

const suspense = function() {
  console.log('wait....');
  // I'm cheating here using an arrow function
  setTimeout(() => console.log(this.name, 'says BOOO'), 1000)
  // this would not work as the above worked in class, because `this` is not what we think it is.
  // setTimeout(function() { console.log(this.name, 'says BOOO'), 1000)
}

animal.suspense = suspense

animal['suspense']()
// arr = [1, 2, 4]
// console.log("arr['first']", arr['first']) // undefined

// function first () { console.log(this[0]);}
// arr['first'] = function first() {
//   console.log(this[0]);
// }
// arr.first()

// console.log('arr', arr);