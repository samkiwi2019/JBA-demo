<template>
    <v-row>
        <v-col cols="12">
            <v-data-table
                :headers="headers"
                :items="items"
                class="elevation-4 mt-10"
                no-data-text="No Data"
                hide-default-footer
                :page.sync="search.currentPage"
                :items-per-page="search.perPage"
                :search="search.q"
                @page-count="total = $event"
            >
                <template v-slot:top>
                    <v-row>
                        <v-col cols="12">
                            <v-toolbar flat color="dark" height="auto">
                                <!-- table flag title start -->
                                <v-sheet
                                    class="d-flex pa-7 sheet-header"
                                    color="primary"
                                    height="88"
                                    width="88"
                                    dark
                                    elevation="6"
                                >
                                    <v-icon dark size="32"
                                        >mdi-account-group</v-icon
                                    >
                                </v-sheet>
                                <!-- table flag title end -->

                                <!-- table title start -->
                                <v-toolbar-title class="ml-4">
                                    <h3>Customers</h3>
                                </v-toolbar-title>
                                <!-- table title end -->

                                <v-spacer></v-spacer>
                            </v-toolbar>
                        </v-col>
                    </v-row>
                    <!-- search and filter start-->
                    <v-row>
                        <v-col cols="12">
                            <v-toolbar flat color="dark" height="auto">
                                <v-row justify="end">
                                    <v-col cols="12" sm="6" lg="3">
                                        <v-select
                                            :items="getFilterItems()"
                                            label="Filter By Ages"
                                            v-model="filterByAges"
                                        >
                                        </v-select>
                                    </v-col>
                                    <v-col cols="12" sm="6" lg="3">
                                        <v-text-field
                                            v-model="search.q"
                                            hide-details
                                            append-icon="mdi-magnify"
                                            label="Search"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-toolbar>
                        </v-col>
                    </v-row>
                    <!-- search and filter end-->
                </template>

                <!-- actions -->
                <template v-slot:item.actions="{ item }">
                    <v-icon color="info" class="mr-5" @click="showDetail(item)"
                        >mdi-arrow-expand-all</v-icon
                    >
                </template>

            </v-data-table>
            <div class="d-flex justify-sm-space-between justify-center">
                <div style="width: 80px;" class="mt-6 d-none d-sm-flex">
                    <v-select
                        :items="itemsPerPage"
                        label="Per Page"
                        dense
                        outlined
                        v-model="search.perPage"
                        hide-details
                    ></v-select>
                </div>
                <div class="d-flex align-center mt-6">
                    <v-pagination
                        :total-visible="$vuetify.breakpoint.smAndDown ? 6 : 8"
                        v-model="search.currentPage"
                        :length="total"
                    ></v-pagination>
                    <div class="d-flex align-center">
                        <v-text-field
                            class="d-none d-sm-flex"
                            style="width: 80px;"
                            placeholder="Page"
                            outlined
                            dense
                            hide-details
                            v-model="page"
                            @keyup.enter="jumpToPage"
                            type="number"
                        ></v-text-field>
                        <v-btn
                            class="ml-2 d-none d-sm-flex"
                            color="primary"
                            dark
                            @click="jumpToPage"
                        >
                            GO
                        </v-btn>
                    </div>
                </div>
            </div>
        </v-col>
    </v-row>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'DataTable',
    props: {
        filterItems: {
            type: Array,
            default: [],
        },
    },
    data: () => ({
        loading: false,
        search: {
            q: '',
            currentPage: 1,
            sort: 0,
            perPage: 10,
        },
        total: 0,
        itemsPerPage: [10, 20, 30],
        filterByAges: 'All',
        page: '',
    }),
    watch: {
        'search.q'(from, to) {
            if (from !== to) {
                this.search.currentPage = 1;
            }
        },
        filterByAges() {
            this.search.currentPage = 1;
        },
    },
    computed: {
        ...mapState({
            items: (state) => state.config.items,
        }),
        headers() {
            return [
                {
                    text: 'Name',
                    align: 'start',
                    value: 'name',
                    filterable: true,
                    sortable: false,
                },
                {
                    text: 'Gender',
                    value: 'gender',
                    filterable: true,
                    sortable: false,
                },
                {
                    text: 'Age',
                    value: 'age',
                    sortable: true,
                    filter: this.filterByAgesFunc,
                },
                {
                    text: 'Car Make',
                    value: 'car_make',
                    filterable: true,
                    sortable: false,
                },
                { text: 'Actions', value: 'actions', sortable: false },
            ];
        },
    },

    methods: {
        getFilterItems() {
            const items = this.filterItems.map((x) => {
                if (x === '20') return `< ${x}`;
                else if (x === '100') return '>= 90';
                else return `${x - 10} - ${x - 1}`;
            });
            return ['All', ...items];
        },
        showDetail(item) {
            this.$router.push({
                name: 'customers-detail',
                params: { customerId: item.id },
            });
        },
        filterByAgesFunc(value) {
            // all ages
            if (this.filterByAges === 'All') return true;

            // >= 90
            if (this.filterByAges.indexOf('>=') !== -1) {
                return +value >= 90;
            }

            // < 20
            if (this.filterByAges.indexOf('<') !== -1) {
                return +value < 20;
            }

            // 20-89
            const conditions = this.filterByAges.split('-');
            return +value >= +conditions[0] && +value <= +conditions[1];
        },
        jumpToPage() {
            const n = Math.max(1, Math.min(this.total, this.page));
            this.search.currentPage = n;
            this.page = n;
        },
    },
};
</script>
<style lang="scss" scoped>
.sheet-header {
    transform: translateY(-30px);
    border-radius: 4px;
}
</style>
