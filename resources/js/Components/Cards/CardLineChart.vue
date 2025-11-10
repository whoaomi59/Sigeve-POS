<template>
    <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
    >
        <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div class="flex flex-wrap items-center">
                <div class="relative w-full max-w-full flex-grow flex-1">
                    <h6
                        class="uppercase text-gray-500 mb-1 text-xs font-semibold"
                    >
                        Descripción general
                    </h6>
                    <h2 class="text-[#10B981] text-xl font-semibold">
                        Valor de beneficio
                    </h2>
                </div>
            </div>
        </div>
        <div class="p-4 flex-auto">
            <!-- Chart -->
            <div class="relative h-350-px">
                <canvas id="line-chart"></canvas>
            </div>
        </div>
    </div>
</template>
<script>
import Chart from "chart.js";

export default {
    props: {
        profit_line_chart: Object,
    },
    mounted: function () {
        this.$nextTick(function () {
            var config = {
                type: "line",
                data: {
                    labels: this.profit_line_chart.months,
                    datasets: [
                        {
                            label: new Date().getFullYear(),
                            backgroundColor: "#4c51bf",
                            borderColor: "#4c51bf",
                            data: this.profit_line_chart.current_year,
                            fill: false,
                        },
                        {
                            label: new Date().getFullYear() - 1,
                            fill: false,
                            backgroundColor: "#F97316",
                            borderColor: "#F97316",
                            data: this.profit_line_chart.last_year,
                        },
                    ],
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    title: {
                        display: false,
                        text: "Sales Charts",
                        fontColor: "#F97316",
                    },
                    legend: {
                        labels: {
                            fontColor: "#F97316",
                        },
                        align: "end",
                        position: "bottom",
                    },
                    tooltips: {
                        mode: "index",
                        intersect: false,
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true,
                    },
                    scales: {
                        xAxes: [
                            {
                                ticks: {
                                    fontColor: "#71717A",
                                },
                                display: true,
                                scaleLabel: {
                                    display: false,
                                    labelString: "Month",
                                    fontColor: "#71717A",
                                },
                                gridLines: {
                                    display: false,
                                    borderDash: [2],
                                    borderDashOffset: [2],
                                    color: "#71717A",
                                    zeroLineColor: "rgba(0, 0, 0, 0)",
                                    zeroLineBorderDash: [2],
                                    zeroLineBorderDashOffset: [2],
                                },
                            },
                        ],
                        yAxes: [
                            {
                                ticks: {
                                    fontColor: "#71717A",
                                },
                                display: true,
                                scaleLabel: {
                                    display: false,
                                    labelString: "Value",
                                    fontColor: "#10B981",
                                },
                                gridLines: {
                                    borderDash: [3],
                                    borderDashOffset: [3],
                                    drawBorder: false,
                                    color: "#10B981",
                                    zeroLineColor: "#10B981",
                                    zeroLineBorderDash: [2],
                                    zeroLineBorderDashOffset: [2],
                                },
                            },
                        ],
                    },
                },
            };
            var ctx = document.getElementById("line-chart").getContext("2d");
            window.myLine = new Chart(ctx, config);
        });
    },
};
</script>
