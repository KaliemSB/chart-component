<template>
  <div
    :class="`${wrapper({ color: high ? 'high' : 'default' }).className} ${
      tooltip().className
    }`"
  >
    <div />
    <p>{{ props.days }}</p>
  </div>
</template>

<script lang="ts" setup>
import { css } from "../../stitches.config";

const props = defineProps({
  days: String,
  length: Number,
  high: Boolean,
  height: Number,
  value: Number,
});

const tooltip = css({
  "&:hover": {
    "&::after": {
      position: "absolute",
      content: `${props.value}`,
      height: "max-content",
      width: "max-content",
      top: "-2em",
      textAlign: "center",
      background: "$darkBrown",
      color: "white",
      fontSize: ".8em",
      padding: ".2em",
      fontWeight: "$1",
      borderRadius: "$2",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
});

const wrapper = css({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  p: {
    color: "$mediumBrown",
    fontSize: "$4",
    userSelect: "none",
    textAlign: "center",
  },
  div: {
    width: "100%",
    height: `${props.height}px`,
    borderRadius: "$2",
    cursor: "pointer",
    "&:hover": {
      opacity: ".6",
    },
  },
  variants: {
    color: {
      default: {
        div: {
          background: "$primary",
        },
      },
      high: {
        div: {
          background: "$secondary",
        },
      },
    },
  },
  defaultVariants: {
    color: "default",
  },
});
</script>
