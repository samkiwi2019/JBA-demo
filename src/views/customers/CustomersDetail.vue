<template>
    <v-container fluid tag="section" class="content-container">
        <!-- breadcrumbs start -->
        <v-breadcrumbs :items="items">
            <template v-slot:item="{ item }">
                <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
                    {{ $t(item.text) || user.name }}
                </v-breadcrumbs-item>
            </template>
        </v-breadcrumbs>
        <!-- breadcrumbs end -->

        <!-- user card start -->
        <v-row justify="center">
            <v-col cols="12" lg="6" md="8" sm="10">
                <base-material-card
                    class="v-card-profile mt-12"
                    avatar="@/assets/avatar.jpg"
                >
                    <v-card-text>
                        <h4
                            class="display-1 font-weight-light mb-3 black--text"
                        >
                            {{ user.name }}
                        </h4>

                        <div class="d-flex flex-column justify-start">
                            <div class="font-weight-light grey--text">
                                Gender:
                                <strong>{{ user.gender }}</strong>
                            </div>
                            <div class="font-weight-light grey--text">
                                Age:
                                <strong>{{ user.age }}</strong>
                            </div>
                            <div class="font-weight-light grey--text">
                                Car make:
                                <strong>{{ user.car_make }}</strong>
                            </div>
                            <div class="font-weight-light grey--text">
                                Email:
                                <strong
                                    :style="`color:${$vuetify.theme.themes['light'].primary}`"
                                    >{{ user.email }}</strong
                                >
                            </div>
                        </div>
                    </v-card-text>
                </base-material-card>
            </v-col>
        </v-row>
        <!-- user card start -->
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'customer-detail',
    data: () => ({
        items: [
            {
                text: 'customers',
                disabled: false,
                href: '/customers',
            },
            {
                text: '',
                disabled: true,
                href: '',
            },
        ],
    }),
    computed: {
        ...mapState({
            customers: (state) => state.config.items,
        }),
        user() {
            return this.customers.filter(
                (item) => +item.id === +this.$route.params.customerId
            )[0];
        },
    },
};
</script>
