const newTextInput = document.getElementById('inputText');
const addButton = document.getElementById('addButton');
const myError = document.getElementById('myError');

addButton.addEventListener('click', function () {
  const newText = newTextInput.value.trim();
  if (newText === '') {
    myError.style.color = 'red';
    myError.textContent = 'Du måste skriva in 12 siffror';
  } else {
    myError.textContent = '';
    addInputText(newText);
    newTextInput.value = '';
  }
});


  function addInputText(addText) {
    const listItem = document.createElement('li');
    listItem.textContent = addText;

    const listButton = document.createElement('button');
    listButton.textContent = 'Ta bort';
    listItem.appendChild(listButton);

    myList.appendChild(listItem);
    listButton.addEventListener('click', () => {
      myList.removeChild(listItem);
    });
  }