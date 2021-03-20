/***
 * @param {number[]} data
 * @param {string[]} labels
 * @param {string} type  doughnut | line | bar | pie
 */
export const getChartOptions = (data, labels, type) => {
    let options = {};
    let backgroundColor = [];
    let ext = {};
    if (type === 'doughnut') {
        backgroundColor = [
            '#E91E63',
            '#2196F3',
            '#3F51B5',
            '#FF9800',
            '#4CAF50',
            '#9C27B0',
            '#CDDC39',
            '#795548',
        ];
        options = {
            circumference: Math.PI,
            rotation: -Math.PI,
            responsive: true,
            legend: {
                position: 'left',
                labels: {
                    fontColor: '#fff',
                },
            },
            animation: {
                animateScale: true,
                animateRotate: true,
            },
            tooltips: {
                enabled: true,
            },
            plugins: {
                datalabels: {
                    formatter: (value, ctx) => {
                        const arr = ctx.chart.data.datasets[0].data;
                        const sum = arr.reduce((acc, curr) => (acc += curr), 0);
                        return ((value * 100) / sum).toFixed(2) + '%';
                    },
                    color: '#fff',
                },
            },
        };
    } else if (type === 'bar') {
        options = {
            responsive: true,
            legend: {
                position: 'left',
                display: false,
            },
            plugins: {
                datalabels: {
                    display: false,
                },
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            fontColor: '#fff',
                            fontSize: 12,
                            padding: 8,
                        },
                        gridLines: {
                            display: true,
                            color: 'rgba(255,255,255,.25)',
                            zeroLineColor: 'rgba(255,255,255,.25)',
                            zeroLineBorderDash: [5, 15],
                            borderDash: [4, 4],
                            tickMarkLength: 0,
                        },
                    },
                ],
                xAxes: [
                    {
                        ticks: {
                            fontColor: '#fff',
                            fontSize: 12,
                            padding: 8,
                        },
                        gridLines: {
                            display: true,
                            color: 'rgba(255,255,255,.25)',
                            zeroLineColor: 'rgba(255,255,255,.25)',
                            zeroLineBorderDash: [4, 4],
                            borderDash: [4, 4],
                            tickMarkLength: 0,
                        },
                    },
                ],
            },
        };
        backgroundColor = 'rgba(255,255,255,.9)';
        ext = {
            borderColor: '#fff',
            borderWidth: 1,
        };
    } else if (type === 'line') {
        options = {
            responsive: true,
            legend: {
                position: 'left',
                display: false,
            },
            elements: {
                line: {
                    tension: 0.000001,
                },
            },
            plugins: {
                datalabels: {
                    display: false,
                },
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            fontColor: '#fff',
                            fontSize: 12,
                            padding: 8,
                        },
                        gridLines: {
                            display: true,
                            color: 'rgba(255,255,255,.25)',
                            zeroLineColor: 'rgba(255,255,255,.25)',
                            zeroLineBorderDash: [5, 15],
                            borderDash: [4, 4],
                            tickMarkLength: 0,
                        },
                    },
                ],
                xAxes: [
                    {
                        ticks: {
                            fontColor: '#fff',
                            fontSize: 12,
                            padding: 8,
                        },
                        gridLines: {
                            display: true,
                            color: 'rgba(255,255,255,.25)',
                            zeroLineColor: 'rgba(255,255,255,.25)',
                            zeroLineBorderDash: [4, 4],
                            borderDash: [4, 4],
                            tickMarkLength: 0,
                        },
                    },
                ],
            },
        };
        backgroundColor = 'rgba(255,255,255,.25)';
        ext = {
            borderColor: '#fff',
            borderWidth: 1,
            fill: 'start',
            pointBackgroundColor: '#fff',
            pointRadius: 5,
            pointHoverRadius: 8,
        };
    }

    return {
        data: {
            datasets: [
                {
                    data,
                    backgroundColor,
                    ...ext,
                },
            ],
            labels,
        },
        options,
    };
};
