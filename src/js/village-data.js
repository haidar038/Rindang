const items = [
    { kel: "Kalumpang", kec: "Ternate Tengah", menu: "<a class='dropdown-item' href='#' data-bs-toggle='modal' data-bs-target='#kalumpang'>Detail</a>" },
    { kel: "Sasa", kec: "Ternate Selatan", menu: "<a class='dropdown-item' href='#' data-bs-toggle='modal' data-bs-target='#sasa'>Detail</a>" },
    { kel: "Foramadiahi", kec: "Pulau Ternate", menu: "<a class='dropdown-item' href='#' data-bs-toggle='modal' data-bs-target='#fora'>Detail</a>" },
    { kel: "Tubo", kec: "Ternate Utara", menu: "<a class='dropdown-item' href='#' data-bs-toggle='modal' data-bs-target='#tubo'>Detail</a>" },
    { kel: "Kulaba", kec: "Ternate Barat", menu: "<a class='dropdown-item' href='#' data-bs-toggle='modal' data-bs-target='#kulaba'>Detail</a>" },
    { kel: "Santiong", kec: "Ternate Tengah", menu: "<a class='dropdown-item' href='#' data-bs-toggle='modal' data-bs-target='#santiong'>Detail</a>" },
    { kel: "Fitu", kec: "Ternate Selatan", menu: "<a class='dropdown-item' href='#' data-bs-toggle='modal' data-bs-target='#fitu'>Detail</a>" },
];

for (let i = 0; i < items.length; i++) {
    document.getElementById("kel").innerHTML += items[i].kel;
    document.getElementById("kec").innerHTML += items[i].kec;
    document.getElementById("menu").innerHTML += items[i].menu;
}
