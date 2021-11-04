// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example

//Data 
var KonsumsiRumahTangga = [17715, 18512, 19360, 20320, 21149];
var KonsumsiLNPRT = [147, 150, 155, 165, 175];
var KonsumsiPemerintah = [1604, 1491, 1531, 1608, 1681];
var PembentukanModalTetapBruto = [8763, 9283, 9982, 10667, 11411];
var PerubahanInventori = [64, 112, 116, 119, 123];
var Ekspor = [27356, 37660, 43005, 44899, 48967];
var Impor = [8759, 10022, 11106, 11945, 13519];
var ctx = document.getElementById("pdrbkonstan").getContext('2d');
var barchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2015", "2016", "2017", "2018", "2019"],
        datasets: [{
                label: "Konsumsi Rumah Tangga",
                backgroundColor: "pink",
                borderColor: "pink",
                borderWidth: 1,
                showInLegend: true,
                data: KonsumsiRumahTangga,
            },
            {
                label: "Konsumsi LNPRT",
                backgroundColor: "blue",
                borderColor: "blue",
                borderWidth: 1,
                showInLegend: true,
                data: KonsumsiLNPRT,
            },
            {
                label: "Konsumsi Pemerintah",
                backgroundColor: "lightgreen",
                borderColor: "lightgreen",
                borderWidth: 1,
                showInLegend: true,
                data: KonsumsiPemerintah,
            },
            {
                label: "Pembentukan Modal Tetap Bruto",
                backgroundColor: "grey",
                borderColor: "grey",
                borderWidth: 1,
                showInLegend: true,
                data: PembentukanModalTetapBruto,
            },
            {
                label: "Perubahan Inventori",
                backgroundColor: "orange",
                borderColor: "orange",
                borderWidth: 1,
                showInLegend: true,
                data: PerubahanInventori,
            },
            {
                label: "Ekspor",
                backgroundColor: "lightblue",
                borderColor: "lightblue",
                borderWidth: 1,
                showInLegend: true,
                data: Ekspor,
            },
            {
                label: "Impor",
                backgroundColor: "red",
                borderColor: "red",
                borderWidth: 1,
                showInLegend: true,
                data: Impor,
            },
        ],
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    fontSize: 12,
                    fontFamily: "'Roboto', sans-serif",
                    fontColor: '#000',
                    fontStyle: 'normal'
                }
            }],
            yAxes: [{}],
        },
        legend: {
            display: false,
            position: "top",
        }

    }
});