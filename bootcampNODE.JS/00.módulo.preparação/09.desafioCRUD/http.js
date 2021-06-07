function fetchJson(url, option) {
  return fetch(url, option)
    .then((r) => {
      if (r.ok) {
        return r.json();
      } else {
        throw new Error(r.statusText);
      }
    })
    .catch((error) => {
      showError("Error loading data...", error);
      throw error;
    });
}

function listEmployees() {
  return fetchJson("http://localhost:3000/employees");
}

function listRoles() {
  return fetchJson("http://localhost:3000/roles");
}

function updateEmployee(id, employee) {
  // Atualizar
  return fetchJson(`http://localhost:3000/employees/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
}

function createEmployee(employee) {
  // Criar
  return fetchJson(`http://localhost:3000/employees`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
}

function deleteEmployee(id) {
  // Excluir
  return fetch(`http://localhost:3000/employees/${id}`, {
    method: "DELETE",
  });
}
