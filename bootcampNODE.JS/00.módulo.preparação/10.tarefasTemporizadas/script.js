const ul = document.querySelector("ul");
const input = document.querySelector("input");

async function searchEmpoyee(query) {
  if (query) {
    const employees = await fetch(
      `http://localhost:3000/employees?q=${encodeURIComponent(query)}`
    ).then((r) => r.json());
    ul.innerHTML = employees
      .map((employee) => `<li>${employee.name}</li>`)
      .join("");
  } else {
    ul.innerHTML = "";
  }
}

input.addEventListener("input", withDelay(onQueryChange, 500));

function onQueryChange() {
  searchEmpoyee(input.value);
}

function withDelay(fn, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(fn, delay);
  };
}

const relogio = document.getElementById("relogio");
const btn = document.getElementById("btn");
let intervaloRelogio;

function formataHora(date) {
  const h = date.getHours().toString().padStart(2, "0");
  const m = date.getMinutes().toString().padStart(2, "0");
  const s = date.getSeconds().toString().padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function parar() {
  clearInterval(intervaloRelogio);
  intervaloRelogio = undefined;
  relogio.textContent = "";
  btn.textContent = "Iniciar Relógio";
}

function iniciar() {
  intervaloRelogio = setInterval(() => {
    relogio.textContent = formataHora(new Date());
  }, 1000);
  btn.textContent = "Parar Relógio";
}

function iniciaOuPara() {
  if (intervaloRelogio) {
    parar();
  } else {
    iniciar();
  }
}
