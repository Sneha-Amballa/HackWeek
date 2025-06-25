const form = document.getElementById("expense-form");
const categoryInput = document.getElementById("category");
const amountInput = document.getElementById("amount");

const data = {};
let chart;

function updateChart() {
  if (chart) chart.destroy();

  const ctx = document.getElementById("expenseChart").getContext("2d");
  chart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: Object.keys(data),
      datasets: [{
        data: Object.values(data),
        backgroundColor: ["#f39c12", "#e74c3c", "#2ecc71", "#9b59b6", "#3498db"]
      }]
    }
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const category = categoryInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (!category || isNaN(amount) || amount <= 0) return;

  if (data[category]) {
    data[category] += amount;
  } else {
    data[category] = amount;
  }

  categoryInput.value = "";
  amountInput.value = "";

  updateChart();
});
