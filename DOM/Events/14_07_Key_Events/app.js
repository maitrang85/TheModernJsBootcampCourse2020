const input = document.querySelector('#username');

input.addEventListener('keydown', function(e) {
	console.log('KEY DOWN!');
});

input.addEventListener('keyup', function(e) {
	console.log('KEY UP!');
});

input.addEventListener('keypress', function(e) {
	console.log('KEY PRESS!');
});

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		if (!this.value) return; //if input is empty, skip everything
		//add a new item to list
		const newItemText = this.value;
		const newItem = document.createElement('li');
		newItem.innerText = newItemText;
		itemsUL.appendChild(newItem);
		this.value = '';
	}
});


// TRANG PRACTICE 
const log = document.getElementById('log');

document.addEventListener('keypress', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}

document.addEventListener('keydown', event => {
	console.log('keydown:', event.key, event.keyCode);
	if (event.keyCode === 13) {
	  console.log('You hit enter!');
	}
  });

  