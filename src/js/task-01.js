const liItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItems.length} `);
const categories = [...liItems].map(categories =>
    `Category: ${categories.children[0].textContent}
    Elements: ${categories.children[1].children.length}`
).join("\n");
console.log(categories);

