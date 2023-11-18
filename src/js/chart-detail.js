(async function () {
    const DATA_COUNT = 6;
    const data = [{ bulan: "Ke-1", count: 10 }];

    const labels = Utils.months({ count: 7 });

    new Chart(document.getElementById("1kalumpangChart"), {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Tahap 1",
                    data: data.map((row) => row.count),
                    tension: 0.3,
                },
                {
                    label: "Tahap 2",
                    data: data.map((row) => row.count),
                    tension: 0.3,
                },
                {
                    label: "Tahap 3",
                    data: data.map((row) => row.count),
                    tension: 0.3,
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Bulan",
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: "Kebutuhan/ton",
                    },
                },
            },
        },
    });
})();
