tree = document.getElementById('tree');
console.log(tree);
for (let li of tree.querySelectorAll('li')) {
    
    let span = document.createElement('span');
    span.classList.add('show');
    li.prepend(span);
    li.parentNode.hiden = true;
    span.append(span.nextSibling);

}

tree.onclick = (event)=>{
    console.log(event.target.tagName);
    console.log(event.target.parentNode);
    if(event.target.tagName != 'SPAN') return;

    let childrenContainer = event.target.parentNode.querySelector('ul');
    console.log(childrenContainer);
    if(!childrenContainer) return;
    
    childrenContainer.hidden = !childrenContainer.hidden;
    // if (childrenContainer.querySelector('a').length == 0){
    //     if(childrenContainer.hidden){
    //         event.target.classList.add('hide');
    //         event.target.classList.remove('show');
    //     }
    //     else{
    //         event.target.classList.add('show');
    //         event.target.classList.remove('hide');
    //     }
    // }
    

}