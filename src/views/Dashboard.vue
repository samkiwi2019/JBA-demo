<template>
    <v-container fluid tag="section" class="content-container">
        <chart-board
            :items="[femalAndMaleGroupData, ageGroupData, genderGroupData]"
            @handleConvertibleChartOptions="handleConvertibleChartOptions"
        />
        <todo-board :customers="items.length.toString()" />
    </v-container>
</template>

<script>
import TodoBoard from '@/components/TodoBoard';
import ChartsMixin from '@/mixins/ChartsMixin';

export default {
    mixins: [ChartsMixin], // provide the data of chart-board and todo-board
    components: {
        TodoBoard,
    },
};
</script>
