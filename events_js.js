// HW 1

document.addEventListener('keydown', function(event) {
	let span = document.getElementById("span");
	let input = document.getElementById("input");
	if(event.code == 'KeyA' && event.altKey) {
		span.style.display = 'none';
		input.style.display = 'block';
	};
	if(event.code == 'KeyS' && event.shiftKey) {
		span.innerHTML = input.value;
		span.style.display = 'block';
		input.style.display = 'none';
	}
});

// HW 2

window.addEventListener('resize', function() {
	let p = document.querySelector('#window-width');
	if(window.innerWidth < 600) {
		p.innerHTML = 'You use the mobile version of the page';
	}
	
	else {
		p.innerHTML = 'You use the desktop version of the page';
	}

})
console.log(window)

// HW 3

document.addEventListener('change', function(event) {
		alert(`${document.getElementById("task3").value}`);
	}
)

// HW 4__________________________________________________________

document.addEventListener('keydown', function(event) {
	let modal = document.getElementById("myModal");
	if(event.code == 'KeyO' && event.altKey) {
		modal.style.display = 'block';
		};
	if(event.code == 'KeyC' && event.altKey) {
		modal.style.display = 'none';
	}
});