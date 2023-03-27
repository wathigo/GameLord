let score = 0;

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
  target.dataset.val = Math.floor(Math.random() * 2);
  uncheck(`.${clsName}`);
}

function checkScore() {
  document.querySelectorAll(".box").forEach((bx) => {
    if (bx.style.color !== "black") {
      setTimeout(() => {
        bx.style.borderColor = "red";
      }, 1);
    } else {
      score = parseInt(score) + parseInt(bx.dataset.val);
      bx.innerHTML = `${bx.dataset.val} won!`;
    }
  });
}

function renderGrid() {
  document.querySelector(".grid").style.display = "block";
  const indx = [1, 2, 3];
  document.querySelector("#result").addEventListener("click", () => {
    checkScore();
  });
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
