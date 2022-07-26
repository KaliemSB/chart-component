<template>
  <div :class="balance().className">
    <div>
      <span>My balance</span>
      <p>${{ props.amount }}</p>
    </div>
    <svg
      width="72"
      height="48"
      viewBox="0 0 72 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <circle fill="#382314" cx="48" cy="24" r="24" />
        <circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23" />
      </g>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { css } from "../../stitches.config";

const props = defineProps({
  amount: Number,
});

const balance = css({
  background: "$primary",
  width: "100%",
  borderRadius: "$1",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "white",
  padding: "1rem",
  userSelect: "none",
  p: {
    fontWeight: "$2",
    fontSize: "$3",
    marginTop: ".2rem",
  },
});
</script>
