let timer = document.getElementById('timer');

function countdown() {
	let intervalId = setInterval(() => {
		timer.textContent--;
		if (timer.textContent == 0) {
			alert('Вы победили в конкурсе!');
			clearInterval(intervalId);
		}
	}, 1000);
}
countdown()