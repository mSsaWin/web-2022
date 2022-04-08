tree = document.getElementById('tree');
liTree = tree.querySelectorAll('li');

let span = document.createElement('span');
span.classList.add('start-hide-category');
liTree[0].prepend(span);
span.append(span.nextSibling);

for (let i = 1; i < liTree.length; i++) {
    let span = document.createElement('span');
    if (liTree[i].parentNode.querySelector('ul'))
        span.classList.add('start-hide-category');
    liTree[i].prepend(span);
    liTree[i].parentNode.hidden = true;
    span.append(span.nextSibling);
}

tree.onclick = (event) => {
    if (event.target.tagName != 'SPAN') return;

    let childrenContainer = event.target.parentNode.querySelector('ul');

    if (!childrenContainer) return;

    childrenContainer.hidden = !childrenContainer.hidden;

    if (childrenContainer.hidden) {
        event.target.style.fontWeight = 'normal';
        event.target.classList.add('start-hide-category');
        event.target.classList.remove('start-show-category');
    } else {
        event.target.style.fontWeight = 'bold';
        event.target.classList.add('start-show-category');
        event.target.classList.remove('start-hide-category');
    }
}