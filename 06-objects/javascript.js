function isEmpty(obj) {
	return Object.keys(obj).length === 0;
}

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

function sumSalaries(obj) {
	let salaries = 0;
	for (let key in obj) {
		salaries += obj[key];
	}
	return salaries;
}

const div = document.createElement("div");
div.textContent = sumSalaries(salaries);
document.body.appendChild(div);
