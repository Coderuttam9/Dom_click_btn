const button = document.querySelector("button");
const input = document.querySelector("input");
const show = document.querySelector("h2");
console.log(show);

const footName = [];

showFoot = () => {
  let content = "";
  footName.map((item, index) => {
    content += ` <h1> ${index + 1}. ${item}</h1>`;
  });
  show.innerHTML = content;
};

button.onclick = () => {
  footName.reverse().push(input.value);
  showFoot();
};
showFoot();
