const selectBtn = document.querySelector(".buttonSelect");
const select = document.querySelector("#dropdown");
const options = document.querySelectorAll(".option");
const selectLabel = document.querySelector("#select-label");
const filterButton = document.querySelector(".filterBtn");
const resetButton = document.querySelector(".resetBtn");

selectBtn.addEventListener("click", function (e) {
  e.preventDefault();
  toggleHidden();
});

function toggleHidden() {
  select.classList.toggle("hidden");
}

let selectedOption = "profession";

options.forEach(function (option) {
  option.addEventListener("click", function (e) {
    setSelectTitle(e);
  });
});

function setSelectTitle(e) {
  const element = document.querySelector(`label[for="${e.target.id}"]`);
  const labelElement = element.innerHTML;
  selectLabel.innerText = labelElement;
  selectedOption = element.id;
  toggleHidden();
}

filterButton.addEventListener("click", () => {
  if (selectedOption === "profession") {
    alert("Please select a profession.");
  } else {
    let tmpData = data.filter((item) => item.profession === selectedOption);
    displayOutput(tmpData);
  }
});

resetButton.addEventListener("click", () => {
  selectLabel.innerText = "Profession";
  selectedOption = "profession";
  displayOutput(data);
});

//-----------
let data = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

const outputDiv = document.querySelector(".res");
// Display function
function displayOutput(arr) {
  outputDiv.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    createResultDiv(arr[i]);
  }
}

displayOutput(data);
function createResultDiv(item) {
  let resDiv = document.createElement("div");
  let pId = document.createElement("p");
  let pName = document.createElement("p");
  let pPro = document.createElement("p");
  let pAge = document.createElement("p");

  resDiv.className = "res-item";
  pId.textContent = item.id;

  pName.textContent = "Name: " + item.name;
  pAge.textContent = "Age: " + item.age;
  pPro.textContent = "Profession: " + item.profession;
  resDiv.appendChild(pId);
  resDiv.appendChild(pName);
  resDiv.appendChild(pPro);
  resDiv.appendChild(pAge);

  outputDiv.appendChild(resDiv);
}

// Added New User

const inputNameElement = document.getElementById("name");
const inputProfessionElement = document.getElementById("profession");
const inputAgeElement = document.getElementById("age");

const addButton = document.querySelector(".addBtn");

inputNameElement.addEventListener("change", function () {
  let enteredValue = inputNameElement.value;

  inputNameElement.value = enteredValue;
});
inputProfessionElement.addEventListener("change", function () {
  let enteredValue = inputProfessionElement.value;

  inputProfessionElement.value = enteredValue;
});
inputAgeElement.addEventListener("change", function () {
  let enteredValue = inputAgeElement.value;

  inputAgeElement.value = enteredValue;
});

let id = 4;
addButton.addEventListener("click", () => {
  addUser(
    id++,
    inputNameElement.value,
    inputProfessionElement.value,
    inputAgeElement.value
  );
});

function addUser(id, name, profession, age) {
  profession = profession.toLowerCase();
  name = name.toLowerCase();

  if (profession === "developer" || profession === "admin") {
    const obj = { id: id, name: name, age: age, profession: profession };

    data.push(obj);
    displayOutput(data);
  } else {
    alert("Please enter correct profession.");
  }
}
