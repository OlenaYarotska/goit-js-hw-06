const liItems = document.querySelectorAll(".item");

console.log(`Number of categories: ${liItems.length} `);

liItems.forEach((item) =>
    console.log(`Category: ${item.firstElementChild.textContent}
    Elements: ${item.lastElementChild.children.length}`));
