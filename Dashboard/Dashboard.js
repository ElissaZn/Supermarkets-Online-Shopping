const xValues = ["Shippings", "Refunds", "Order", "Income"];
const yValues = [48, 22, 19, 11];
const barColors = [
  "#0AAD0A",
  "#FFC107",
  "#DB3030",
  "#016BF8"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
    }
  }
});

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('signup') && urlParams.get('signup') === 'success') {
        alert('Signup successful! You can now login.');
    }
};