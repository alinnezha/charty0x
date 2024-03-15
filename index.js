// Function to generate a cryptocurrency chart
function generateCryptoChart(data) {
    // Extracting data
    const dates = data.dates;
    const prices = data.prices;

    // Create a chart using a charting library (e.g., Chart.js, Plotly.js, etc.)
    // For this example, let's assume we're using Chart.js

    const ctx = document.getElementById('cryptoChart').getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Price',
                data: prices,
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Price'
                    }
                }
            }
        }
    });
}

// Example data
const cryptoData = {
    dates: ['2024-03-01', '2024-03-02', '2024-03-03', '2024-03-04', '2024-03-05'],
    prices: [100, 120, 110, 130, 125]
};

// Generate the cryptocurrency chart
generateCryptoChart(cryptoData);
