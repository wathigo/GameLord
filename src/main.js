const getBalance = function () {
  document.querySelector("#balance").textContent = 21;
};

function notification(_text) {
  document.querySelector(".alert").style.display = "block";
  document.querySelector("#notification").textContent = _text;
}

function notificationOff() {
  document.querySelector(".alert").style.display = "none";
}

function closeGrid() {
  document.querySelector(".grid").style.display = "none";
}

function uncheck(cls) {
  document.querySelectorAll(cls).forEach((box) => {
    box.removeEventListener("click", check);
  });
}

function check({ target }) {
  target.style.backgroundColor = "#00b612";
  target.style.color = "black";
  const clsName = target.classList.value.split(" ")[1];
  uncheck(`.${clsName}`);
}

function renderGrid() {
  document.querySelector(".grid").style.display = "block";
  const indx = [1, 2, 3];
  indx.forEach((indx) => {
    document.querySelectorAll(`.row-${indx}`).forEach((box) => {
      box.addEventListener("click", check);
    });
  });
  document.querySelector(".closeGrid").addEventListener("click", () => {
    closeGrid();
  });
}

window.addEventListener("load", () => {
  notification("⌛ Loading...");
  getBalance();
  notificationOff();

  document.querySelector(".toggleGrid").addEventListener("click", () => {
    renderGrid();
  });
});
