const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey I’m red!";

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I’m a blue h3!";

const div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.borderColor = "black";

const h1 = document.createElement("h1");
h1.textContent = "I’m in a div";
const p_2 = document.createElement("p");
p_2.textContent = "ME TOO!";

document.body.appendChild(p);
document.body.appendChild(h3);
div.appendChild(h1);
div.appendChild(p_2);
document.body.append(div);
