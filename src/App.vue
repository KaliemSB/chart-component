<template>
  <main>
    <Balance :amount="921.48" />
    <Chart />
  </main>
</template>

<script lang="ts" setup>
import Balance from "./components/balance.vue";
import Chart from "./components/chart.vue";
</script>
