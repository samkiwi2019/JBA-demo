<template>
    <div class="pt-6">
        <v-row>
            <v-col
                cols="12"
                lg="4"
                v-for="(item, index) in items"
                :key="`${index}_${item.type}_${item.sort}`"
            >
                <base-material-chart-card
                    :data="item.data"
                    :options="item.options"
                    :color="item.color"
                    :type="item.type"
                >
                    <div class="d-flex">
                        <h4 class="card-title font-weight-light mt-2 ml-2">
                            {{ item.title }}
                        </h4>
                        <v-spacer />
                        <!-- buttons for sorting chart and changing chart style  -->
                        <v-btn
                            small
                            :color="item.color"
                            dark
                            v-if="item.sort"
                            class="mr-1"
                            @click="handleType(item)"
                        >
                            <span
                                :class="{
                                    'text-decoration-underline':
                                        item.type === 'bar',
                                }"
                                >Bar</span
                            >/<span
                                :class="{
                                    'text-decoration-underline':
                                        item.type === 'line',
                                }"
                                >Line</span
                            >/<span
                                :class="{
                                    'text-decoration-underline':
                                        item.type === 'doughnut',
                                }"
                                >Pie</span
                            >
                        </v-btn>
                        <v-btn
                            small
                            :color="item.color"
                            dark
                            v-if="item.sort"
                            @click="handleSort(item)"
                        >
                            <span
                                :class="{
                                    'text-decoration-underline':
                                        item.sort === 'asc',
                                }"
                                >ASC</span
                            >/<span
                                :class="{
                                    'text-decoration-underline':
                                        item.sort === 'desc',
                                }"
                                >DESC</span
                            >
                        </v-btn>
                        <!-- buttons for sorting chart and changing chart style ending -->
                    </div>

                    <p class="d-inline-flex font-weight-light ml-2 mt-1">
                        <v-icon color="green" small>
                            mdi-arrow-up
                        </v-icon>
                        <span class="green--text mr-2"
                            >{{ (Math.random() * 10).toFixed(1) }}%</span
                        >
                        <span>increase in today's sales</span>
                    </p>

                    <template v-slot:actions>
                        <v-icon class="mr-1" small>
                            mdi-clock-outline
                        </v-icon>
                        <span class="caption grey--text font-weight-light"
                            >updated
                            {{ Math.floor(Math.random() * Math.floor(30)) }}
                            minutes ago</span
                        >
                    </template>
                </base-material-chart-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: [],
        },
        handleConvertibleChartOptions: {
            type: Function,
        },
    },
    methods: {
        handleSort(item) {
            this.$emit('handleConvertibleChartOptions', {
                sort: item.sort === 'asc' ? 'desc' : 'asc',
            });
        },
        handleType(item) {
            this.$emit('handleConvertibleChartOptions', {
                type:
                    item.type === 'bar'
                        ? 'line'
                        : item.type === 'line'
                        ? 'doughnut'
                        : 'bar',
            });
        },
    },
};
</script>
