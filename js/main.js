const data = [
  {
    name: "basic",
    annually: 199.99,
    monthly: 19.99,
  },
  {
    name: "professional",
    annually: 249.99,
    monthly: 24.99,
  },
  {
    name: "master",
    annually: 399.99,
    monthly: 39.99,
  },
];

function annually() {
  var basic = document.querySelector(".basic");
  var proffesional = document.querySelector(".proffesional");
  var master = document.querySelector(".master");

  basic.textContent = data[0].annually;
  proffesional.textContent = data[1].annually;
  master.textContent = data[2].annually;
}

function monthly() {
  var basic = document.querySelector(".basic");
  var proffesional = document.querySelector(".proffesional");
  var master = document.querySelector(".master");

  basic.textContent = data[0].monthly;
  proffesional.textContent = data[1].monthly;
  master.textContent = data[2].monthly;
}

const monthlyPlan = document.querySelector("#toggle");
monthlyPlan.addEventListener("change", (e) => {
  e.currentTarget.checked ? monthly() : annually();
});
