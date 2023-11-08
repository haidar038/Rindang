(async function () {
    const data = [
        { bulan: "Ke-1", count: 10 },
        { bulan: "Ke-2", count: 20 },
        { bulan: "Ke-3", count: 15 },
        { bulan: "Ke-4", count: 25 },
        { bulan: "Ke-5", count: 22 },
        { bulan: "Ke-6", count: 30 },
    ];

    new Chart(document.getElementById("1kalumpangChart"), {
        type: "line",
        data: {
            labels: data.map((row) => row.bulan),
            datasets: [
                {
                    label: "Rekap Produktivitas Tahap 1.0",
                    data: data.map((row) => row.count),
                },
            ],
        },
    });

    new Chart(document.getElementById("2kalumpangChart"), {
        type: "line",
        data: {
            labels: data.map((row) => row.bulan),
            datasets: [
                {
                    label: "Rekap Produktivitas Tahap 1.0",
                    data: data.map((row) => row.count),
                },
            ],
        },
    });

    new Chart(document.getElementById("3kalumpangChart"), {
        type: "line",
        data: {
            labels: data.map((row) => row.bulan),
            datasets: [
                {
                    label: "Rekap Produktivitas Tahap 1.0",
                    data: data.map((row) => row.count),
                },
            ],
        },
    });
})();
