'use strict';

// console.log('coucou');

// let name = prompt("Enter your name please");
// console.log(name);

// const hello = `Bonjour ${name} !`;

// console.log(hello);

document.getElementById('button').addEventListener('click', function () {
	document.getElementById('receiver').innerHTML = 'Bonjour '.concat(document.getElementById('Submit').value);

	if (document.getElementById('Submit').value == '') {
		document.getElementById('receiver').innerHTML = 'Bonjour Pere Noël';
	}
});
