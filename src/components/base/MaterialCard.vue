<template>
    <v-card v-bind="$attrs" :class="classes" class="v-card--material pa-3 mb-4">
        <div class="d-flex grow flex-wrap">
            <v-avatar
                v-if="avatar"
                size="128"
                class="mx-auto v-card--material__avatar elevation-6"
                color="grey"
            >
                <v-img src="@/assets/avatar.jpg" />
            </v-avatar>
            <!-- Multi-purpose panel start -->
            <v-sheet
                v-else
                :class="{
                    'pa-4': !$slots.image,
                }"
                :color="color"
                :max-height="icon ? 90 : undefined"
                :width="icon ? 'auto' : '100%'"
                elevation="6"
                class="text-start v-card--material__heading mb-n6"
                dark
            >
                <slot v-if="$slots.heading" name="heading" />

                <slot v-else-if="$slots.image" name="image" />

                <div
                    v-else-if="title && !icon"
                    class="display-1 font-weight-light"
                    v-text="title"
                />

                <v-icon v-else-if="icon" size="32" v-text="icon" />

                <div
                    v-if="text"
                    class="headline font-weight-thin"
                    v-text="text"
                />
            </v-sheet>
            <!-- Multi-purpose panel end-->

            <!-- function addition start -->
            <div v-if="$slots['after-heading']" class="ml6">
                <slot name="after-heading" />
            </div>
            <div
                v-else-if="$slots['reveal-actions']"
                class="text-center py-0 mt-n12 col col-12"
            >
                <slot name="reveal-actions" />
            </div>
            <div v-else-if="icon && title" class="ml-4">
                <div class="card-title font-weight-light" v-text="title" />
            </div>
            <!-- Function addition end -->
        </div>

        <slot />

        <template v-if="$slots.actions">
            <v-divider class="mt-2" />

            <v-card-actions class="pb-0">
                <slot name="actions" />
            </v-card-actions>
        </template>
    </v-card>
</template>

<script>
export default {
    name: 'MaterialCard',

    props: {
        avatar: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: 'success',
        },
        icon: {
            type: String,
            default: '',
        },
        image: {
            type: Boolean,
            default: false,
        },
        text: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
    },

    computed: {
        classes() {
            return {
                'v-card--material--has-heading': this.hasHeading,
                // 'v-card--material--hover-reveal': this.hasAltHeading,
            };
        },
        hasHeading() {
            return Boolean(this.$slots.heading || this.title || this.icon);
        },
        hasAltHeading() {
            return Boolean(this.$slots.heading || (this.title && this.icon)); // reveal-actions
        },
    },
};
</script>

<style lang="scss" scoped>
.v-card--material {
    &__avatar {
        position: relative;
        top: -64px;
        margin-bottom: -32px;
    }

    &__heading {
        position: relative;
        top: -40px;
        transition: 0.3s ease;
        z-index: 1;
    }

    &--hover-reveal:hover {
        .v-card--material__heading {
            transform: translateY(-40px);
        }
    }
}

.v-sheet {
    border-radius: 4px;
}
</style>
