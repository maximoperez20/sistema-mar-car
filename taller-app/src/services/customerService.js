/**
 * Servicio para comunicar el frontendo con backend.
 */

//Devuelve todos los customers
export async function getAllCustomers() {
  const response = await fetch("http://localhost:5000/customers");
  return await response.json();
}

//create customer
export async function createCustomer(params) {
  const response = await fetch("http://localhost:5000/customers/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: params,
  });
  return response;
}

// FIND CUSTOMER BY NAME
export async function findCustomerByName(params) {
  console.log("customerService sending:", params);
  const response = await fetch(
    "http://localhost:5000/customers/search-name/" + params
  );
  return await response.json();
}
// FIND CUSTOMER BY DOMINIO
export async function findCustomerByDominio(params) {
  console.log("customerService sending:", params);
  const response = await fetch(
    "http://localhost:5000/customers/search-dominio/" + params
  );
  return await response.json();
}

// DELETE FIND ONE
export async function deleteACustomer(params) {
  console.log("customerServ dice:", params);
  const response = await fetch(
    "http://localhost:5000/customers/delete/" + params,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
}

//ADD A WORK TO THE WORKS ARRAY OF THE CUSTOMER
export async function addWork(params) {
  const response = await fetch("http://localhost:5000/works/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: params,
  });
  return await response;
}

// UPDATE A CUSTOMER
export async function uptadeCustomer(params) {
  const response = await fetch("http://localhost:5000/customers/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: params,
  });
  return response;
}

//GET ALL WORKS OF A CUSTOMER
export async function getAllWorksByCustomerId(params) {
  const response = await fetch(
    "http://localhost:5000/customers/getworks/" + params
  );
  return await response.json();
}

export async function downloadBackupFile(params) {
  const response = await fetch("http://localhost:5000/downloads/backup/");
  return await response.json();
}
