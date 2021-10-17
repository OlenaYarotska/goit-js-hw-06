const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const recipe = ingredients.forEach((ingredient) => {
  const items = document.createElement('li')
  items.textContent = ingredient
  list.appendChild(items)
});
console.log(list)
  
  
  












































  ;