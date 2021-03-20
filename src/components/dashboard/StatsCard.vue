<template>
  <dashboard-card :icon="icon" class="v-card--material-stats" v-bind="$attrs" v-on="$listeners">
    <!-- card content slot start -->
    <template v-slot:after-heading>
      <div class="ml-auto text-right">
        <div class="grey--text font-weight-light" v-text="title" />
        <h2 class="font-weight-light text--primary">{{ value }}</h2>
      </div>
    </template>
    <!-- card content slot end -->

    <v-col cols="12" class="px-0">
      <v-divider />
    </v-col>

    <!-- card footer start -->
    <v-icon :color="subIconColor" size="16" class="ml-2 mr-1">{{ subIcon }}</v-icon>
    <span :class="subTextColor" class="caption grey--text font-weight-light" v-text="subText" />
    <!-- card footer end -->
  </dashboard-card>
</template>

<script>
import DashboardCard from "./Card";

export default {
  name: "DashboardStatsCard",

  inheritAttrs: false,
  components: { DashboardCard },
  props: {
    icon: {
      type: String,
      required: true
    },
    subIcon: {
      type: String,
      default: undefined
    },
    subIconColor: {
      type: String,
      default: undefined
    },
    subTextColor: {
      type: String,
      default: undefined
    },
    subText: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      default: undefined
    },
    value: {
      type: String,
      default: undefined
    }
  }
};
</script>

<style lang="scss" scoped>
.v-card--material-stats {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
</style>
