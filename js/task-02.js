const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

const newItem = (item) => {
  const element = document.createElement('li');
  element.textContent = item;
  return element;
}
  
const createList = ingredients.map(newItem);

list.append(...createList);
  












































  ;