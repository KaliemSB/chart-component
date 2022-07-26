<template>
  <div :class="wrapper().className">
    <h1>Spending - Last 7 days</h1>
    <div :class="bar().className">
      <Bar
        :length="length"
        :days="item.day"
        :height="item.height"
        :high="highIndex === index"
        :value="item.amount"
        v-for="(item, index) in info"
        :key="index"
      />
    </div>
    <hr />
    <div :class="stats().className">
      <div>
        <span>Total this month</span>
        <p>$478.33</p>
      </div>
      <div>
        <p>+2.4%</p>
        <span>from last month</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { css } from "../../stitches.config";
import Bar from "./bar.vue";

const info: any = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const length = info.length;

const amount = Math.max(...Array.from(info, (value: any) => value.amount));
const highIndex = info.findIndex((v: any) => v.amount === amount);

info.forEach((element: any) => {
  const max = Math.max(...Array.from(info, (value: any) => value.amount));

  element.height = Math.round(100 * (element.amount / max));
});

const bar = css({
  display: "flex",
  alignItems: "flex-end ",
  margin: "2rem 0 .7rem 0",
  gap: ".4rem",
});

const stats = css({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  marginTop: ".4rem",
  userSelect: "none",
  "div:first-child": {
    span: {
      color: "$mediumBrown",
      fontSize: "$4",
    },
    p: {
      color: "$darkBrown",
      fontSize: "$3",
      fontWeight: "$2",
    },
  },
  "div:last-child": {
    span: {
      color: "$mediumBrown",
      fontSize: "$4",
    },
    p: {
      color: "$darkBrown",
      fontSize: "$1",
      fontWeight: "$2",
      textAlign: "end",
      marginBottom: "-.4rem",
    },
  },
});

const wrapper = css({
  background: "$veryPaleOrange",
  width: "100%",
  padding: "1rem",
  borderRadius: "$1",
  h1: {
    color: "$darkBrown",
    fontWeight: "$2",
    fontSize: "$2",
    userSelect: "none",
  },
});
</script>
