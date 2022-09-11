const categoryEl = document.querySelector('#categories');
console.log(`Number of categories: ${categoryEl.children.length}`);

const itemRef = document.querySelectorAll('.item')

itemRef.forEach(item => {
    const headEl = item.querySelector('h2');
    const liEl = item.querySelectorAll('li')
    console.log(`Category: ${headEl.textContent}`);
    console.log(`Elements: ${liEl.length}`);
})


