var pricingToggle = document.querySelector("#pricing");
var annuallyPrice = document.querySelectorAll(".annually");
var monthlyPrice = document.querySelectorAll(".monthly");

pricingToggle.addEventListener("change", (e) => {
  if (e.currentTarget.checked) {
    annuallyPrice.forEach((item) => item.setAttribute("hidden", true));
    monthlyPrice.forEach((item) => item.removeAttribute("hidden"));
  } else {
    monthlyPrice.forEach((item) => item.setAttribute("hidden", true));
    annuallyPrice.forEach((item) => item.removeAttribute("hidden"));
  }
});
