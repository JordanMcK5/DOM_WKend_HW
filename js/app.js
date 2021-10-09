document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);
  
    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
  })
  
  const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
  
    const wrestlerListItem = createWrestlerListItem(event.target);
    const wrestlerList = document.querySelector('#wrestler-list');
    wrestlerList.appendChild(wrestlerListItem);
  
    event.target.reset();
  }
  
  const createWrestlerListItem = function (form) {
    const wrestlerListItem = document.createElement('li');
    wrestlerListItem.classList.add('wrestler-list-item');
  
    const wrestler = document.createElement('h2');
    wrestler.textContent = form.wrestler.value;
    wrestlerListItem.appendChild(wrestler);
  
    const nickname = document.createElement('h3');
    nickname.textContent = form.nickname.value;
    wrestlerListItem.appendChild(nickname);
  
    const finisher = document.createElement('p');
    finisher.textContent = form.finisher.value;
    wrestlerListItem.appendChild(finisher);
  
    return wrestlerListItem;
  }
  
  const handleDeleteAllClick = function (event) {
    const wrestlerList = document.querySelector('#wrestler-list');
    wrestlerList.innerHTML = '';
  }