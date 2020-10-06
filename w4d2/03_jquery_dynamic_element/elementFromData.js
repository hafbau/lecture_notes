// TODO: 
// - Append the pets to the section
// 

const pets = [
  {
  	name: 'Dingo',
    type: 'dog',
    age: 1
  },
  {
  	name: 'Kongo',
    type: 'snake',
    age: 3
  },
  {
  	name: 'Meowngo',
    type: 'cat',
    age: 2
  },
  {
  	name: 'Bongo',
    type: 'quokka',
    age: 2
  }
]

const $container = $('#pets-container');

{/* <article>
  Dingo is a dog and is 1 year old
</article> */}

const createPetEl = (petData) => {
  return `
  <article class='pet'>
    ${petData.name} is a ${petData.type} and is ${petData.age} year old
  </article>`

}

const Dingo = {
  name: 'Dingo',
  type: 'dog',
  age: 1
}

pets.forEach(pet => {
  $container.append(createPetEl(pet))
})