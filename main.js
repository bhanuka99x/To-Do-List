const inputBox = document.getElementById('input-box');
const addButton = document.getElementById('add-button');
const listContainer = document.getElementById('list-container');

addButton.addEventListener('click', () => {
    if(inputBox.value === ''){
        alert('Please enter your note First');
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveList();
});

listContainer.addEventListener('click',(e) =>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('list-item');
        saveList();
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveList();
    }
}, false);

function saveList() {
    localStorage.setItem('data',listContainer.innerHTML);
}

function showList() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showList();