function soluction01() {
  let employeesPromisse = fetch("http://localhost:3000/employees");
  employeesPromisse.then((employeesResp) => {
    employeesResp.json().then((employeesArray) => {
      //console.log("Array Carregado com Sucesso;");
      //console.log(employessArray);
      let rolesPromisse = fetch("http://localhost:3000/roles");
      rolesPromisse.then((rolesResp) => {
        rolesResp.json().then((rolesArray) => {
          let employessTable = renderEmployess(employeesArray, rolesArray);
          document.getElementById("employeesList").innerHTML = employessTable;
        });
      });
    });
  });
}
//soluction01();

function soluction02() {
  fetchJson("http://localhost:3000/employees")
    .then((employeesArray) => {
      fetchJson("http://localhost:3000/roles")
        .then((rolesArray) => {
          let employessTable = renderEmployess(employeesArray, rolesArray);
          document.getElementById("employeesList").innerHTML = employessTable;
        })
        .catch(showError());
    })
    .catch(showError());
}
//soluction02();

function soluction03() {
  Promise.all([
    fetchJson("http://localhost:3000/employees"),
    fetchJson("http://localhost:3000/roles"),
  ])
    .then(([employeesArray, rolesArray]) => {
      let employessTable = renderEmployess(employeesArray, rolesArray);
      document.getElementById("employeesList").innerHTML = employessTable;
    })
    .catch(showError())
    .finally(console.log("Executado de qualquer jeito..."));
}
soluction03();

async function soluction04() {
  try {
    let employeesArray = await fetchJson("http://localhost:3000/employees");
    let rolesArray = await fetchJson("http://localhost:3000/roles");
    let employessTable = renderEmployess(employeesArray, rolesArray);
    document.getElementById("employeesList").innerHTML = employessTable;
  } catch (errorMsg) {
    showError(errorMsg);
  }
}
//soluction04();

async function soluction05() {
  try {
    let [employeesArray, rolesArray] = await Promise.all([
      fetchJson("http://localhost:3000/employees"),
      fetchJson("http://localhost:3000/roles"),
    ]);
    let employessTable = renderEmployess(employeesArray, rolesArray);
    document.getElementById("employeesList").innerHTML = employessTable;
  } catch (errorMsg) {
    showError(errorMsg);
  } finally {
    //Executa independente se passou pelo Try ou pelo Catch
  }
}
//soluction05();

function fetchJson(url) {
  return fetch(url).then((Resp) => {
    if (Resp.ok) {
      return Resp.json();
    } else {
      throw new Error(Resp.statusText);
    }
  });
}

function renderEmployess(employeesArray, rolesArray) {
  let rows = employeesArray.map((employee) => {
    let role = rolesArray.find((role) => role.id == employee.role_id);
    return `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td></tr>`;
  });
  return `
    <table>
        <thead>
            <th>Id.</th>
            <th>Nome</th>
            <th>Cargo</th>
        </thead>
        <tbody>
            ${rows.join("")}
        </tbody>
    </table>`;
}

function showError(errorMsg) {
  document.getElementById(
    "employeesList"
  ).innerHTML = `<p>Erro ao carregar os dados...<br>${errorMsg}</p>`;
}
