// First, let's assume you have your scraped data available
const scrapedData = [
  {
    "season": "2024",
    "statCategory": "Most Fours ",
    "stats": [
      {
        "position": "1",
        "player": "Virat Kohli",
        "centuries": "3",
        "fours": "5",
        "sixes": "62",
        "SR": "154.69",
        "fifties": "1"
      },
      {
        "position": "2",
        "player": "Ruturaj Gaikwad",
        "centuries": "3",
        "fours": "4",
        "sixes": "58",
        "SR": "141.16",
        "fifties": "1"
      },
      {
        "position": "3",
        "player": "Riyan Parag",
        "centuries": "3",
        "fours": "4",
        "sixes": "40",
        "SR": "149.21",
        "fifties": "0"
      },
      {
        "position": "4",
        "player": "Travis Head",
        "centuries": "1",
        "fours": "4",
        "sixes": "64",
        "SR": "191.55",
        "fifties": "1"
      },
      {
        "position": "5",
        "player": "Sanju Samson",
        "centuries": "4",
        "fours": "5",
        "sixes": "48",
        "SR": "153.46",
        "fifties": "0"
      },
      {
        "position": "6",
        "player": "Sai Sudharsan",
        "centuries": "1",
        "fours": "2",
        "sixes": "48",
        "SR": "141.28",
        "fifties": "1"
      },
      {
        "position": "7",
        "player": "K L Rahul",
        "centuries": "0",
        "fours": "4",
        "sixes": "45",
        "SR": "136.12",
        "fifties": "0"
      },
      {
        "position": "8",
        "player": "Nicholas Pooran",
        "centuries": "6",
        "fours": "3",
        "sixes": "35",
        "SR": "178.21",
        "fifties": "0"
      },
      {
        "position": "9",
        "player": "Sunil Narine",
        "centuries": "0",
        "fours": "3",
        "sixes": "50",
        "SR": "180.74",
        "fifties": "1"
      }
    ]
  },
  {
    "season": "2024",
    "statCategory": "Most Sixes ",
    "stats": [
      {
        "position": "1",
        "player": "Virat Kohli",
        "centuries": "3",
        "fours": "5",
        "sixes": "62",
        "SR": "154.69",
        "fifties": "1"
      },
      {
        "position": "2",
        "player": "Ruturaj Gaikwad",
        "centuries": "3",
        "fours": "4",
        "sixes": "58",
        "SR": "141.16",
        "fifties": "1"
      },
      {
        "position": "3",
        "player": "Riyan Parag",
        "centuries": "3",
        "fours": "4",
        "sixes": "40",
        "SR": "149.21",
        "fifties": "0"
      },
      {
        "position": "4",
        "player": "Travis Head",
        "centuries": "1",
        "fours": "4",
        "sixes": "64",
        "SR": "191.55",
        "fifties": "1"
      },
      {
        "position": "5",
        "player": "Sanju Samson",
        "centuries": "4",
        "fours": "5",
        "sixes": "48",
        "SR": "153.46",
        "fifties": "0"
      },
      {
        "position": "6",
        "player": "Sai Sudharsan",
        "centuries": "1",
        "fours": "2",
        "sixes": "48",
        "SR": "141.28",
        "fifties": "1"
      },
      {
        "position": "7",
        "player": "K L Rahul",
        "centuries": "0",
        "fours": "4",
        "sixes": "45",
        "SR": "136.12",
        "fifties": "0"
      },
      {
        "position": "8",
        "player": "Nicholas Pooran",
        "centuries": "6",
        "fours": "3",
        "sixes": "35",
        "SR": "178.21",
        "fifties": "0"
      },
      {
        "position": "9",
        "player": "Sunil Narine",
        "centuries": "0",
        "fours": "3",
        "sixes": "50",
        "SR": "180.74",
        "fifties": "1"
      }
    ]
  },
  {
    "season": "2024",
    "statCategory": "Orange Cap",
    "stats": [{}, {}, {}, {}, {}, {}]
  },
  {
    "season": "2024",
    "statCategory": "Most Centuries",
    "stats": [
      {
        "position": "1",
        "player": "Virat Kohli",
        "centuries": "3",
        "fours": "5",
        "sixes": "62",
        "SR": "154.69",
        "fifties": "1"
      },
      {
        "position": "2",
        "player": "Ruturaj Gaikwad",
        "centuries": "3",
        "fours": "4",
        "sixes": "58",
        "SR": "141.16",
        "fifties": "1"
      },
      {
        "position": "3",
        "player": "Riyan Parag",
        "centuries": "3",
        "fours": "4",
        "sixes": "40",
        "SR": "149.21",
        "fifties": "0"
      },
      {
        "position": "4",
        "player": "Travis Head",
        "centuries": "1",
        "fours": "4",
        "sixes": "64",
        "SR": "191.55",
        "fifties": "1"
      },
      {
        "position": "5",
        "player": "Sanju Samson",
        "centuries": "4",
        "fours": "5",
        "sixes": "48",
        "SR": "153.46",
        "fifties": "0"
      },
      {
        "position": "6",
        "player": "Sai Sudharsan",
        "centuries": "1",
        "fours": "2",
        "sixes": "48",
        "SR": "141.28",
        "fifties": "1"
      },
      {
        "position": "7",
        "player": "K L Rahul",
        "centuries": "0",
        "fours": "4",
        "sixes": "45",
        "SR": "136.12",
        "fifties": "0"
      },
      {
        "position": "8",
        "player": "Nicholas Pooran",
        "centuries": "6",
        "fours": "3",
        "sixes": "35",
        "SR": "178.21",
        "fifties": "0"
      },
      {
        "position": "9",
        "player": "Sunil Narine",
        "centuries": "0",
        "fours": "3",
        "sixes": "50",
        "SR": "180.74",
        "fifties": "1"
      }
    ]
  },
  {
    "season": "2024",
    "statCategory": "Most Fifties",
    "stats": [
      {
        "position": "1",
        "player": "Virat Kohli",
        "centuries": "3",
        "fours": "5",
        "sixes": "62",
        "SR": "154.69",
        "fifties": "1"
      },
      {
        "position": "2",
        "player": "Ruturaj Gaikwad",
        "centuries": "3",
        "fours": "4",
        "sixes": "58",
        "SR": "141.16",
        "fifties": "1"
      },
      {
        "position": "3",
        "player": "Riyan Parag",
        "centuries": "3",
        "fours": "4",
        "sixes": "40",
        "SR": "149.21",
        "fifties": "0"
      },
      {
        "position": "4",
        "player": "Travis Head",
        "centuries": "1",
        "fours": "4",
        "sixes": "64",
        "SR": "191.55",
        "fifties": "1"
      },
      {
        "position": "5",
        "player": "Sanju Samson",
        "centuries": "4",
        "fours": "5",
        "sixes": "48",
        "SR": "153.46",
        "fifties": "0"
      },
      {
        "position": "6",
        "player": "Sai Sudharsan",
        "centuries": "1",
        "fours": "2",
        "sixes": "48",
        "SR": "141.28",
        "fifties": "1"
      },
      {
        "position": "7",
        "player": "K L Rahul",
        "centuries": "0",
        "fours": "4",
        "sixes": "45",
        "SR": "136.12",
        "fifties": "0"
      },
      {
        "position": "8",
        "player": "Nicholas Pooran",
        "centuries": "6",
        "fours": "3",
        "sixes": "35",
        "SR": "178.21",
        "fifties": "0"
      },
      {
        "position": "9",
        "player": "Sunil Narine",
        "centuries": "0",
        "fours": "3",
        "sixes": "50",
        "SR": "180.74",
        "fifties": "1"
      }
    ]
  }
];

// Process the data
const processedData = scrapedData
  .map(category => ({
    ...category,
    stats: category.stats.filter(stat => Object.keys(stat).length > 0)
  }))
  .filter(category => category.stats.length > 0);

let mainChart, comparisonChart;

function createMainChart(category) {
  const data = processedData.find(cat => cat.statCategory === category);

  if (!data) return;

  const ctx = document.getElementById('mainChart').getContext('2d');

  if (mainChart) {
    mainChart.destroy();
  }

  mainChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.stats.map(stat => stat.player),
      datasets: [{
        label: category,
        data: data.stats.map(stat => {
          switch (category) {
            case "Most Centuries":
              return parseInt(stat.centuries);
            case "Most Fifties":
              return parseInt(stat.fifties);
            case "Most Fours ":
              return parseInt(stat.fours);
            case "Most Sixes ":
              return parseInt(stat.sixes);
            case "Orange Cap":
              return parseInt(stat.centuries); // Assuming it's supposed to be centuries for consistency
            default:
              return 0;
          }
        }),
        backgroundColor: 'rgba(26, 95, 122, 0.6)'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: `IPL 2024 - ${category}`,
          font: {
            size: 18
          }
        },
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: `Number of ${category}`
          }
        }
      }
    }
  });
}

function createComparisonChart() {
  const ctx = document.getElementById('comparisonChart').getContext('2d');

  if (comparisonChart) {
    comparisonChart.destroy();
  }

  const datasets = processedData.map(category => ({
    label: category.statCategory,
    data: category.stats.slice(0, 5).map(stat => parseInt(stat.centuries)), // Adjust if needed
    backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.6)`
  }));

  comparisonChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['1st', '2nd', '3rd', '4th', '5th'],
      datasets: datasets
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Top 5 Players Across Categories',
          font: {
            size: 18
          }
        }
      }
    }
  });
}

function createDataTable(category) {
  const data = processedData.find(cat => cat.statCategory === category);
  if (!data) return;

  let tableHTML = `
    <table>
      <thead>
        <tr>
          <th>Player</th>
          <th>${category}</th>
        </tr>
      </thead>
      <tbody>
  `;

  data.stats.forEach(stat => {
    tableHTML += `
      <tr>
        <td>${stat.player}</td>
        <td>${stat.centuries}</td> <!-- Adjust if needed -->
      </tr>
    `;
  });

  tableHTML += `
      </tbody>
    </table>
  `;

  document.getElementById('dataTable').innerHTML = tableHTML;
}

// Initialize charts and table
function initializeCharts() {
  const defaultCategory = document.getElementById('statSelector').value;
  createMainChart(defaultCategory);
  createComparisonChart();
  createDataTable(defaultCategory);
}

// Add event listener for stat selector
document.getElementById('statSelector').addEventListener('change', (event) => {
  const selectedCategory = event.target.value;
  createMainChart(selectedCategory);
  createDataTable(selectedCategory);
});

// Call initializeCharts when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeCharts);
