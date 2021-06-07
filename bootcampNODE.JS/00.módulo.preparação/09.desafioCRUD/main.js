let employees = [];
let roles = [];
let selectedItem;
const listEl = document.querySelector("ul");
const formEl = document.querySelector("form");
const bDelete = document.getElementById("bDelete");
const bCancel = document.getElementById("bCancel");
const bUpdate = document.getElementById("bUpdate");

async function init() {
  try {
    [employees, roles] = await Promise.all([listEmployees(), listRoles()]);
    renderRoles();
    renderData();
    clearSelected();
    bCancel.addEventListener("click", clearSelected);
    bDelete.addEventListener("click", onDelete);
    formEl.addEventListener("submit", onSubmit);
    bUpdate;
  } catch (error) {
    showError("Error loading data...", error);
  }
}
init();

function selectItem(employee, li) {
  clearSelected();
  selectedItem = employee;
  li.classList.add("selected");
  formEl.name.value = employee.name;
  formEl.salary.valueAsNumber = employee.salary;
  formEl.role_id.value = employee.role_id;
  bDelete.style.display = "inline";
  bCancel.style.display = "inline";
  bUpdate.textContent = "Atualizar";
}

function clearSelected() {
  clearError();
  selectedItem = undefined;
  const li = listEl.querySelector(".selected");
  if (li) {
    li.classList.remove("selected");
  }
  formEl.name.value = "";
  formEl.salary.value = "";
  formEl.role_id.value = "";
  bDelete.style.display = "none";
  bCancel.style.display = "none";
  bUpdate.textContent = "Inserir";
}

async function onSubmit(evt) {
  evt.preventDefault();
  const employeeData = {
    name: formEl.name.value,
    salary: formEl.salary.valueAsNumber,
    role_id: +formEl.role_id.value,
  };
  if (!employeeData.name || !employeeData.salary || !employeeData.role_id) {
    showError("Preencher todos os campos....");
  } else {
    if (selectedItem) {
      const updatedItem = await updateEmployee(selectedItem.id, employeeData);
      const i = employees.indexOf(selectedItem);
      employees[i] = updatedItem;
      renderData();
      selectItem(updatedItem, listEl.children[i]);
    } else {
      const createdItem = await createEmployee(employeeData);
      employees.push(createdItem);
      renderData();
      selectItem(createdItem, listEl.lastChild);
      listEl.lastChild.scrollIntoView();
    }
  }
}

async function onDelete() {
  if (selectedItem) {
    await deleteEmployee(selectedItem.id);
    const i = employees.indexOf(selectedItem);
    employees.splice(i, 1);
    renderData();
    clearSelected();
  }
}
function renderData() {
  listEl.innerHTML = "";
  for (const employee of employees) {
    let role = roles.find((role) => role.id == employee.role_id);
    const li = document.createElement("li");
    const divName = document.createElement("div");
    divName.textContent = employee.name;
    const divRole = document.createElement("div");
    divRole.textContent = role.name;
    li.appendChild(divName);
    li.appendChild(divRole);
    listEl.appendChild(li);
    li.addEventListener("click", () => selectItem(employee, li));
  }
}

function renderRoles() {
  for (const role of roles) {
    const option = document.createElement("option");
    option.textContent = role.name;
    option.value = role.id;
    formEl.role_id.appendChild(option);
  }
}

function showError(msgError, codError) {
  document.getElementById("errorMsg").textContent = msgError;
  if (codError) {
    console.error(codError);
  }
}

function clearError() {
  document.getElementById("errorMsg").textContent = "";
}
