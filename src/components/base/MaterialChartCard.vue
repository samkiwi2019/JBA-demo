<template>
    <base-material-card
        class="v-card--material-chart"
        v-bind="$attrs"
        v-on="$listeners"
    >
        <template v-slot:heading>
            <canvas ref="chart" height="200"></canvas>
        </template>

        <slot />

        <slot slot="actions" name="actions" />
    </base-material-card>
</template>

<script>
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default {
    name: 'MaterialChartCard',

    inheritAttrs: false,

    props: {
        data: {
            type: Object,
            default: () => ({}),
        },
        options: {
            type: Object,
            default: () => ({}),
        },
        type: {
            type: String,
            required: true,
            validator: (v) => ['doughnut', 'bar', 'line'].includes(v),
        },
    },

    data: () => ({
        chartInstance: null,
    }),
    watch: {
        '$vuetify.breakpoint': {
            deep: true,
            handler() {
                this.updateChart();
            },
        },
    },
    methods: {
        async initChart() {
            var config = {
                type: this.type,
                data: this.data,
                options: { ...this.options },
            };

            var ctx = this.$refs.chart.getContext('2d');
            Chart.plugins.register(ChartDataLabels);
            this.chartInstance = new Chart(ctx, config);
            await this.$nextTick();
            this.updateChart();
        },

        // Compatible with the display of doughnut chart in extremely small width.
        updateChart() {
            if (this.type == 'doughnut') {
                if (this.chartInstance.width <= 420) {
                    this.chartInstance.legend.options.display = false;
                } else {
                    this.chartInstance.legend.options.display = true;
                }
                this.chartInstance.update();
            }
        },
    },
    mounted() {
        this.initChart();
    },
};
</script>

<style lang="scss">
.v-card--material-chart {
    p {
        color: #999;
    }
    .v-card--material__heading {
        max-height: 720px;
    }
}
</style>
