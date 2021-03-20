<template>
    <v-app-bar id="app-bar" absolute app color="transparent" flat height="75">
        <!-- toggle app drawer start -->
        <v-btn class="mr-3" elevation="1" fab small @click="setDrawer(!drawer)">
            <v-icon v-if="!drawer">mdi-view-quilt</v-icon>

            <v-icon v-else>mdi-dots-vertical</v-icon>
        </v-btn>
        <!-- toggle app drawer end -->

        <!-- current route and page title start -->
        <v-toolbar-title
            class="hidden-sm-and-down font-weight-light"
            v-text="$t($route.name)"
        />
        <!-- current route and page title end -->

        <v-spacer />

        <div class="mx-3" />

        <!-- app bar dashboard link button start -->
        <v-btn class="ml-2" min-width="0" text to="/dashboard">
            <v-icon>mdi-view-dashboard</v-icon>
        </v-btn>
        <!-- app bar dashboard link button end -->

        <!-- app bar notifications start -->
        <v-menu
            bottom
            left
            offset-y
            origin="top right"
            transition="scale-transition"
        >
            <template v-slot:activator="{ attrs, on }">
                <v-btn class="ml-2" min-width="0" text v-bind="attrs" v-on="on">
                    <v-badge
                        color="red"
                        overlap
                        bordered
                        v-if="notifications.length > 0"
                    >
                        <template v-slot:badge>
                            <span v-text="notifications.length"></span>
                        </template>

                        <v-icon>mdi-bell</v-icon>
                    </v-badge>
                    <v-icon v-else>mdi-bell</v-icon>
                </v-btn>
            </template>

            <v-list :tile="false" nav>
                <div
                    v-if="notifications.length > 0"
                    style="max-height: 300px; overflow-y: auto;"
                >
                    <app-bar-item
                        :key="`item-${index}`"
                        @click.native="deleteNotification(item)"
                        v-for="(item, index) in notifications"
                    >
                        <v-list-item-title v-text="item" />
                    </app-bar-item>
                </div>
                <div v-else>
                    <app-bar-item>
                        <v-list-item-title
                            v-text="
                                'You have not received any notifications yet!'
                            "
                        />
                    </app-bar-item>
                </div>
            </v-list>
        </v-menu>
        <!-- app bar notifications start -->

        <!-- app bar user start -->
        <v-menu
            bottom
            left
            offset-y
            origin="top right"
            transition="scale-transition"
        >
            <template v-slot:activator="{ attrs, on }">
                <v-btn class="ml-2" min-width="0" text v-bind="attrs" v-on="on">
                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </template>

            <v-list :tile="false" nav min-width="200">
                <div>
                    <app-bar-item @click.native="logout">
                        <v-list-item-title v-text="'Logout'" />
                    </app-bar-item>
                </div>
            </v-list>
        </v-menu>
        <!-- app bar user end -->
    </v-app-bar>
</template>

<script>
import { VHover, VListItem } from 'vuetify/lib';
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'AppBar',
    data: () => ({
        notifications: [],
    }),
    components: {
        /**
         * define app-bar-item component for adding hover effect
         */
        AppBarItem: {
            render(h) {
                return h(VHover, {
                    scopedSlots: {
                        default: ({ hover }) => {
                            return h(
                                VListItem,
                                {
                                    attrs: this.$attrs,
                                    class: {
                                        'black--text': !hover,
                                        'white--text secondary elevation-12': hover,
                                    },
                                    props: {
                                        activeClass: '',
                                        dark: hover,
                                        link: true,
                                        ...this.$attrs,
                                    },
                                },
                                this.$slots.default
                            );
                        },
                    },
                });
            },
        },
    },

    computed: {
        ...mapState({
            drawer: (state) => state.config.drawer,
        }),
    },

    methods: {
        ...mapMutations({
            setDrawer: 'config/SET_DRAWER',
        }),
        logout() {
            this.$toast.default('Logout successfully!');
        },
    },
};
</script>
