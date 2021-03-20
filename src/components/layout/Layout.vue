<template>
    <v-app>
        <app-bar />

        <app-drawer />

        <app-view />
    </v-app>
</template>

<script>
export default {
    name: 'Layout',
    components: {
        AppBar: () => import('./AppBar'),
        AppDrawer: () => import('./AppDrawer'),
        AppView: () => import('./AppView'),
    },
};
</script>
