let chart;

function evaluateQuiz() {
  const totalQuestions = 3;
  const results = [];
  let score = 0;

  for (let i = 1; i <= totalQuestions; i++) {
    const answer = document.querySelector(`input[name="q${i}"]:checked`);
    const value = answer ? parseInt(answer.value) : 0;
    results.push(value);
    score += value;
  }

  const percentage = (score / totalQuestions) * 100;
  document.getElementById("result").innerHTML =
    `<h3>Tu puntuación: ${score}/${totalQuestions} (${percentage}%)</h3>`;

  renderChart(results);
}

function renderChart(results) {
  const ctx = document.getElementById('resultsChart').getContext('2d');
  if (chart) chart.destroy();
  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3'],
      datasets: [{
        label: 'Puntaje por pregunta',
        data: results,
        backgroundColor: results.map(v => v === 1 ? 'green' : 'red'),
        borderColor: results.map(v => v === 1 ? 'darkgreen' : 'darkred'),
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 1
        }
      }
    }
  });
}

function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text("Resultados del Diagnóstico de Fútbol", 10, 10);
  const resultText = document.getElementById("result").innerText;
  doc.text(resultText, 10, 20);

  doc.addPage();

  const canvas = document.getElementById("resultsChart");
  const imgData = canvas.toDataURL("image/png");
  doc.addImage(imgData, 'PNG', 10, 20, 180, 100);

  doc.save("diagnostico_futbol.pdf");
}
