const Input = document.getElementById("zkah");
const Result = document.querySelector("span");

Input.addEventListener("input", () => {
  let val = Number(Input.value).toFixed(2);

  let Percent = (val * 0.025).toFixed(2);
  Result.textContent = `$${Percent} From $${val}`;
});
