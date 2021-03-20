<template>
  <v-card v-bind="$attrs" :class="classes" class="v-card--material pa-3">
    <div class="d-flex grow flex-wrap between">
      <!-- card flag start -->
      <v-sheet
        :class="{ 'pa-7': !$slots.image }"
        :color="color"
        :max-height="icon ? 90 : undefined"
        :width="icon ? 'auto' : '100%'"
        elevation="6"
        class="text-start v-card--material__heading mb-n6"
        dark
      >
        <v-icon v-if="icon" size="32" v-text="icon" />
      </v-sheet>
      <!-- card flag end -->

      <!-- card content start -->
      <div v-if="$slots['after-heading']" class="ml6">
        <slot name="after-heading" />
      </div>
      <!-- card content end -->
    </div>
    <!-- card defalt slot start  eg: footer-->
    <slot />
    <!-- card defalt slot end   eg: footer--->
  </v-card>
</template>

<script>
export default {
  name: "DashboardCard",
  props: {
    color: {
      type: String,
      default: "success"
    },
    icon: {
      type: String,
      default: ""
    },
    image: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },

  computed: {
    classes() {
      return {
        "v-card--material--has-heading": this.hasHeading
      };
    },
    hasHeading() {
      return Boolean(this.$slots.heading || this.title || this.icon);
    }
  }
};
</script>

<style lang="scss" scoped>
.v-card--material {
  margin-top: 30px;
  margin-bottom: 15px;
  &__heading {
    position: relative;
    top: -40px;
    transition: 0.3s ease;
    z-index: 1;
  }
  .between {
    justify-content: space-between;
  }
  .v-sheet {
    border-radius: 4px;
  }
}
</style>
