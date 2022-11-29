const DOMSelectors = {
  buttonAdd: document.getElementById("add"),
  buttonRmv: document.getElementById("rmv"),
  box: document.getElementById("container-box"),
  input: document.querySelector("#input"),
};
const cat = "meow";
/* DOMSelectors.box.insertAdjacentHTML("afterend", `<h1>We are an ${cat}</h1>`); */
DOMSelectors.buttonAdd.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p> ${input}</p>`);
  DOMSelectors.input.value = "";
});
DOMSelectors.buttonRmv.addEventListener("click", function () {
  DOMSelectors.box.remove();
});
