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
import ChartBoard from '@/components/ChartBoard';
import { mapActions, mapState } from 'vuex';
import { getChartOptions } from '@/utils';

export default {
    data: () => ({
        todos: [],
        convertibleChartOptions: {
            type: 'bar',
            sort: 'asc',
        },
    }),
    components: {
        TodoBoard,
        ChartBoard,
    },
    computed: {
        ...mapState({
            items: (state) => state.config.items,
            itemsByAge: (state) => state.config.itemsByAge,
            itemsByGender: (state) => state.config.itemsByGender,
        }),

        femalAndMaleGroupData() {
            const genders = ['Female', 'Male'];
            const sumByGender = genders.map(
                (item) => this.itemsByGender[item].length
            );
            return {
                color: 'success',
                type: 'doughnut',
                title: 'Femal & Male',
                ...getChartOptions([...sumByGender], [...genders], 'doughnut'),
            };
        },

        ageGroupData() {
            const ages = Object.keys(this.itemsByAge);
            const sumByAge = ages.map((item) => this.itemsByAge[item].length);
            return {
                color: 'info',
                type: 'line',
                title: 'All Ages',
                ...getChartOptions(
                    [...sumByAge],
                    [...ages.map((x) => `< ${x}`)],
                    'line'
                ),
            };
        },

        genderGroupData() {
            const { sort, type } = this.convertibleChartOptions;
            const genders = Object.keys(this.itemsByGender);
            const sumByGender = genders.map(
                (item) => this.itemsByGender[item].length
            );
            const combineItems = sumByGender
                .map((item, index) => ({
                    key: genders[index],
                    val: item,
                }))
                .sort((a, b) =>
                    sort === 'asc' ? a.val - b.val : b.val - a.val
                );

            const sortedData = combineItems.map((x) => x.val);
            const sortedLabers = combineItems.map((x) => x.key);

            return {
                color: 'error',
                type,
                title: 'Full Gender',
                sort,
                ...getChartOptions([...sortedData], [...sortedLabers], type),
            };
        },
    },
    methods: {
        ...mapActions({
            splitDataByAgeGroup: 'config/splitDataByAgeGroup',
            splitDataByGenderGroup: 'config/splitDataByGenderGroup',
        }),

        /**
         * @param {object}  val  {sort: 'asc' | 'desc'} || {type: 'bar' | 'doughnut' | 'line'}
         * */
        handleConvertibleChartOptions(val) {
            this.convertibleChartOptions = {
                ...this.convertibleChartOptions,
                ...val,
            };
        },
    },
    created() {
        this.splitDataByAgeGroup();
        this.splitDataByGenderGroup();
    },
};
</script>
