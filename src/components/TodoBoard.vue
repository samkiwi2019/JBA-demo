<template>
    <v-row>
        <v-col cols="12" sm="6" lg="3">
            <dashboard-stats-card
                color="primary"
                icon="mdi-account-supervisor"
                title="Total Users"
                :value="customers"
                sub-icon="mdi-clock"
                sub-icon-color="primary"
                sub-text="Since Jan 2021"
            />
        </v-col>

        <v-col cols="12" sm="6" lg="3">
            <dashboard-stats-card
                color="success"
                icon="mdi-format-list-checks"
                title="Completed orders"
                :value="orders"
                sub-icon="mdi-shield-check"
                sub-icon-color="success"
                sub-text="Since Jan 2021"
            />
        </v-col>

        <v-col cols="12" sm="6" lg="3">
            <dashboard-stats-card
                color="info"
                icon="mdi-currency-usd"
                title="Total Gross (NZ$)"
                :value="formatMoney(gross)"
                sub-icon="mdi-update"
                sub-icon-color="info"
                sub-text="Since Jan 2021"
            />
        </v-col>

        <v-col cols="12" sm="6" lg="3">
            <dashboard-stats-card
                color="error"
                icon="mdi-format-list-numbered"
                title="Issues"
                :value="issues"
                sub-icon="mdi-message-alert"
                sub-icon-color="error"
                sub-text="Since Jan 2021"
            />
        </v-col>
    </v-row>
</template>

<script>
import DashboardStatsCard from '@/components/dashboard/StatsCard';
export default {
    props: {
        customers: {
            type: String,
            default: '0',
        },
        orders: {
            type: String,
            default: '123456',
        },
        gross: {
            type: String,
            default: '654321',
        },
        issues: {
            type: String,
            default: '0',
        },
    },
    components: {
        DashboardStatsCard,
    },
    methods: {
        formatMoney(n) {
            return (+n).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            });
        },
    },
};
</script>

<style></style>
