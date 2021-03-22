<template>
    <v-navigation-drawer
        id="core-navigation-drawer"
        v-model="drawer"
        :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
        :expand-on-hover="mini"
        :right="$vuetify.rtl"
        src="@/assets/sidebar-1.jpeg"
        mobile-breakpoint="960"
        app
        width="260"
        v-bind="$attrs"
        mini-variant-width="80"
        :permanent="!isMdAndDown"
    >
        <!-- drawer mask start -->
        <template v-slot:img="props">
            <v-img :gradient="`to bottom, ${barColor}`" v-bind="props" />
        </template>
        <!-- drawer mask end -->

        <v-divider class="mb-1" />

        <!-- admin start -->
        <v-list dense nav>
            <v-list-item class="px-8 py-4">
                <v-list-item-avatar>
                    <img src="@/assets/logo.png" />
                </v-list-item-avatar>
                <v-list-item-title>
                    <h3>Service System</h3>
                </v-list-item-title>
            </v-list-item>
            <v-divider class="mb-2" />
            <v-list-group>
                <template v-slot:activator>
                    <v-list-item-avatar>
                        <img src="@/assets/avatar.jpg" />
                    </v-list-item-avatar>
                    <v-list-item-title>Sam</v-list-item-title>
                </template>
                <v-list-item link @click.native="logout">
                    <v-list-item-icon>
                        <v-icon v-text="'mdi-logout'"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ $t('logout') }}</v-list-item-title>
                </v-list-item>
            </v-list-group>
        </v-list>
        <!-- admin end -->
        <v-divider class="mb-2" />

        <!-- menu start -->
        <v-subheader>Menus</v-subheader>
        <v-list expand nav dense>
            <template v-for="(item, i) in computedItems">
                <v-list-group
                    :to="item.path"
                    v-if="item.children"
                    :key="`item-${i}`"
                >
                    <template v-slot:activator>
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-title
                            v-text="item.name"
                        ></v-list-item-title>
                    </template>
                    <v-list-item
                        link
                        :active-class="`primary white--text`"
                        v-for="(em, index) in item.children"
                        :key="`child-${index}`"
                        :to="em.path"
                    >
                        <v-list-item-icon>
                            <v-icon v-text="em.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-title v-text="em.name"></v-list-item-title>
                    </v-list-item>
                </v-list-group>
                <v-list-item
                    link
                    :active-class="`primary white--text`"
                    :to="item.path"
                    v-else
                    :key="`item-${i}`"
                >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                </v-list-item>
            </template>
        </v-list>
        <!-- menu end -->
    </v-navigation-drawer>
</template>

<script>
import { routes } from '@/routes';
import { mapState } from 'vuex';
import * as R from 'ramda';

export default {
    name: 'AppDrawer',

    props: {
        expandOnHover: {
            type: Boolean,
            default: false,
        },
    },

    data: () => ({
        model: false,

        /**
         * @items menu subitem
         */
        items: [],
    }),

    computed: {
        ...mapState({
            barColor: (state) => state.config.barColor,
        }),
        drawer: {
            get() {
                return this.$store.state.config.drawer;
            },
            set(val) {
                this.$store.commit('config/SET_DRAWER', val);
            },
        },
        computedItems() {
            const items = this.deepFilter(R.clone(routes));
            return items.map(this.mapItem);
        },
        mini() {
            if (this.drawer) {
                return false;
            } else {
                return !this.$vuetify.breakpoint.mdAndDown;
            }
        },
        isMdAndDown() {
            return this.$vuetify.breakpoint.mdAndDown;
        },
    },

    methods: {
        deepFilter(items) {
            return items.filter((item) => {
                if (Array.isArray(item.children)) {
                    item.children = this.deepFilter(item.children);
                }
                return item.isMenu;
            });
        },
        /**
         * Generate new menu items data mixed with i18n
         */
        mapItem(item) {
            return {
                ...item,
                children: item.children
                    ? item.children.map(this.mapItem)
                    : undefined,
                name: this.$t(item.name),
            };
        },
        logout() {
            this.$toast.default('Logout successfully!');
        },
    },
};
</script>
