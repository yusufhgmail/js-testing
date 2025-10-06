const body = document.body;
const div = document.createElement("div");
body.appendChild(div);

// add p
const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey I'm red!";
div.appendChild(p);

// add h3
const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
div.insertBefore(h3, p);

// add new div
const borderedDiv = document.createElement("div");
borderedDiv.style.cssText = "border: 1px solid black; background-color: pink;";

// add h1 into borderedDiv
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
borderedDiv.appendChild(h1);

// add another p into borderedDiv
const pNew = document.createElement("p");
pNew.textContent = "ME TOO";
borderedDiv.appendChild(pNew);

// Add borderedDiv to doc
body.appendChild(borderedDiv);

//playing with button 2
const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("Clicked me too");

//playing button 3
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", (e) => {
	console.log(e);
	console.log(e.button);
});
