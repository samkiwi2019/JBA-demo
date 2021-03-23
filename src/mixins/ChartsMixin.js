import { mapActions, mapState } from 'vuex';
import { getChartOptions } from '@/utils';
import ChartBoard from '@/components/ChartBoard';

export default {
    data: () => ({
        convertibleChartOptions: {
            type: 'bar',
            sort: 'asc',
        },
    }),
    components: {
        ChartBoard,
    },
    computed: {
        ...mapState({
            items: (state) => state.config.items,
            itemsByAge: (state) => state.config.itemsByAge,
            itemsByGender: (state) => state.config.itemsByGender,
        }),

        agesItems() {
            return Object.keys(this.itemsByAge);
        },

        // computing data of femal & male
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

        // computing data for all ages
        ageGroupData() {
            const ages = this.agesItems;
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

        // computing data sorted for full gender
        genderGroupData() {
            const { sort, type } = this.convertibleChartOptions;

            // Turn the object into an unsorted array with a one-to-one correspondence
            const genders = Object.keys(this.itemsByGender);
            const sumByGender = genders.map(
                (item) => this.itemsByGender[item].length
            );

            // Make sure that the data is sorted after one-to-one correspondence.
            const combineItems = sumByGender
                .map((item, index) => ({
                    key: genders[index],
                    val: item,
                }))
                .sort((a, b) =>
                    sort === 'asc' ? a.val - b.val : b.val - a.val
                );

            // After sorting, split the data again and then obtain the chart data structure.
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
