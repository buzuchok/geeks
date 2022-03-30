<template>
  <span class="icon-w">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :class="'icon-' + iconName"
      :width="width"
      :height="height"
      :viewBox="viewBox"
      :aria-labelledby="iconName"
      role="presentation"
    >
      <g :fill="iconColor">
        <slot />
      </g>
    </svg>
  </span>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "box"
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    viewBox: {
      type: [Number, String],
      default: "0 0 18 18"
    },
    iconColor: {
      type: String,
      default: "currentColor"
    }
  }
};
</script>

<style scoped>
.icon-w {
  display: flex;
  align-items: center;
  justify-content: center;
}
svg {
  display: inline-block;
  vertical-align: baseline;
}
</style>
