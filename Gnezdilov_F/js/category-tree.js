tree = document.getElementById('tree');
liTree = tree.querySelectorAll('li');
for(let i = 0; i< liTree.length; i++){
    let span = document.createElement('span');
    span.classList.add('show');
    console.log();
    liTree[i].prepend(span);
    if (i !== 0) 
        liTree[i].parentNode.hidden = true;
    span.append(span.nextSibling);
}


rightRow = document.createElement('i');
rightRow.className = 'icon-right-open';

downRow = document.createElement('i');
downRow.className = 'icon-down-open';

tree.onclick = (event)=>{
    if(event.target.tagName != 'SPAN') return;
    
    let childrenContainer = event.target.parentNode.querySelector('ul');
    console.log(childrenContainer.hidden);
    
    if(!childrenContainer) return;
    
    childrenContainer.hidden = !childrenContainer.hidden;
    
    if(childrenContainer.hidden){
        event.target.prepend(rightRow);
        event.target.removeChild(downRow);
    }
    else{
        event.target.prepend(downRow);
        event.target.removeChild(rightRow);
    }

    if(childrenContainer.hidden){
        event.target.classList.add('hide');
        event.target.classList.remove('show');
    }
    else{
        event.target.classList.add('show');
        event.target.classList.remove('hide');
    }
    
    

}