(async function () {
    const months = [{ bulan: "Ke-1" }, { bulan: "Ke-2" }, { bulan: "Ke-3" }, { bulan: "Ke-4" }, { bulan: "Ke-5" }, { bulan: "Ke-6" }];
    const data_1 = [{ count: 10 }, { count: 20 }, { count: 15 }, { count: 25 }, { count: 22 }, { count: 30 }];
    const data_2 = [{ count: 23 }, { count: 18 }, { count: 10 }, { count: 30 }, { count: 18 }, { count: 32 }];
    const data_3 = [{ count: 27 }, { count: 25 }, { count: 22 }, { count: 21 }, { count: 24 }, { count: 35 }];

    new Chart(document.getElementById("kalumpangChart"), {
        type: "line",
        data: {
            labels: months.map((row) => row.bulan),
            datasets: [
                {
                    label: "Tahap 1",
                    data: data_1.map((row) => row.count),
                    tension: 0.2,
                },
                {
                    label: "Tahap 2",
                    data: data_2.map((row) => row.count),
                    tension: 0.2,
                },
                {
                    label: "Tahap 3",
                    data: data_3.map((row) => row.count),
                    tension: 0.2,
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
    new Chart(document.getElementById("sasaChart"), {
        type: "line",
        data: {
            labels: months.map((row) => row.bulan),
            datasets: [
                {
                    label: "Tahap 1",
                    data: data_1.map((row) => row.count),
                    tension: 0.2,
                },
                {
                    label: "Tahap 2",
                    data: data_2.map((row) => row.count),
                    tension: 0.2,
                },
                {
                    label: "Tahap 3",
                    data: data_3.map((row) => row.count),
                    tension: 0.2,
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
    new Chart(document.getElementById("foraChart"), {
        type: "line",
        data: {
            labels: months.map((row) => row.bulan),
            datasets: [
                {
                    label: "Tahap 1",
                    data: data_1.map((row) => row.count),
                    tension: 0.2,
                },
                {
                    label: "Tahap 2",
                    data: data_2.map((row) => row.count),
                    tension: 0.2,
                },
                {
                    label: "Tahap 3",
                    data: data_3.map((row) => row.count),
                    tension: 0.2,
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
    new Chart(document.getElementById("tuboChart"), {
        type: "line",
        data: {
            labels: months.map((row) => row.bulan),
            datasets: [
                {
                    label: "Tahap 1",
                    data: data_1.map((row) => row.count),
                    tension: 0.2,
                },
                {
                    label: "Tahap 2",
                    data: data_2.map((row) => row.count),
                    tension: 0.2,
                },
                {
                    label: "Tahap 3",
                    data: data_3.map((row) => row.count),
                    tension: 0.2,
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
    new Chart(document.getElementById("kulabaChart"), {
        type: "line",
        data: {
            labels: months.map((row) => row.bulan),
            datasets: [
                {
                    label: "Tahap 1",
                    data: data_1.map((row) => row.count),
                    tension: 0.2,
                },
                {
                    label: "Tahap 2",
                    data: data_2.map((row) => row.count),
                    tension: 0.2,
                },
                {
                    label: "Tahap 3",
                    data: data_3.map((row) => row.count),
                    tension: 0.2,
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
    new Chart(document.getElementById("santiongChart"), {
        type: "line",
        data: {
            labels: months.map((row) => row.bulan),
            datasets: [
                {
                    label: "Tahap 1",
                    data: data_1.map((row) => row.count),
                    tension: 0.2,
                },
                {
                    label: "Tahap 2",
                    data: data_2.map((row) => row.count),
                    tension: 0.2,
                },
                {
                    label: "Tahap 3",
                    data: data_3.map((row) => row.count),
                    tension: 0.2,
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
    new Chart(document.getElementById("fituChart"), {
        type: "line",
        data: {
            labels: months.map((row) => row.bulan),
            datasets: [
                {
                    label: "Tahap 1",
                    data: data_1.map((row) => row.count),
                    tension: 0.2,
                },
                {
                    label: "Tahap 2",
                    data: data_2.map((row) => row.count),
                    tension: 0.2,
                },
                {
                    label: "Tahap 3",
                    data: data_3.map((row) => row.count),
                    tension: 0.2,
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
