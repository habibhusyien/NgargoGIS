// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example

//Data 
var KonsumsiRumahTangga = [22518, 24498, 26345, 28791, 30807];
var KonsumsiLNPRT = [192, 204, 217, 239, 260];
var KonsumsiPemerintah = [2186, 2105, 2226, 2468, 2692];
var PembentukanModalTetapBruto = [10466, 11741, 13089, 14538, 15919];
var PerubahanInventori = [97, 183, 192, 217, 228];
var Ekspor = [23678, 29504, 37621, 42965, 46756];
var Impor = [10532, 12656, 14825, 15985, 18617];
var ctx = document.getElementById("pdrbberlaku").getContext('2d');
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