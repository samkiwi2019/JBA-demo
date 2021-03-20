<template>
    <v-main>
        <router-view :key="$router.name" />
        <app-footer />
    </v-main>
</template>

<script>
export default {
    name: 'AppView',

    components: {
        AppFooter: () => import('./AppFooter'),
    },
};
</script>
