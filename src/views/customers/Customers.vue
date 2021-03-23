<template>
    <v-container fluid tag="section" class="content-container">
        <chart-board
            :items="chartItems"
            @handleConvertibleChartOptions="handleConvertibleChartOptions"
        />
        <data-table :filterItems="agesItems" />
    </v-container>
</template>

<script>
import DataTable from '@/components/DataTable';
import ChartsMixin from '@/mixins/ChartsMixin';

export default {
    mixins: [ChartsMixin], // provide the data of chart-board and data-table
    components: {
        DataTable,
    },
    computed: {
        chartItems() {
            // from ChartsMixin
            return [
                this.femalAndMaleGroupData,
                this.ageGroupData,
                this.genderGroupData,
            ];
        },
    },
};
</script>
