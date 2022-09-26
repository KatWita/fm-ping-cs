const btn = document.querySelector('.notify-btn');
const input = document.querySelector('#email');
const error = document.querySelector('.error');

const checkMail = () => {
	const reg =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	if (reg.test(input.value)) {
		error.style.display = 'none';
		email.style.border = '';
	} else {
		error.style.display = 'block';
		email.style.border = '1px solid hsl(354, 100%, 66%)';
	}
};

btn.addEventListener('click', checkMail);
